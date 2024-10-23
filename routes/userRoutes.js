const express = require('express');
const { getAllUsers, createUser, getUserById, updateUser, deleteUser } = require('../controllers/userController');
const router = express.Router();

// Get all users
router.get('/', getAllUsers);

// Create a new user
router.post('/', createUser);

// Get a user by ID
router.get('/:id', getUserById);

// Update a user by ID
router.put('/:id', updateUser);

// Delete a user by ID
router.delete('/:id', deleteUser);

module.exports = router;




