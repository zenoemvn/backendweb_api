require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const eventRoutes = require('./routes/eventRoutes');

const app = express();
app.use(bodyParser.json());

// Routes
app.use('/api/users', userRoutes);
app.use('/api/events', eventRoutes);

// Root Endpoint
app.get('/', (req, res) => {
    res.send(`
        <h1>Track & Field API</h1>
        <p>Available Endpoints:</p>
        <ul>
            <li>GET /api/users</li>
            <li>POST /api/users</li>
            <li>GET /api/events</li>
            <li>POST /api/events</li>
        </ul>
    `);
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/endpoints.html');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
