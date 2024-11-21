const express = require('express');
const { verifyToken } = require('../middlewares/authMiddleware');
const authorizeRoles = require('../middlewares/roleMiddleware');
const User = require('../models/userModel');
const { getAllEmployees, addEmployee, deleteEmployee, getAdminInfo} = require('../controllers/userController');

const router = express.Router();

// Admin access routes
router.get("/admin", verifyToken, authorizeRoles("admin"), (req, res) => {
    res.json({ message: "Welcome Admin" });
});

// Employee access route
router.get("/employee", verifyToken, authorizeRoles("employee"), (req, res) => {
    res.json({ message: "Welcome Employee" });
});
router.get('/employees', verifyToken, authorizeRoles('admin'), getAllEmployees);
// Route to add a new employee
router.post('/add', verifyToken, authorizeRoles('admin'), addEmployee);

// Route to remove an employee
router.delete('/remove/:id', verifyToken, authorizeRoles('admin'), deleteEmployee);
router.get('/admin-info', verifyToken, authorizeRoles('admin'), getAdminInfo);

module.exports = router;
