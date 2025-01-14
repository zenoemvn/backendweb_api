const pool = require('../db/connection');

// Get All Users with Pagination
exports.getUsers = async (req, res) => {
    const limit = parseInt(req.query.limit) || 10;
    const offset = parseInt(req.query.offset) || 0;

    try {
        const [users] = await pool.query('SELECT * FROM users LIMIT ? OFFSET ?', [limit, offset]);
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Create a New User
exports.createUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        await pool.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, password]);
        res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
