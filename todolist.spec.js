describe('Al inicio, la lista está vacia', () => {
    
    test('La lista es obtenida', () => {
        const result = todolist.getItems();
        expect(result).toBe([]);
    });

});