const TodoList = require('../../core/todolist');
const todoList = new TodoList();

class TodosController {

    constructor() {

    }

    getItem = (req, res, next) => {
        const id = req.params.id;
        const found = todoList.getItem(id);
        if (!found) {
            return res.status(404).json({
                id,
                message: 'item no existe'
            });
        }
        res.json(found);
    };

    getItems = (req, res, next) => {
        const items = todoList.getItems();
        res.json(items);
    };

    addItem = (req, res, next) => {
        const body = req.body;
        const added = todoList.addItem(body);
        res.json(added);
    };

    updateItem = (req, res, next) => {
        const id = parseInt(req.params.id, 10);
        const body = req.body;
        const updated = todoList.updateItem(id, body);
        if (!updated) {
            return res.status(500).json({
                id,
                message: 'item no actualizado'
            });
        }
        res.json(updated);
    };

    doneItem = (req, res, next) => {
        const id = parseInt(req.params.id, 10);
        const updated = todoList.updateItemToDone(id);
        if (!updated) {
            return res.status(500).json({
                id,
                message: 'item no actualizado'
            });
        }
        res.json(updated);
    };
    
    todoItem = (req, res, next) => {
        const id = parseInt(req.params.id, 10);
        const updated = todoList.updateItemToTodo(id);
        if (!updated) {
            return res.status(500).json({
                id,
                message: 'item no actualizado'
            });
        }
        res.json(updated);
    };

    deleteItem = (req, res, next) => {
        const id = parseInt(req.params.id, 10);
        const result = todoList.deleteItem(id);
        res.json(result);
    };


}

module.exports = TodosController;