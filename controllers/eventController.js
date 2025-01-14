const pool = require('../db/connection');

// Get All Events
exports.getEvents = async (req, res) => {
    const search = req.query.search || '';

    try {
        const [events] = await pool.query('SELECT * FROM track_and_field_events');
        res.json(events);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Create a New Event
exports.createEvent = async (req, res) => {
    const { event_name } = req.body;
    try {
        await pool.query('INSERT INTO track_and_field_events (event_name) VALUES (?)', [event_name]);
        res.status(201).json({ message: 'Event created successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
