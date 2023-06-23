const TodosRepositoryArray = require('./todosRepositoryArray');
const todosRepository = new TodosRepositoryArray();

const TodoList = require('../../core/todolist');
const todoList = new TodoList({ todosRepository });

class TodosService {

    constructor() {

    }

    getItem() {
        return todoList.getItem(id);
    }

    getItems() {
        return todoList.getItems();
    }

    addItem(body) {
        return todoList.addItem(body);
    }

    updateItem(id, body) {
        return todoList.updateItem(id, body);
    }

    updateItemToDone(id) {
        return todoList.updateItemToDone(id);
    }

    updateItemToTodo(id) {
        return todoList.updateItemToTodo(id);
    }

    deleteItem(id) {
        return todoList.deleteItem(id);
    }
}

module.exports = TodosService;