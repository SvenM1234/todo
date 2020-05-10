
const express = require('express');
const router = express.Router();
const ctrlTodo = require('../controllers/ctrlTodo');


// router.get('/todo', ctrlTodo.getAll);
router.get('/todo',()=>console.log('def'));
router.post('/todo/create', ctrlTodo.create);
router.get('/todo/delete/:i', ctrlTodo.delete);

module.exports = router;