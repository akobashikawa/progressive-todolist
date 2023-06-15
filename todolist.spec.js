const { getItems, addItem } = require('./todolist');

describe('Al inicio, la lista está vacia', () => {

    test('La lista es obtenida', () => {
        const result = getItems();
        expect(result).toEqual([]);
    });

});

describe('Un item es agregado a la lista vacia', () => {

    test('La lista es obtenida', () => {
        const result = getItems();
        expect(result).toEqual([]);
    });

    test('Un item es agregado a la lista', () => {
        const newItem = {
            text: 'Item A'
        };
        const added = addItem(newItem);
        const items = getItems();
        const result = (added.text == items[0].text);
        expect(result).toEqual(true);
    });

    test('La lista es obtenida', () => {
        const result = getItems().length;
        expect(result).toBe(1);
    });

});