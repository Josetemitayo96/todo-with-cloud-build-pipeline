const Todocontroller = require ('../controller/controller.js');
const express =  require ('express');
const router = express.Router();

//get todolist
router.get('/todolist', Todocontroller.getAllTodo);

//create todolist
router.post('/createtodolist', Todocontroller.createNewTodo);

//get a single todolist
router.get('/todolist/:id', Todocontroller.GetASingleTodo);

//delete a single todolist
router.delete('/todolist/:id', Todocontroller.deletingATodo);

//update a single todolist
router.put('/todolist/:id', Todocontroller.updatingTodolist);


module.exports = router;