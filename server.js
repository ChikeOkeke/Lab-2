const express = require('express');
const mongoose = require('mongoose');
const contactRoutes = require('./routes/contactRoutes'); // Contacts route
const userRoutes = require('./routes/userRoutes');       // Users route
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/Skeleton', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Could not connect to MongoDB...', err));

// Route for contacts
app.use('/api/contacts', contactRoutes);

// Route for users
app.use('/api/users', userRoutes);

// Default route for testing
app.get('/', (req, res) => {
    res.send('Node.js Express server is running...');
});

// Catch-all route for undefined routes (404 handler)
app.use((req, res, next) => {
    res.status(404).json({ message: 'Route not found' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
