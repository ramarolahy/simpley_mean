const {DB_URI} = require('../config');
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
// Get database URI from app config file
mongoose.connect(DB_URI, {useNewUrlParser: true});

// Verify connection
const db = mongoose.connection;
// Check database connection and log error / success
db.on('error', console.error.bind(console, 'Database connection error:'));
db.once('open', () => {
    console.log('Database connected');
});


module.exports = {mongoose};