class TodosService {

    constructor({ todosEntity }) {
        this.todosEntity = todosEntity;
    }

    async getItem(id) {
        return this.todosEntity.getItem(id);
    }

    async getItems() {
        return this.todosEntity.getItems();
    }

    async addItem(body) {
        return this.todosEntity.addItem(body);
    }

    async updateItem(id, body) {
        return this.todosEntity.updateItem(id, body);
    }

    async updateItemToDone(id) {
        return this.todosEntity.updateItemToDone(id);
    }

    async updateItemToTodo(id) {
        return this.todosEntity.updateItemToTodo(id);
    }

    async deleteItem(id) {
        return this.todosEntity.deleteItem(id);
    }
}

module.exports = TodosService;