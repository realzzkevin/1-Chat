const { Schema, model } = require('mongoose');
const messageSchema = require('./Message');
const userSchema = require('./User');

const ConversationSchema = new Schema({

    friendId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    
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
    messages: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Message'
        }
    ],
});

const Conversation = model('Conversation', ConversationSchema);
model.exports = Conversation;