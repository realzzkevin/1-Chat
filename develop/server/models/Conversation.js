const { Schema, model } = require('mongoose');

const ConversationSchema = new Schema({

    friendId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },

    messages: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Message'
        }
    ],

    // enable timestamps option, add createdAt and updatedAt field by mongoose
}, { timestamps: true });

const Conversation = model('Conversation', ConversationSchema);
module.exports = Conversation;