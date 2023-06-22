const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('ToDo List API');
});

module.exports = router;