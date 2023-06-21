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
    let added = todoList.addItem({ text: 'Item A'});
    items = todoList.getItems();
    console.log(added, items);
    added = todoList.addItem({ text: 'Item B'});
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
    items = todoList.getItems();
    console.log(updated, items);

    // Un item es marcado como hecho
    console.log('Un item es marcado como hecho');
    const done = todoList.updateItemToDone(1);
    items = todoList.getItems();
    console.log(done, items);

    // Un item es desmarcado como hecho
    console.log('Un item es desmarcado como hecho');
    const undone = todoList.updateItemToTodo(1);
    items = todoList.getItems();
    console.log(undone, items);

}

main();