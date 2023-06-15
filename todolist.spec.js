const { getItems } = require('./todolist');

describe('Al inicio, la lista está vacia', () => {

    test('La lista es obtenida', () => {
        const result = getItems();
        expect(result).toEqual([]);
    });

});