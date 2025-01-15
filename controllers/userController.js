const pool = require('../db/connection');

// Get User Details by ID
exports.getUserById = async (req, res) => {
    const { id } = req.params;

    try {
        const [user] = await pool.query('SELECT * FROM users WHERE id = ?', [id]);

        if (user.length === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.json(user[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

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

    // Validation checks
    if (!name || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    // Name should not contain numbers
    if (/\d/.test(name)) {
        return res.status(400).json({ message: 'Name cannot contain numbers' });
    }

    try {
        await pool.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, password]);
        res.status(201).json({ message: 'User created successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update an Existing User
exports.updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email, password } = req.body;

    // Validation checks
    if (!name || !email || !password) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    // Name should not contain numbers
    if (/\d/.test(name)) {
        return res.status(400).json({ message: 'Name cannot contain numbers' });
    }

    try {
        await pool.query(
            'UPDATE users SET name = ?, email = ?, password = ? WHERE id = ?',
            [name, email, password, id]
        );
        res.json({ message: 'User updated successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


// Delete an Existing User
exports.deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        await pool.query('DELETE FROM users WHERE id = ?', [id]);
        res.json({ message: 'User deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
