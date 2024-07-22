// server/controllers/assignmentController.js
const Assignment = require('../models/Assignment');

// Example: Get all assignments
const getAllAssignments = async (req, res) => {
  try {
    const assignments = await Assignment.find();
    res.json(assignments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllAssignments,
  // Add other CRUD operations as needed
};
