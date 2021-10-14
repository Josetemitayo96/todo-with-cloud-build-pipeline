const db = require ('../db/db.js');

class Todocontroller{
    getAllTodo(req, res){
        res.status (200).send({
            success: 'true',
            message: 'todos retrieved successfully',
            todos: db
        })  
     }

     createNewTodo(req, res) {
        if (!req.body.title){
            return res.status(400).send({
                success: 'failed',
                message: 'title not added'
            });
        } else if (!req.body.description){
            return res.status(400).send({
                success: 'failed',
                message: 'discreption not added'
            });
        }
    const todo = {
        id: db.length + 1,
        title: req.body.title,
        description: req.body.description
    }
    
    db.push(todo);
    return res.status(200).send({
        success: 'true',
        message: 'todo added successfully',
        todo
    })
    
    }

    GetASingleTodo(req, res){
        const id = parseInt(req.params.id, 10);
        db.map((todo)=>{
            if (todo.id === id ){
                return res.status(200).send({
                    success: 'true',
                    message: 'todo retrieved successfully',
                    todo
                });
            }
        });
        return res.status(404).send({
            success: 'false',
            message: 'todo does not exist'
        });
    }

    deletingATodo(req, res){
        const id = parseInt(req.params.id, 10);
        db.map((todo, index)=>{
            if (todo.id === id ){
                db.splice(index, 1);
                return res.status(200).send({
                    success: 'true',
                    message: 'todo deleted successfully',
                
                });
            }
        });
        return res.status(404).send({
            success: 'false',
            message: 'todo does not exist'
        });
    }

    updatingTodolist(req, res){
        const id = parseInt(req.params.id, 10);
        let todoFound;
        let itemIndex;
        db.map((todo, index)=>{
            if (todo.id == id){
                todoFound = todo;
                itemIndex = index;
            }
        });
    
        if (!todoFound){
            return res.status(404).send({
                success: 'false',
                message: 'todo not found',
            });
        }
        if (!req.body.title){
            return res.status(400).send({
                success: 'failed',
                message: 'title not added'
            });
        } else if (!req.body.description){
            return res.status(400).send({
                success: 'failed',
                message: 'discreption not added'
            });
        }
    
    const updatedtodo = {
        id: todoFound.id,
        title: req.body.title|| todoFound.title,
        description: req.body.description|| todoFound.description
    };
    
    db.splice(itemIndex, 1, updatedtodo);
    return res.status(200).send({
        success: 'true',
        message: 'todo added successfully',
        updatedtodo
    });
    
    }
}

const todocontroller = new Todocontroller();
module.exports = todocontroller;
