const { beforeEach } = require('node:test');
const TodosRepositoryArray = require('../api/todos/todosRepositoryArray');
const todosRepository = new TodosRepositoryArray();

const TodoList = require('./todolist');
const todoList = new TodoList({ todosRepository });

// describe('Al inicio, la lista está vacia', () => {

//     test('La lista es obtenida', async () => {
//         const result = await todoList.getItems();
//         expect(result).toEqual([]);
//     });

// });

// beforeEach(() => {
   
// });

describe('Un item es agregado a la lista', () => {

    test('Un item es agregado a la lista', async () => {
        const itemsPre = await todoList.getItems();

        const body = {
            text: 'Item A'
        };
        const added = await todoList.addItem(body);
        console.log(added);
        const items = await todoList.getItems();
        console.log(itemsPre, items);
        const result = added.id 
            && (items.length == itemsPre.length + 1)
            && (added.text == items[0].text) 
            && (added.status == 'todo');
        expect(result).toEqual(true);

    });

});

describe('Un item es obtenido', () => {

    test('Un item es obtenido', async () => {
        const id = 1;
        const item = await todoList.getItem(id);
        const result = item.id;
        expect(result).toEqual(id);
    });

});

describe('El texto de un item es modificado', () => {

    test('El texto de un item es modificado', async () => {
        const id = 1;
        const text = "Item A v2";
        const updated = await todoList.updateItemText(id, text);
        console.log(updated);
        const getted = await todoList.getItem(id);
        console.log(getted);
        const result = (updated.text == getted.text);
        expect(result).toEqual(true);
    });

});

describe('Un item es marcado como hecho', () => {

    test('Un item es marcado como hecho', async () => {
        const id = 1;
        const item = await todoList.updateItemToDone(id);
        const result = item.status;
        expect(result).toEqual('done');
    });

});

describe('Un item es desmarcado como hecho', () => {

    test('Un item es desmarcado como hecho', async () => {
        const id = 1;
        const item = await todoList.updateItemToTodo(id);
        const result = item.status;
        expect(result).toEqual('todo');
    });

});

describe('Un item es eliminado', () => {

    test('Un item es eliminado', async () => {
        const id = 1;
        const item = await todoList.deleteItem(id);
        const result = item.deleted == 1;
        expect(result).toEqual(true);
    });

    test('Un item no existente no es eliminado', async () => {
        const id = -1;
        const item = await todoList.deleteItem(id);
        const result = item.deleted == 0;
        expect(result).toEqual(true);
    });

});