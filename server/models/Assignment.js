// server/models/Assignment.js
const mongoose = require('mongoose');

const assignmentSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String },
  deadline: { type: Date, required: true },
  courseId: { type: mongoose.Schema.Types.ObjectId, ref: 'Course' },
  // Add more fields as needed
});

module.exports = mongoose.model('Assignment', assignmentSchema);
