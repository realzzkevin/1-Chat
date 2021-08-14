const { Schema, model } = require('mongoose');
//const messageSchema = require('./Message');
//const userSchema = require('./User');

const ConversationSchema = new Schema({

    friendId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
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