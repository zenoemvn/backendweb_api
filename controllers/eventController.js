const pool = require('../db/connection');

// Get Event Details by ID
exports.getEventById = async (req, res) => {
    const { id } = req.params;

    try {
        const [event] = await pool.query('SELECT * FROM track_events WHERE id = ?', [id]);

        if (event.length === 0) {
            return res.status(404).json({ message: 'Event not found' });
        }

        res.json(event[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get All Events
exports.getEvents = async (req, res) => {
    const search = req.query.search || '';

    try {
        const [events] = await pool.query('SELECT * FROM track_events');
        res.json(events);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Create a New Event
exports.createEvent = async (req, res) => {
    const { event_name } = req.body;

    // Validation checks
    if (!event_name) {
        return res.status(400).json({ message: 'Event name is required' });
    }

    try {
        await pool.query('INSERT INTO track_events (event_name) VALUES (?)', [event_name]);
        res.status(201).json({ message: 'Event created successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update an Existing Event
exports.updateEvent = async (req, res) => {
    const { id } = req.params;
    const { event_name } = req.body;

    try {
        await pool.query('UPDATE track_events SET event_name = ? WHERE id = ?', [event_name, id]);
        res.json({ message: 'Event updated successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete an Existing Event
exports.deleteEvent = async (req, res) => {
    const { id } = req.params;

    try {
        await pool.query('DELETE FROM track_events WHERE id = ?', [id]);
        res.json({ message: 'Event deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
