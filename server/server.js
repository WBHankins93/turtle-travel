const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const postRoutes = require('./routes/posts');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/posts', postRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Something went wrong!' });
});

const port = 5001;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// Add basic error handling for unmatched routes
app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});