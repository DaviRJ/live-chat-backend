const mongoose = require('../../database/index')

const MessageSchema = new mongoose.Schema({
    user_name: {
        type: String,
        required: true,
        maxlength: 15
    },
    message: {
        type: String,
        required: true,
        maxlength: 255
    },
    created_at: {
        type: Date,
        default: Date.now()
    }
});

const Message = mongoose.model('messages', MessageSchema)

module.exports = Message;