const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    phone: {
        type: String,
        require: true
    },
    role: {
        type: String,
        enum: ['client', 'freelancer'],
        require: true,
        default: 'client'
    },
});

module.exports = mongoose.model('User', UserSchema);