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

}

module.exports = TodoList;