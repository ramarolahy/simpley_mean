const express = require ('express');
const router = express.Router ();
const todayController = require ('../../controllers/todayController');

const TodayService = todayController.TodayService;

router.use((req, res, next)=>{
    res.set({
                // allow any domain, allow REST methods we've implemented
                'Access-Control-Allow-Origin':'*',
                'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,OPTIONS',
                "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers",
                // Set content-type for all api requests
                'Content-type':'application/json'
            });
    if (req.method === 'OPTIONS'){
        return res.status(200).end();
    }
    next();
});

/**
 * TODAY API ROUTES
 * @type {Router}
 */
// READ - today
router.get ('/:userid', (req, res) => {
    TodayService.list (req.params.userid)
        .then (todos => {
            res.status (200);
            res.json (todos);
        }).catch( err => {
            if(err){
                res.status(404);
                console.log(err);
                res.end();
            }
    })
});
// CREATE - today
router.post ('/', (req, res, next) => {
   const data = req.body;
    TodayService.create (data)
        .then (todo => {
            res.status (201);
            res.json (todo);
        }).catch(err => {
            if(err){
                res.status(500);
                console.log(err);
                res.end();
            }
    })
});
// UPDATE - today
router.put ('/:todoid', (req, res) => {
    let putData = req.body;
    let todoid = req.params.todoid;
    TodayService.update (todoid, putData)
        .then (updatedTodo => {
            res.status (200);
            res.json (updatedTodo);
        }).catch (err => {
        if (err) {
            res.status (404);
            res.end ();
        }
    });
});
// DELETE - today
router.delete('/:todoid', (req, res) => {
    TodayService.delete(req.params.todoid)
        .then( todo => {
            res.status(200);
            res.json(todo)
        }).catch(err => {
            if(err) {
                res.status(404);
                res.end();
            }
    })
});


module.exports = router;