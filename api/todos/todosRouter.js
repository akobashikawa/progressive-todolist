const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('La lista es obtenida');
});

module.exports = router;