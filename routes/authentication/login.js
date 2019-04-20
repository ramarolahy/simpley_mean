const express = require ( 'express');
const session = require ( 'express-session');
const bodyParser = require ( 'body-parser');
const flash = require ( 'flash');
const _ = require ( 'lodash');
const url = require ('url');

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded ({extended: false});
const router = express.Router ();

// Local
const {User} = require ( '../../models/user');

/**
 *  GET login route
 *      Renders the login page
 *
 */
router.get ('/', urlencodedParser, function (req, res) {
    res.render ('login', {title: 'Login'});
});
/**
 *  POST login route
 *      finds user by email and password
 *      generates auth token - stores token into session
 *      IF user is found -> redirects to today
 */
router.post ('/', urlencodedParser, function (req, res) {
    // The Model methods and instance methods were setup to accept Object types only
    const body = _.pick (req.body, ['email', 'password']);
    User.findByCredentials (body.email, body.password).then (user => {
        return user.generateAuthToken ().then (token => {
            req.session.access_token = token;
            req.session.current_user = user.firstname;
            req.session.user_id = user._id;
            // I tried to use fs.existsSync() here and fs.access() to test if the user avatar
            // exists but could not get it work (always returns false)
            // so a double layered background-image will take care of it.
            req.session.user_avatar =`../images/user/${req.session.user_id}-avatar.png`;
        }).then (() => {
            res.redirect (url.format ({pathname: '/today'}));
        });
    }).catch (err => {
        if (err) {
            console.log (err);
            res.redirect (
                url.format ({pathname: '/login', flash: req.flash ('warning', 'Please verify your information.')}));
        }
    });
});


module.exports = router;