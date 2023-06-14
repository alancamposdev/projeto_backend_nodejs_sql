const express = require('express');
const router = express.Router();

const usersController = require('../controllers/UsersControllers');

// Rotas para: usuários

router.post('/',      usersController.createUser);
router.get('/',       usersController.getAllUsers);
router.put('/:id',    usersController.updateUser);
router.delete('/:id', usersController.deleteUser);



module.exports = router;