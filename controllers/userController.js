const { User } = require( '../models/user' );
const multer = require( 'multer' );

// configure disk storage for files handled by multer
const storage = multer.diskStorage( {
                                        destination: function( req, file, cb ) {
                                            cb( null, 'public/images/user' );
                                        },
                                        filename: function( req, file, cb ) {
                                            cb( null, req.session.user_id + '-avatar.png' );
                                        }
                                    } );


// configure file extension filter for uploads
const imageFilter = function( req, file, cb ) {
    if( req.file.originalname.match( /\.(jpg|jpeg|png|gif)$/ ) ) {
        cb( null, true );
    } else {
        cb( new Error( 'OnlyImageFilesAllowed' ), false );
    }
};

class UserAccountService {
    // CREATE User
    static create( data ) {
        // Create user with ['firstname', 'lastname', 'email', 'password']
        const user = new User( data );
        return user.save();
    }

    // READ User -> Used before creating user to avoid username duplicates
    static find( data ) {
        // Find a user by username [AND] password
       return User.findOne( data )
            .then( user => {
                return user;
            } );
    }

    // FindByToken -> To check during session if user
    static findByToken( token ) {
       return User.findByToken( token )
            .then( data => {
                return data;
            } );
    }

    // LOGIN User
    static login( data ) {
     return  User.findByCredentials( data.email, data.password )
            .then( user => {
                return user;
            } );
    }

    // UPDATE User

    // DELETE User

}

module.exports = { storage, imageFilter, UserAccountService };