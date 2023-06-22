const express = require('express');
const app = express();

const indexRouter = require('./api/indexRouter')
const todosRouter = require('./api/todos/todosRouter')

app.get('/', (req, res, next) => {
    res.send('ToDo List');
})

app.use('/api', indexRouter);
app.use('/api/todos', todosRouter);

app.listen(3000, () => {
    console.log('Express corriendo en 3000');
});

module.exports = app;