const express = require('express');
const router = express.Router({ mergeParams: true });
const Todo = require('../models/todo.model');


router.get('/', function(req, res, next) {
    console.log(req.params);



    res.status(200).send('todos');
});

module.exports = router;
