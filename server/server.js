const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const postRoutes = require('./routes/posts');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('api/posts', postRoutes);

const port = 5001;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})