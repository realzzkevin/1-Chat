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

    payload: {
        type: String,
        required: 'This message can not be blank',
        minlength: 1,
    }
    //timestamps option enabled
}, {timestamps: true});

const Message = model('Message', messageSchema);

model.export = Message;