require('dotenv').config();

const env = process.env.NODE_ENV || 'development';
let DB_URI;
console.log('env: ', env);
// Switch db based on the environment
if (env === 'development') {
    process.env.PORT = 3000;
    DB_URI = process.env.MONGODB_DEV_URI;
} if (env === 'production') {
    // a5 8084 a6 8085 final 8086. Or just shut down past version
    process.env.PORT = 8084;
    DB_URI = process.env.MONGODB_URI;
} else if (env === 'test') {
    process.env.PORT = 3000;
    DB_URI = process.env.MONGODB_TEST_URI;
}

module.exports = {env, DB_URI};