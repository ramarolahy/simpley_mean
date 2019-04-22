const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const flash = require( 'flash' );
const _ = require( 'lodash' );
const url = require( 'url' );

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded( { extended: false } );
const router = express.Router();

// Local
const { User } = require( '../../models/user' );

/**
 *  GET signup route
 *      Renders the signup page
 *
 */
router.get( '/', urlencodedParser, function( req, res ) {
    res.render( 'signup', { title: 'Signup' } );
} );

/**
 *  POST signup route
 *      Creates an object body from user inputs
 *      Creates new instance of USer
 *      Save new user with new Auth token
 */
router.post( '/', urlencodedParser, function( req, res ) {
    // Get user input and map a new user object from body content
    // Create a new instance of User
    const body = _.pick( req.body, ['firstname', 'lastname', 'email', 'password'] ); // This already gets the user input
    const user = new User( body );
    // Check first if email is already in use
    User.findOne( { email: req.body.email } ).then( user => {
        try {
            if( user ) {
                req.flash( 'warning', 'Email already in use' );
                res.redirect( url.format( { pathname: '/signup', path: req.path, flash: req.flash } ) );
            }
        } catch( err ) {
            console.log( err );
            req.flash( 'warning', 'Oops! Something went wrong!' );
            res.redirect( url.format( { pathname: '/signup', path: req.path, flash: req.flash } ) );
        }
    } ).then( () => {
        next();
    } );
    // Save user if email not in use
    user.save().then( () => {
        return user.generateAuthToken();
    } ).then( token => {
        // prefixing a header with x- is to customize it
        req.flash( 'light', 'You can login now.' );
        res.header( 'x-auth', token ).redirect(
            url.format( { pathname: '/login', path: req.path, flash: req.flash } ) );
    } ).catch( err => {
        if( err ) {
            console.log( err );
            res.redirect(
                url.format(
                    { pathname: '/login', flash: req.flash( 'warning', 'Please verify your information.' ) } ) );

        }
    } );
} );


module.exports = router;