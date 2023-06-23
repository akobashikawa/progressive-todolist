class TodoList {

    constructor({ todosRepository }) {
        this.todosRepository = todosRepository;
    }

    // La lista es obtenida
    getItems() {
        return this.todosRepository.findAll();
    }
    
    // Un item es obtenido
    getItem(id) {
        const found = this.todosRepository.findById(id);
        return found;
    }

    // Un item es agregado a la lista
    addItem(body) {
        const newItem = {
            ...body,
            status: 'todo',
        }
        const added = this.todosRepository.create(newItem);
        return added;
    }

    updateItem(id, body) {
        const updated = this.todosRepository.update(id, body);
        return updated;
    }

    // El texto de un item es modificado
    updateItemText(id, text) {
        const body = { text };
        return this.updateItem(id, body);
    }

    // Un item es marcado como hecho
    updateItemToDone(id) {
        const body = { status: "done" };
        return this.updateItem(id, body);
    }

    // Un item es desmarcado como hecho
    updateItemToTodo(id) {
        const body = { status: "todo" };
        return this.updateItem(id, body);
    }

    // Un item es eliminado
    deleteItem(id) {
        const result = this.todosRepository.delete(id);
        return result;
    }

}

module.exports = TodoList;