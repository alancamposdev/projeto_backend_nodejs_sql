const express = require('express');
const router = express.Router();

const rolesController = require('../controllers/RolesControllers');

// Rotas para: funcoes do usuário

router.post('/',      rolesController.createRole);
router.get('/',       rolesController.getAllRoles);
router.put('/:id',    rolesController.updateRole);
router.delete('/:id', rolesController.deleteRole);

module.exports = router;