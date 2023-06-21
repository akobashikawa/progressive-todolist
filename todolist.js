const items = [];

function getItems() {
    return items;
}

function getItem(id) {
    const found = items.find(item => item.id == id);
    return found;
}

function addItem(item) {
    items.push(item);
    return item;
}

module.exports = {
    getItems,
    getItem,
    addItem,
};