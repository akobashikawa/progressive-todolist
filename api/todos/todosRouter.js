const express = require('express');
const router = express.Router();


const TodosRepositoryArray = require('./todosRepositoryArray');
const todosRepository = new TodosRepositoryArray();

const TodoList = require('../../domain/todolist');
const todosEntity = new TodoList({ todosRepository });

const TodosService = require('./todosService');
const todosService = new TodosService({ todosEntity });

const TodosController = require('./todosController');
const todosController = new TodosController({ todosService });


router.get('/:id', todosController.getItem);

router.get('/', todosController.getItems);

router.post('/', todosController.addItem);

router.patch('/:id', todosController.updateItem);

router.patch('/:id/done', todosController.doneItem);

router.patch('/:id/todo', todosController.todoItem);

router.delete('/:id', todosController.deleteItem);

module.exports = router;