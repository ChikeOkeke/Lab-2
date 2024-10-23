const Contact = require('../models/contact');

// Get all contacts
exports.getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.json(contacts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new contact
exports.createContact = async (req, res) => {
    const contact = new Contact({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email
    });

    try {
        const newContact = await contact.save();
        res.status(201).json(newContact);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get a contact by ID
exports.getContactById = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if (contact == null) {
            return res.status(404).json({ message: 'Contact not found' });
        }
        res.json(contact);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update a contact by ID
exports.updateContact = async (req, res) => {
    try {
        const contact = await Contact.findById(req.params.id);
        if (contact == null) {
            return res.status(404).json({ message: 'Contact not found' });
        }

        if (req.body.firstname != null) {
            contact.firstname = req.body.firstname;
        }
        if (req.body.lastname != null) {
            contact.lastname = req.body.lastname;
        }
        if (req.body.email != null) {
            contact.email = req.body.email;
        }

        const updatedContact = await contact.save();
        res.json(updatedContact);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a contact by ID
exports.deleteContact = async (req, res) => {
    try {
        const contact = await Contact.findByIdAndDelete(req.params.id);
        if (contact == null) {
            return res.status(404).json({ message: 'Contact not found' });
        }

        res.json({ message: 'Contact deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
