// server/controllers/courseController.js

const Course = require('../models/Course');

// POST /api/courses
const addCourse = async (req, res) => {
  const { courseTitle, courseDescription } = req.body;
  const { videoUrl, thumbnailUrl, pdfUrl } = req.files;

  try {
    const newCourse = new Course({
      courseTitle,
      courseDescription,
      videoUrl: videoUrl[0].path,
      thumbnailUrl: thumbnailUrl[0].path,
      pdfUrl: pdfUrl[0].path
    });

    await newCourse.save();
    res.status(201).json(newCourse);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

// GET /api/courses
const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = {
  addCourse,
  getAllCourses
};
