const TodosRepositoryArray = require('./todosRepositoryArray');
const todosRepository = new TodosRepositoryArray();

const TodoList = require('../../domain/todolist');
const todosEntity = new TodoList({ todosRepository });

const TodosService = require('./todosService');
const todosService = new TodosService({ todosEntity });

class TodosController {

    constructor() {

    }

    getItem = async (req, res, next) => {
        const id = req.params.id;
        const found = await todosService.getItem(id);
        if (!found) {
            return res.status(404).json({
                id,
                message: 'item no existe'
            });
        }
        res.json(found);
    };

    getItems = async (req, res, next) => {
        const items = await todosService.getItems();
        res.json(items);
    };

    addItem = async (req, res, next) => {
        const body = req.body;
        const added = await todosService.addItem(body);
        res.json(added);
    };

    updateItem = async (req, res, next) => {
        const id = parseInt(req.params.id, 10);
        const body = req.body;
        const updated = await todosService.updateItem(id, body);
        if (!updated) {
            return res.status(500).json({
                id,
                message: 'item no actualizado'
            });
        }
        res.json(updated);
    };

    doneItem = async (req, res, next) => {
        const id = parseInt(req.params.id, 10);
        const updated = await todosService.updateItemToDone(id);
        if (!updated) {
            return res.status(500).json({
                id,
                message: 'item no actualizado'
            });
        }
        res.json(updated);
    };
    
    todoItem = async (req, res, next) => {
        const id = parseInt(req.params.id, 10);
        const updated = await todosService.updateItemToTodo(id);
        if (!updated) {
            return res.status(500).json({
                id,
                message: 'item no actualizado'
            });
        }
        res.json(updated);
    };

    deleteItem = async (req, res, next) => {
        const id = parseInt(req.params.id, 10);
        const result = await todosService.deleteItem(id);
        res.json(result);
    };

}

module.exports = TodosController;