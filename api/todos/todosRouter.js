const express = require('express');
const router = express.Router();

const TodoList = require('../../core/todolist');
const todoList = new TodoList();

router.get('/:id', (req, res, next) => {
    const id = req.params.id;
    const found = todoList.getItem(id);
    if (!found) {
        return res.status(404).json({
            id,
            message: 'item no existe'
        });
    }
    res.json(found);
});

router.get('/', (req, res, next) => {
    const items = todoList.getItems();
    res.json(items);
});

router.post('/', (req, res, next) => {
    const body = req.body;
    const added = todoList.addItem(body);
    res.json(added);
});

router.patch('/:id', (req, res, next) => {
    const id = parseInt(req.params.id, 10);
    const body = req.body;
    const updated = todoList.updateItem(id, body);
    if (!updated) {
        return res.status(500).json({
            id,
            message: 'item no actualizado'
        });
    }
    res.json(updated);
});

router.delete('/:id', (req, res, next) => {
    const id = parseInt(req.params.id, 10);
    const result = todoList.deleteItem(id);
    res.json(result);
});

module.exports = router;