const TodoList = require('./todolist');

const todoList = new TodoList();

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
        const newItem = {
            id: 1,
            text: 'Item A'
        };
        const added = todoList.addItem(newItem);
        const items = todoList.getItems();
        const result = (added.text == items[0].text);
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