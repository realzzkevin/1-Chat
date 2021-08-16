
const { User, Conversation, Message } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');
const mongoose = require('mongoose');

const resolvers = {
    Query: {
        // load user information and populate a friend list
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id }).populate('friends');
            }
            throw new AuthenticationError('Please login first.')
        },
        // populate conversations under one user
        allConversations: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id }).populate('conversations', { sort: { 'updateAt': -1 } });
            }
            throw new AuthenticationError('Please login first.')
        },
        // take a conversation ID (chatID), return a conversation with all messages.
        loadConversation: async (parent, { chatID }, context) => {
            if (context.user) {
                return Conversation.find({ _id: chatID }).populate('messages', { sort: { 'createdAt': -1 } });
            }
        },
        // find users by their username.
        getFriends: async (parent, { username }) => {
            const params = username ? { username } : {};
            return User.find(params).sort({ username: -1 });
        }
    },

    Mutation: {
        signUp: async (parent, { username, email, password }) => {
            const user = await User.create({ username, email, password });
            const token = signToken(user);
            return { token, user };
        },
        login: async (parent, { email, password }) => {

            const user = await User.findOne({ email: email });

            if (!user) {
                throw new AuthenticationError('No user found with this email address');
            }

            const verifyPw = await user.isPasswordCorrect(password);

            if (!verifyPw) {
                throw new AuthenticationError(' Incorrect password');
            }

            const token = signToken(user);

            return { token, user };
        },
        
        addFriend: async (parent, { username }, context) => {            

            if (context.user) {
                //const newFriend = await User.findOne({ _id: String(friendId) });
                const friend = await User.findOne({username: username})
                const user = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { friends: friend._id } },
                    { new: true }
                );
            
                return user;
            }
            throw new AuthenticationError("Please login.")
        },

        removeFriend: async (parent, { username }, context) => {
            if (context.user) {
                const friend = await User.findOne({username: username});
                const updatedUser = await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { friends: friend._id } },
                    { $pull: { conversations: friend._Id } },
                    { new: true },
                );
                return updatedUser;
            }
            throw new AuthenticationError('please login to delete friend')
        },

        newChat: async (parent, { friendId }, context) => {
console.log("hello")
console.log(friendId)
            if (context.user) {
                const id = mongoose.Types.ObjectId(friendId);
                console.log(id)
                const chat = await Conversation.create({ friendId: id });
                /*await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $addToSet: { conversations: chat._id } },
                    //{ new: true },
                )*/
                console.log(chat)
                return chat;
            }
            throw new AuthenticationError('Please log in to start chat.')
        },

        deleteChat: async (parent, { chatId }, context) => {
            if (context.user) {
                const chat = await Conversation.findOneAndDelete({
                    _id: chatId
                });

                await User.findOneAndUpdate(
                    { _id: context.user._id },
                    { $pull: { conversations: chatId } },
                    { new: true },
                )
                return updatedUser;

            }
            throw new AuthenticationError('Please log in to start chat.')
        },

        sendMessage: async (parent, { chatId, receiverId, payload }, context) => {
            if (context.user) {
                const newMessage = await Message.create({
                    senderId: context.user._id,
                    receiverId: receiverId,
                    payload: payload,
                });

                await Conversation.findOneAndUpdate(
                    { _id: chatId },
                    { $addToSet: { messages: newMessage._id } }
                );
                return newMessage
            }
            throw new AuthenticationError('Please log in.')
        },

        receiveMessage: async (parent, { chatId, senderId, payload }, context) => {
            if (context.user) {
                const newMessage = await Message.create({
                    senderId: senderId,
                    receiverId: context.user._id,
                    payload: payload,
                });

                await Conversation.findOneAndUpdate(
                    { _id: chatId },
                    { $addToSet: { messages: newMessage._id } }
                );
                return newMessage
            }
            throw new AuthenticationError('Please log in.')
        },

        deleteMessage: async (parent, { messageId }, context) => {
            if (context.user) {
                const message = await Message.findOneAndDelete({
                    _id: messageId,
                    senderId: context.user._id,
                });
                return message;
            }
            throw new AuthenticationError('Please log in first.')
        }
    },
}

module.exports = resolvers;