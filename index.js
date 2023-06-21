const TodoList = require('./todolist');

function main() {
    const todoList = new TodoList();

    // La lista es obtenida
    console.log('La lista es obtenida');
    let items = todoList.getItems();

    // La lista es mostrada
    console.log('La lista es mostrada');
    console.log(items);

    // Un item es agregado a la lista
    console.log('Un item es agregado a la lista');
    const newItem = { id: 1, text: 'Item A'};
    const added = todoList.addItem(newItem);
    items = todoList.getItems();
    console.log(added, items);
    
    // Un item es obtenido
    console.log('Un item es obtenido');
    const item = todoList.getItem(1);

    // Un item es mostrado
    console.log('Un item es mostrado');
    console.log(item);


    // El texto de un item es modificado
    console.log('El texto de un item es modificado');
    const newText = "Item A v2";
    const updated = todoList.updateItemText(1, newText);
    console.log(updated);

    // Un item es marcado como hecho
    console.log('Un item es marcado como hecho');
    const done = todoList.updateItemToDone(1);
    console.log(done);

}

main();