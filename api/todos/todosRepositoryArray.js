class TodosRepositoryArray {

    constructor() {
        this.items = [];
    }

    findAll() {
        return this.items.slice();// slice para copiar
    }

    findById(id) {
        const found = this.items.find(item => item.id == id);
        return found;
    }

    nextId() {
        let id = this.items.length;
        let found;
        do {
            id++;
            found = this.findById(id);
        } while (found)
        return id;
    }

    create(newItem) {
        const id = this.nextId();
        const newItemWithId = {
            id,
            ...newItem
        }
        this.items.push(newItemWithId);
        return newItemWithId;
    }

    update(id, body) {
        const foundIndex = this.items.findIndex(item => id == item.id);
        this.items[foundIndex] = {
            ...this.items[foundIndex],
            ...body,
        };
        return {...this.items[foundIndex]};// para copiar
    }

    delete(id) {
        const foundIndex = this.items.findIndex(item => id == item.id);
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

module.exports = TodosRepositoryArray;