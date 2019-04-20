const express = require( 'express' );
const router = express.Router();
const multer = require( 'multer' );
const todayController = require( '../../controllers/todayController' );
const upload = multer( {
                           storage: todayController.storage
                           //fileFilter: todayControllers.imageFilter
                       } );

const { authenticate } = require( '../../middleware/authenticate' );


/**
 * POST avatar route
 * Uploads image from the user and redirects back to /today
 * No size filtering yet :( will work on it though
 * -> This will be moved with the userController once I have it done
 */
router.post( '/:userid', authenticate, upload.single( 'avatar' ), ( req, res, next ) => {
    console.log( 'req.file: ' + req.file.path );
    try {
        req.session.user_avatar = `../images/user/${ req.params.userid }-avatar.png`;
        res.redirect( '/today' );
    } catch( err ) {
        if( err ) {
            console.log( err );
            res.redirect(
                url.format( { pathname: '/today', flash: req.flash( 'warning', 'Something went wrong!' ) } ) );
        }
    }
} );

module.exports = router;