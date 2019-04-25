const express = require( 'express' );
const fs = require( 'fs' );
const _ = require( 'lodash' );
const url = require( 'url' );
const router = express.Router();
// Local
const { Todo } = require( '../models/todo' );
const { authenticate } = require( '../middleware/authenticate' );
const { limitTaskTitle } = require( '../controllers/todayController' );
const todayController = require( '../controllers/todayController' );
const TodayService = todayController.TodayService;


/**
 *  Get Today route
 *  Calls isLoggedIn middleware to check if user is logged in
 *  Gets user_id as query to display todos
 */
router.get( '/', authenticate, function( req, res ) {
    const userAvatar = req.session.user_avatar;
    // query db for todos then pass it to page
    TodayService.list( req.session.user_id )
        .then( ( todos ) => {
            res.render( 'today', {
                title: 'Today',
                todos: todos,
                avatar: userAvatar,
                is_active: true, // Show/Hide login/logout menu
                user: req.session.current_user,
                user_id: req.session.user_id,
                taskTitle: limitTaskTitle,
                toString: toString()
            } );
        } ).catch( err => {
        // Ideally we would check for error type and respond accordingly
        if( err ) {
            res.status( 401 );
            res.redirect(
                url.format( { pathname: '/logout', flash: req.flash( 'warning', 'Something went wrong!' ) } ) );
        }
    });
} );

/**
 *  POST today route
 *  Add new todo item
 *  Redirect to today page
 */
router.post( '/', authenticate, ( req, res ) => {
    const todo = new Todo( { owner: req.session.user_id, desc: req.body.newTodo } );
    TodayService.create( todo )
        .then( () => {
            res.redirect( '/today' );
        }, err => {
            // Ideally we would check for error type and respond accordingly
            if( err ) {
                res.status( 400 );//.send (err);
                res.redirect(
                    url.format( { pathname: '/logout', flash: req.flash( 'warning', 'Something went wrong!' ) } ) );
            }
        } );
} );

/**
 * POST /update route
 * Update todo item
 */
router.post( '/:todoid', authenticate, ( req, res ) => {

    let body;
    // ===================================================
    // Update a todo item
    if( req.body.updatedTodo ) { // Update todo description
        body = { desc: req.body.updatedTodo, completed: false, completedAt: null };
        // Else if user is setting todo to complete
    } else if( req.body.isCompleted ) {
        // Else if user submitted the complete todo form
        // Get current timestamp to set completedAt
        const now = new Date();
        // The completed property takes a boolean
        // Set completed to true if current value is 'false'
        const isCompleted = () => {
            return req.body.isCompleted === 'false';
        };
        // IF completed is set to true, set completedAt to now
        const completedAt = () => {
            if( req.body.isCompleted === 'false' ) {
                return now;
            } else {
                return null;
            }
        };
        body = { desc: req.body.currentDesc, completed: isCompleted(), completedAt: completedAt() };
    // ===================================================
    // Delete a todo item
    } else {
        TodayService.delete( req.params.todoid )
            // redirect to /today
            .then( () => {
                res.redirect( '/today' );
            } )
            .catch( err => {
                // Ideally we would check for error type and respond accordingly
                if( err ) {
                    res.redirect(
                        url.format( { pathname: '/today', flash: req.flash( 'warning', 'Something went wrong!' ) } ) );
                }
            } );
    }
    // Update selected todo item
    TodayService.update( req.params.todoid, body )
        .then( () => {
            res.redirect( '/today' );
        } )
        .catch( ( err ) => {
            // Ideally we would check for error type and respond accordingly
            if( err ) {
                console.log( 'Error: ' + err );
                res.redirect(
                    url.format( { pathname: '/today', flash: req.flash( 'warning', 'Something went wrong!' ) } ) );
            }
        } );
} );




module.exports = router;
