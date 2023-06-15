const items = [];

function getItems() {
    return items;
}

function addItem(item) {
    items.push(item);
    return item;
}

module.exports = {
    getItems,
    addItem,
};