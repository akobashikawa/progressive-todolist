const TodosRepositoryArray = require('./api/todos/todosRepositoryArray');
const todosRepository = new TodosRepositoryArray();

const TodoList = require('./domain/todolist');
const todoList = new TodoList({ todosRepository });

async function main() {

    // La lista es obtenida
    console.log('La lista es obtenida');
    let items = await todoList.getItems();

    // La lista es mostrada
    console.log('La lista es mostrada');
    console.log(items);

    // Un item es agregado a la lista
    console.log('Un item es agregado a la lista');
    let added = await todoList.addItem({ text: 'Item A'});
    items = await todoList.getItems();
    console.log(added, items);
    added = await todoList.addItem({ text: 'Item B'});
    items = await todoList.getItems();
    console.log(added, items);
    
    // Un item es obtenido
    console.log('Un item es obtenido');
    const item = await todoList.getItem(1);

    // Un item es mostrado
    console.log('Un item es mostrado');
    console.log(item);


    // El texto de un item es modificado
    console.log('El texto de un item es modificado');
    const newText = "Item A v2";
    const updated = await todoList.updateItemText(1, newText);
    items = await todoList.getItems();
    console.log(updated, items);

    // Un item es marcado como hecho
    console.log('Un item es marcado como hecho');
    const done = await todoList.updateItemToDone(1);
    items = await todoList.getItems();
    console.log(done, items);

    // Un item es desmarcado como hecho
    console.log('Un item es desmarcado como hecho');
    const undone = await todoList.updateItemToTodo(1);
    items = await todoList.getItems();
    console.log(undone, items);

    // Un item es eliminado
    console.log('Un item es eliminado');
    const result = await todoList.deleteItem(1);
    items = await todoList.getItems();
    console.log(result, items);

}

main();