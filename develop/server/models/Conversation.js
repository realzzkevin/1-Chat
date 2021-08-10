const { Schema, model } = require('mongoose');

const ConversationSchema = new Schema({

    friendId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    startTime: {
        type: Date,
        required: true,
        default: Date.now
    },
    lastUpdatedTime: {
        type: Date,
        required: true,
    },
    messages: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Message'
        }
    ]
});

const User = model('Conversation', ConversationSchema);
model.exports = Conversation;;