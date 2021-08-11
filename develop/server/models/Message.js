const { Schema, model } = require('mongoose');

const messageSchema = new Schema({
    senderId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    receiverId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },

    createdAt: {
        type: Date,
        required: true,
        default: Date.now
    },
    
    payload: {
        type: String,
        required: 'This message can not be blank',
        minlength: 1,
    }
})

const Message = model('Message', messageSchema);

model.export = Message;