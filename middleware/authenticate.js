const {User} = require ('./../models/user');
const url = require ('url');

const authenticate = (req, res, next) => {
    // Get authentication token from the session
    const token = req.session.access_token;
    User.findByToken (token).then (user => {
        // If no user found with valid token
        if (!user) {
            return Promise.reject ({'error': 'No user authenticated.'});
        }
        // If user found
        req.user = user;
        req.token = token;
        next (); // Then go to the next lines of code
    }).catch (err => {
        res.status (401);
        res.redirect (url.format ({pathname: '/login', flash: req.flash('danger', 'Please login first.')}));
    });
};

module.exports = {authenticate};