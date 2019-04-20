const express = require('express');
const session = require('express-session');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Simpley' });
});

module.exports = router;

