const { Schema, model } = require('mongoose');

const messageSchema = new Schema({
    senderId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    receiverId: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },

    time: {
        type: Date,
        required: true,
        default: Date.now
    },
    payload: {
        type: String,
        required: true,
    }
})

const Message = model('Message', messageSchema);

model.export = Message;