const multer = require ('multer');
const {Todo} = require ('../models/todo');

/** This function will help limit task character lengths
 *
 * @param title : String - Task title
 * @param limit : Integer -  Char limit count
 * @returns : old title if < limit ELSE newTitle
 */
const limitTaskTitle = (title, limit = 17) => {
    const newTitle = [];
    if (title.length > limit) {
        title.split (' ').reduce ((acc, cur) => {
            if (acc + cur.length <= limit) {
                newTitle.push (cur);
            }
            return acc + cur.length;
        }, 0);
        return `${newTitle.join (' ')} ...`;
    }
    // return the result
    return title;
};

// configure disk storage for files handled by multer
const storage = multer.diskStorage ({
                                        destination: function (req, file, cb) {
                                            cb (null, 'public/images/user');
                                        },
                                        filename: function (req, file, cb) {
                                            cb (null, req.session.user_id + '-avatar.png');
                                        }
                                    });


// configure file extension filter for uploads
const imageFilter = function (req, file, cb) {
    if (req.file.originalname.match (/\.(jpg|jpeg|png|gif)$/)) {
        cb (null, true);
    } else {
        cb (new Error ('OnlyImageFilesAllowed'), false);
    }
};

/**
 * TodayService Class for CRUD static methods
 */
class TodayService {
    // READ - today
    static list(userid) {
        return Todo.find ({owner: userid})
            .then (todos => {
                return todos;
            });
    }

    // CREATE - today
    static create(data) {
        const todo = new Todo (data);
        return todo.save ();
    }

    // UPDATE - today
    static update(id, data) {
        return Todo.findById(id)
            .then((todo)=>{
                todo.set(data);
                todo.save();
                return todo;
            });
    }

    // DELETE - today
    static delete(id) {
        return Todo.findOneAndDelete ({_id: id})
            .then (todo => {
                // removed todo
                return todo;
            });
    }
}


module.exports = {
    limitTaskTitle,
    imageFilter,
    storage,
    TodayService
};