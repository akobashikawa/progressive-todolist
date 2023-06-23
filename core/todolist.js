const TodosRepositoryArray = require('../api/todos/todosRepositoryArray');
const todosRepositoryArray = new TodosRepositoryArray();
class TodoList {

    constructor() {
        
    }

    // La lista es obtenida
    getItems() {
        return todosRepositoryArray.findAll();
    }
    
    // Un item es obtenido
    getItem(id) {
        const found = todosRepositoryArray.findById(id);
        return found;
    }

    // Un item es agregado a la lista
    addItem(body) {
        const newItem = {
            ...body,
            status: 'todo',
        }
        const added = todosRepositoryArray.create(newItem);
        return added;
    }

    updateItem(id, body) {
        const updated = todosRepositoryArray.update(id, body);
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
        const result = todosRepositoryArray.delete(id);
        return result;
    }

}

module.exports = TodoList;