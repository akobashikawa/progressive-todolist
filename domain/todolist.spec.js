const TodosRepositoryArray = require('../api/todos/todosRepositoryArray');
const todosRepository = new TodosRepositoryArray();

const TodoList = require('./todolist');
const todoList = new TodoList({ todosRepository });

describe('Al inicio, la lista está vacia', () => {

    test('La lista es obtenida', () => {
        const result = todoList.getItems();
        expect(result).toEqual([]);
    });

});

describe('Un item es agregado a la lista vacia', () => {

    test('La lista es obtenida', () => {
        const result = todoList.getItems();
        expect(result).toEqual([]);
    });

    test('Un item es agregado a la lista', () => {
        const body = {
            text: 'Item A'
        };
        const added = todoList.addItem(body);
        console.log(added);
        const items = todoList.getItems();
        const result = added.id 
            && (added.text == items[0].text) 
            && (added.status == 'todo');
        expect(result).toEqual(true);
    });

    test('La lista es obtenida', () => {
        const result = todoList.getItems().length;
        expect(result).toBe(1);
    });

});

describe('Un item es obtenido', () => {

    test('Un item es obtenido', () => {
        const id = 1;
        const result = todoList.getItem(id).id;
        expect(result).toEqual(id);
    });

});

describe('El texto de un item es modificado', () => {

    test('El texto de un item es modificado', () => {
        const id = 1;
        const text = "Item A v2";
        const updated = todoList.updateItemText(id, text);
        console.log(updated);
        const getted = todoList.getItem(id);
        console.log(getted);
        const result = (updated.text == getted.text);
        expect(result).toEqual(true);
    });

});

describe('Un item es marcado como hecho', () => {

    test('Un item es marcado como hecho', () => {
        const id = 1;
        const result = todoList.updateItemToDone(id).status;
        expect(result).toEqual('done');
    });

});

describe('Un item es desmarcado como hecho', () => {

    test('Un item es desmarcado como hecho', () => {
        const id = 1;
        const result = todoList.updateItemToTodo(id).status;
        expect(result).toEqual('todo');
    });

});

describe('Un item es eliminado', () => {

    test('Un item es eliminado', () => {
        const id = 1;
        const result = todoList.deleteItem(id).deleted == 1;
        expect(result).toEqual(true);
    });

    test('Un item eliminado no es eliminado', () => {
        const id = 1;
        const result = todoList.deleteItem(id).deleted == 0;
        expect(result).toEqual(true);
    });

});