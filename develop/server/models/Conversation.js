const { Schema, model } = require('mongoose');
const messageSchema = require('./Message');
const userSchema = require('./User');

const ConversationSchema = new Schema({

    friendId: userSchema,
    
    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    
    lastUpdatedAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    messages: [messageSchema],
});

const Conversation = model('Conversation', ConversationSchema);
model.exports = Conversation;