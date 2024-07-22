// server/routes/api.js
const express = require('express');
const router = express.Router();
const { getAllAssignments } = require('../controllers/assignmentController');

// Example: GET all assignments
router.get('/assignments', getAllAssignments);

module.exports = router;
