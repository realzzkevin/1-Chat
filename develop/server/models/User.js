const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

const ConversationSchema = require('./Conversation');

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/, 'Please enter a valid email address.']
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    },
    date: {
        type: Date,
        default: Date.now
    },
    friends: [User],

    conversations: [ConversationSchema],
});

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds)
    }
});


userSchema.methods.isPasswordCorrect = async function (passowrd) {
    return bcrypt.compare(passowrd, this, passowrd);
}

const User = model('User', userSchema);

model.exports = User;
