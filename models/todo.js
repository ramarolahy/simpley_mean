const mongoose = require ('mongoose');

const Schema = mongoose.Schema;

// Create mongoose schema for todo
const TodoSchema = new Schema ({
                                   owner: {
                                       type: String,
                                       required: true,
                                   },

                                   desc: {
                                       type: String,
                                       required: true,
                                       minlength: 1, // Min length of char
                                       trim: true // trim blank spaces
                                   },
                                   order: {
                                       type: Number,
                                       default: 9999
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


const Todo = mongoose.model ('Todo', TodoSchema);

module.exports = {Todo};