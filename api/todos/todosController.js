const TodosService = require('./todosService');
const todosService = new TodosService();

class TodosController {

    constructor() {

    }

    getItem = (req, res, next) => {
        const id = req.params.id;
        const found = todosService.getItem(id);
        if (!found) {
            return res.status(404).json({
                id,
                message: 'item no existe'
            });
        }
        res.json(found);
    };

    getItems = (req, res, next) => {
        const items = todosService.getItems();
        res.json(items);
    };

    addItem = (req, res, next) => {
        const body = req.body;
        const added = todosService.addItem(body);
        res.json(added);
    };

    updateItem = (req, res, next) => {
        const id = parseInt(req.params.id, 10);
        const body = req.body;
        const updated = todosService.updateItem(id, body);
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
        const updated = todosService.updateItemToDone(id);
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
        const updated = todosService.updateItemToTodo(id);
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
        const result = todosService.deleteItem(id);
        res.json(result);
    };

}

module.exports = TodosController;