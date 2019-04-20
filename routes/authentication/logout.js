const express = require ( 'express');
const url = require ('url');
const router = express.Router ();

/**
 * GET route to kill session and logout the user
 */
router.get ('/', function (req, res) {
    // Destroy the session
    req.session.destroy ();
    res.redirect (url.format ({pathname: '/login', path: req.path}));
});


module.exports = router;

