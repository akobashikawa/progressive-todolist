class TodosRepositoryHash {

    constructor() {
        this.items = {};
    }

    findAll() {
        return this.items;
    }

    findById(id) {
        return this.items[id];
    }

    nextId() {
        let id = Object.keys(this.items).length;
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
        this.items[id] = newItemWithId;
        return newItemWithId;
    }

    update(id, body) {
        this.items[id] = {
            ...this.items[id],
            ...body,
        };
        return {...this.items[id]};// para copiar
    }

    delete(id) {
        let deleted = 0;
        if (this.items[id]) {
            delete this.items[id];
            deleted = 1;
        }
        const result = {
            id,
            deleted
        };
        return result;
    }
}

module.exports = TodosRepositoryHash;