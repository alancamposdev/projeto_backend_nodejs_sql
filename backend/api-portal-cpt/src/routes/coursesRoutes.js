const express = require('express');
const router = express.Router();

const coursesController = require('../controllers/CursosController');


// GET all cursos
router.get('/', coursesController.getAllCourses);



module.exports = router;