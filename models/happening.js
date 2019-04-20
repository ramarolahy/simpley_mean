const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

// Create mongoose schema for happening
const HappeningSchema = new Schema ({
                                   owner: {
                                       type: String,
                                       required: true
                                   },
                                   title: {
                                       type: String,
                                       required: true,
                                       default: false
                                   },

                                   desc: {
                                       type: String,
                                       required: true,
                                       minlength: 1, // Min length of char
                                       trim: true // trim blank spaces
                                   },
                                   location: {
                                       type: String,
                                       default: false
                                   },
                                   date: {
                                       type: Date,
                                       default: false
                                   },
                                   completed: {
                                       type: Boolean,
                                       default: false
                                   },
                                   completedAt: {
                                       type: Date,
                                       default: null
                                   }
                               });
// ==============UserSchema Methods=====================
// The following methods need the 'this' binding so use function() and NOT arrow function
// .methods turns methods into an instance method. SEE https://mongoosejs.com/docs/guide.html#methods
// .statics method turns a method into a model method. SEE: https://mongoosejs.com/docs/guide.html#statics
//=======================================================


const Happening = mongoose.model ('Happening', HappeningSchema);

module.exports = {Happening};