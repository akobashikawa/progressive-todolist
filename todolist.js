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
    
    addItem(item) {
        this.items.push(item);
        return item;
    }

    updateItem(id, body) {
        let found = this.getItem(id);
        found = {
            ...found,
            ...body,
        };
        return found;
    }

    updateItemText(id, text) {
        const body = { text };
        return this.updateItem(id, body);
    }

    updateItemToDone(id) {
        const body = { status: "done" };
        return this.updateItem(id, body);
    }

}

module.exports = TodoList;