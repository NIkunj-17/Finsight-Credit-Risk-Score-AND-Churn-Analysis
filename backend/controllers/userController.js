// controllers/userController.js
const bcrypt = require('bcrypt');

const User = require('../models/userModel');

// Get all employees (Admin only)
const getAllEmployees = async (req, res) => {
  try {
    const employees = await User.find({ role: 'employee' });
    res.status(200).json(employees);
  } catch (error) {
    console.error("Error fetching employees:", error);
    res.status(500).json({ error: "Failed to fetch employees" });
  }
};

// Add a new employee (Admin only)
const addEmployee = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if the email is already registered
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'Email is already in use' });
    }

    // Hash password before saving
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create and save the new employee
    const newEmployee = new User({ name, email, password: hashedPassword, role: 'employee' });
    await newEmployee.save();

    res.status(201).json({ message: 'Employee added successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error while adding employee' });
  }
};

// Delete an employee (Admin only)
const deleteEmployee = async (req, res) => {
  const { id } = req.params;

  try {
    await User.findByIdAndDelete(id);
    res.status(200).json({ message: "Employee deleted successfully" });
  } catch (error) {
    console.error("Error deleting employee:", error);
    res.status(500).json({ error: "Failed to delete employee" });
  }
};
// Controller to get the logged-in admin details
const getAdminInfo = async (req, res) => {
  console.log('User  from token:', req.user); // Log the user info
  try {
    const admin = await User.findById(req.user.id).select('name email');
    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }
    res.json(admin);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getAllEmployees, addEmployee, deleteEmployee,getAdminInfo };
