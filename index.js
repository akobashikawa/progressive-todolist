const { getItems, addItem } = require('./todolist');

function main() {
    let items = getItems();
    console.log(items);

    const newItem = { text: 'Item A'};
    const added = addItem(newItem);
    items = getItems();
    console.log(items);

}

main();