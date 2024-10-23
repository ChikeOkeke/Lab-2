const express = require('express');
const { getAllContacts, createContact, getContactById, updateContact, deleteContact } = require('../controllers/contactController');
const router = express.Router();

// Get all contacts
router.get('/', getAllContacts);

// Create a new contact
router.post('/', createContact);

// Get a contact by ID
router.get('/:id', getContactById);

// Update a contact by ID
router.put('/:id', updateContact);

// Delete a contact by ID
router.delete('/:id', deleteContact);

module.exports = router;
