// server/models/Course.js

const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  courseTitle: { type: String, required: true },
  courseDescription: { type: String, required: true },
  videoUrl: { type: String },
  thumbnailUrl: { type: String },
  pdfUrl: { type: String }
});

module.exports = mongoose.model('Course', courseSchema);
