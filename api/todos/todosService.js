class TodosService {

    constructor({ todosEntity }) {
        this.todosEntity = todosEntity;
    }

    getItem() {
        return this.todosEntity.getItem(id);
    }

    getItems() {
        return this.todosEntity.getItems();
    }

    addItem(body) {
        return this.todosEntity.addItem(body);
    }

    updateItem(id, body) {
        return this.todosEntity.updateItem(id, body);
    }

    updateItemToDone(id) {
        return this.todosEntity.updateItemToDone(id);
    }

    updateItemToTodo(id) {
        return this.todosEntity.updateItemToTodo(id);
    }

    deleteItem(id) {
        return this.todosEntity.deleteItem(id);
    }
}

module.exports = TodosService;