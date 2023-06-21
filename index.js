const TodoList = require('./todolist');

function main() {
    const todoList = new TodoList();

    // La lista es obtenida
    let items = todoList.getItems();

    // La lista es mostrada
    console.log(items);

    // Un item es agregado a la lista
    const newItem = { id: 1, text: 'Item A'};
    const added = todoList.addItem(newItem);
    items = todoList.getItems();
    console.log(added, items);

    // El texto de un item es modificado
    const newText = "Item A v2";
    const updated = todoList.updateItemText(1, newText);
    console.log(updated);

}

main();