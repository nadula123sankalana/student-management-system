// server/routes/courseRoutes.js

const express = require('express');
const router = express.Router();
const { addCourse, getAllCourses } = require('../controllers/courseController');
const upload = require('../middleware/uploadMiddleware');

// POST /api/courses
router.post('/', upload.fields([
  { name: 'videoUrl', maxCount: 1 },
  { name: 'thumbnailUrl', maxCount: 1 },
  { name: 'pdfUrl', maxCount: 1 }
]), addCourse);

// GET /api/courses
router.get('/', getAllCourses);

module.exports = router;
