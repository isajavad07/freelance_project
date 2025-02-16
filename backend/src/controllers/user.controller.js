const User = require('../models/User.js');
const bcrypt = require('bcryptjs');

const createUser = async (req, res) => {
    try {
        const { email, password, phone, role } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            email,
            password: hashedPassword,
            phone,
            role
        });
        await user.save();
        res.status(201).json(user);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (user && (await bcrypt.compare(password, user.password))) {
            res.status(200).json({ message: 'Login successful' });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await User.findByIdAndDelete(id);
        if (user) {
            res.status(200).json({message: 'User deleted successfully'});
        } else {
            res.status(404).json({message: 'User not found'});
        }
    } catch (error) {
        res.status(500).json({error: error.message});
    }
}


module.exports = {
    createUser,
    loginUser,
    deleteUser,
};