const express = require( 'express' );
const router = express.Router();
const _ = require( 'lodash' );
const bodyParser = require( 'body-parser' );

const urlencodedParser = bodyParser.urlencoded( { extended: false } );

const userController = require( '../../controllers/userController' );
const UserAccountService = userController.UserAccountService;

// router.use( ( req, res, next ) => {
//     res.set( {
//                  // allow any domain, allow REST methods we've implemented
//                  'Access-Control-Allow-Origin': '*',
//                  'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
//                  'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Headers',
//                  // Set content-type for all api requests
//                  'Content-type': 'application/json'
//              } );
//     if( req.method === 'OPTIONS' ) {
//         return res.status( 200 ).end();
//     }
//     next();
// } );

// CREATE User
router.post( '/signup', urlencodedParser, function( req, res ) {
    const body = _.pick( req.body, ['firstname', 'lastname', 'email', 'password'] );
    // First check if username is already taken
    UserAccountService.find( { email: req.body.email } ).then( user => {
        try {
            if( user ) {
                res.status( 401 );
                res.json( { 'error': 'Email already in use.' } );
            } else {
                // Create user if email not in use.
                UserAccountService.create( body )
                    .then( user => {
                        return user.generateAuthToken().then( token => {
                            res.status( 201 );
                            // Send user and token back as response
                            res.json( { 'user': user, 'token': token } );
                        } );
                    } ).catch( err => {
                    console.log( err );
                    res.status( 500 );
                    res.end();
                } );
            }
        } catch( err ) {
            console.log( err );
            res.end();
        }
    } )
        .catch( err => {
            console.log( err );
            res.status( 500 );
            res.end();
        } );

} );

// LOGIN User
router.post( '/login', urlencodedParser, function( req, res ) {
    const body = _.pick( req.body, ['email', 'password'] );
    UserAccountService.login( body ).then( user => {
        return user.generateAuthToken().then( token => {
            res.status( 200 );
            // Send user token back as response
            res.json( { 'user': user, 'token': token } );
        } );
    } ).catch( err => {
        console.log( err );
        res.status( 401 );
        res.json( { 'error': 'Incorrect credentials.' } );
        res.end();
    } );
} );

// TODO: UPDATE User


// TODO: DELETE User


module.exports = router;