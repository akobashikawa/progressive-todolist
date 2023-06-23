const express = require('express');
const router = express.Router();



const TodosController = require('./todosController');
const todosController = new TodosController();

router.get('/:id', todosController.getItem);

router.get('/', todosController.getItems);

router.post('/', todosController.addItem);

router.patch('/:id', todosController.updateItem);

router.patch('/:id/done', todosController.doneItem);

router.patch('/:id/todo', todosController.todoItem);

router.delete('/:id', todosController.deleteItem);

module.exports = router;