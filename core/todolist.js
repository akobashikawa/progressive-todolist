class TodoList {

    constructor() {
        this.items = [];
    }

    // La lista es obtenida
    getItems() {
        return this.items;
    }
    
    // Un item es obtenido
    getItem(id) {
        const found = this.items.find(item => item.id == id);
        return found;
    }

    nextId() {
        const result = this.items.length + 1;
        return result;
    }
    
    // Un item es agregado a la lista
    addItem(body) {
        const id = this.nextId();
        const newItem = {
            id,
            ...body,
            status: 'todo',
        }
        this.items.push(newItem);
        return newItem;
    }

    updateItem(id, body) {
        const foundIndex = this.items.findIndex(item => item.id == id);
        this.items[foundIndex] = {
            ...this.items[foundIndex],
            ...body,
        };
        const updated = this.getItem(id);
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
        const foundIndex = this.items.findIndex(item => item.id == id);
        let deleted = 0;
        if (foundIndex > -1) {
            const item = this.items.splice(foundIndex, 1);
            deleted = item ? 1 : 0;
        }
        const result = {
            id,
            deleted
        };
        return result;
    }

}

module.exports = TodoList;