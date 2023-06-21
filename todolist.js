class TodoList {

    constructor() {
        this.items = [];
    }

    getItems() {
        return this.items;
    }
    
    getItem(id) {
        const found = this.items.find(item => item.id == id);
        return found;
    }

    nextId() {
        const result = this.items.length + 1;
        return result;
    }
    
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

        return this.getItem(id);
    }

    updateItemText(id, text) {
        const body = { text };
        return this.updateItem(id, body);
    }

    updateItemToDone(id) {
        const body = { status: "done" };
        return this.updateItem(id, body);
    }

    updateItemToTodo(id) {
        const body = { status: "todo" };
        return this.updateItem(id, body);
    }

}

module.exports = TodoList;