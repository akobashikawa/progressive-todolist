class TodoList {

    constructor({ todosRepository }) {
        this.todosRepository = todosRepository;
    }

    // La lista es obtenida
    async getItems() {
        return this.todosRepository.findAll();
    }
    
    // Un item es obtenido
    async getItem(id) {
        return this.todosRepository.findById(id);
    }

    // Un item es agregado a la lista
    async addItem(body) {
        const newItem = {
            ...body,
            status: 'todo',
        }
        const added = await this.todosRepository.create(newItem);
        return added;
    }

    async updateItem(id, body) {
        return this.todosRepository.update(id, body);
        return updated;
    }

    // El texto de un item es modificado
    async updateItemText(id, text) {
        const body = { text };
        return this.updateItem(id, body);
    }

    // Un item es marcado como hecho
    async updateItemToDone(id) {
        const body = { status: "done" };
        return this.updateItem(id, body);
    }

    // Un item es desmarcado como hecho
    async updateItemToTodo(id) {
        const body = { status: "todo" };
        return this.updateItem(id, body);
    }

    // Un item es eliminado
    async deleteItem(id) {
        return this.todosRepository.delete(id);
    }

}

module.exports = TodoList;