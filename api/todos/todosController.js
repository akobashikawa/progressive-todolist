class TodosController {

    constructor({ todosService }) {
        this.todosService = todosService;
    }

    getItem = async (req, res, next) => {
        const id = req.params.id;
        const found = await this.todosService.getItem(id);
        if (!found) {
            return res.status(404).json({
                id,
                message: 'item no existe'
            });
        }
        res.json(found);
    };

    getItems = async (req, res, next) => {
        const items = await this.todosService.getItems();
        res.json(items);
    };

    addItem = async (req, res, next) => {
        const body = req.body;
        const added = await this.todosService.addItem(body);
        res.json(added);
    };

    updateItem = async (req, res, next) => {
        const id = parseInt(req.params.id, 10);
        const body = req.body;
        const updated = await this.todosService.updateItem(id, body);
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
        const updated = await this.todosService.updateItemToDone(id);
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
        const updated = await this.todosService.updateItemToTodo(id);
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
        const result = await this.todosService.deleteItem(id);
        res.json(result);
    };

}

module.exports = TodosController;