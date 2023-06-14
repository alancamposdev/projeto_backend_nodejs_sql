const express = require('express');
const router = express.Router();

const coursesController = require('../controllers/CoursesControllers');


// Rotas para: cursos

router.get('/',       coursesController.getAllCourses);
router.post('/',      coursesController.createCourse);
router.put('/:id',    coursesController.updateCourse);
router.delete('/:id', coursesController.deleteCourse);



module.exports = router;