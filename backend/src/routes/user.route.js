const express = require('express');
const router = express.Router();
const { createUser, loginUser, deleteUser } = require('../controllers/user.controller');

router.post('/create', createUser);
router.post('/login', loginUser);
router.delete('/:id', deleteUser);

module.exports = router;