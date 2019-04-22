const mongoose = require( 'mongoose' );
const jwt = require( 'jsonwebtoken' );
const _ = require( 'lodash' );
const bcrypt = require( 'bcryptjs' );

const Schema = mongoose.Schema;

// Create User schema
// schemas will use validators for emails: see https://www.npmjs.com/package/validator
const UserSchema = new Schema( {
                                   firstname: {
                                       type: String,
                                       required: true,
                                       minlength: 1,
                                       trim: true
                                   },
                                   lastname: {
                                       type: String,
                                       required: true,
                                       minlength: 1,
                                       trim: true
                                   },
                                   email: {
                                       type: String,
                                       required: true,
                                       trim: true,
                                       minlength: 1,
                                       unique: true
                                   },
                                   password: {
                                       type: String,
                                       required: true,
                                       minlength: 6
                                       // Set password requirements?
                                   },

                                   // Read about token-based authorization here: https://appdividend.com/2018/02/07/node-js-jwt-authentication-tutorial-scratch/
                                   tokens: [{
                                       access: {
                                           type: String,
                                           required: true
                                       },
                                       token: {
                                           type: String,
                                           required: true
                                       }
                                   }]
                               } );


// ==============UserSchema Methods=====================
// The following methods need the 'this' binding so use function() and NOT arrow function
// .methods turns methods into an instance method. SEE https://mongoosejs.com/docs/guide.html#methods
// .statics method turns a method into a model method. SEE: https://mongoosejs.com/docs/guide.html#statics
//=======================================================

/**
 * As security measure, we will leave off the user password and token when sending back a user object to the client
 * We are then going to create a custom toJSON() method by using toObject() that maps a new object from picked
 * properties
 */
UserSchema.methods.toJSON = function() {
    // We use user because this will be an instance method
    // The method toJSON() will be available to all user instance
    const user = this;
    const userObject = user.toObject();
    // _.pick creates an object composed of the picked **object** properties
    // SEE https://lodash.com/docs/4.17.11#pick
    return _.pick( userObject, ['_id', 'firstname', 'email'] );
};

/**
 * INSTANCE Method to generate Auth Token
 * @returns {Promise|*|PromiseLike<T | never>|Promise<T | never>}
 */
UserSchema.methods.generateAuthToken = function() {
    // We use user because this will be an instance method
    // The method generateAuthToken() will be available to all user instance
    const user = this;
    const access = 'auth';
    const expiry = new Date();
    expiry.setDate( expiry.getDate() + 7 );
    // SEE: https://www.npmjs.com/package/jsonwebtoken
    const token = jwt.sign( {
                                _id: user._id.toHexString(),
                                firstname: user.firstname,
                                exp: parseInt( expiry.getTime() / 1000 ),
                                access
                            }, process.env.JWT_SECRET ).toString();

    user.tokens.push( { access, token } );
    if( user.tokens.length > 1 ) user.tokens.shift();

    // To allow todayController.js to chain on to the promise, we will return this promise (returning another promise here is fine since token is a value, this is legal)
    // See https://javascript.info/promise-chaining for promise-chaining
    return user.save().then( () => {
        // this will be passed on to another promise in server.js
        return token;
    } );
};
/**
 * MODEL Method to find user by token during the session
 * @param token
 * @returns {void|Query|Promise<any>}
 */
UserSchema.statics.findByToken = function( token ) {
    // Reference to the User model
    const User = this;
    let decoded;
    // First verify if the token exist
    try {
        decoded = jwt.verify( token, process.env.JWT_SECRET );
    } catch( err ) {
        // Reject promise if no match
        return new Promise( ( resolve, reject ) => {
            reject( new Error( 'userNotFound' ) );
        } );
    }
    return User.findOne( {
                             _id: decoded._id,
                             'tokens.token': token, // Using quotes allow to query a nested document
                             'tokens.access': 'auth'
                         } );

};
/**
 * MODEL Method to find user by email and password when login in.
 * @param email
 * @param password
 * @returns {Promise}
 */
UserSchema.statics.findByCredentials = function( email, password ) {
    const User = this;
    // Find the user using the email provided
    // IF FOUND, compare passwords
    return User.findOne( { email } ).then( user => {
        if( !user ) {
            console.log( 'User not found' );
            return Promise.reject();
        }
        // We are going to create a new Promise where bcrypt can be called in. bcrypt can only take callbacks inside
        return new Promise( ( resolve, reject ) => {
            // Check if password match with bcryptjs .compare()
            // => As of bcryptjs 2.4.0, compare returns a promise if callback is omitted
            bcrypt.compare( password, user.password, ( err, res ) => {
                ( res ) ? resolve( user ) : reject( new Error( 'userNotFound' ) );
            } );
        } );

    } );
};

/**
 *  Method to hash user passwords with mongoose middleware
 *  with pre middleware functions, the function hash is called BEFORE the user is saved to the db
 */
UserSchema.pre( 'save', function( next ) {
    const user = this;
    // We only want to hash string passwords, not hashed passwords (example if the user modifies their info later on)
    // isModified() is mongoose method that returns true if document has been modified
    if( user.isModified( 'password' ) ) {
        // bycript.js is a library to help hash passwords and add a 'salt' at the end for added security
        // SEE: https://www.npmjs.com/package/bcryptjs
        bcrypt.genSalt( 10, ( err, salt ) => {
            bcrypt.hash( user.password, salt, ( err, hash ) => {
                user.password = hash;
                next();
            } );
        } );
    } else {
        next();
    }
} );

const User = mongoose.model( 'User', UserSchema );

module.exports = { User };