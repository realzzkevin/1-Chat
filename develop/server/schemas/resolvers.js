const { User, Conversation, Message } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        me: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id }).populate('friends');
            }
            throw new AuthenticationError('Please login first.')
        },

        allConversations: async (parent, args, context) => {
            if (context.user) {
                return User.findOne({ _id: context.user._id }).populate('Conversations', { sort: { 'lastUpdateAt': -1 } });
            }
            throw new AuthenticationError('Please login first.')
        },
        loadConversation: async (parent, { chatID }, context) => {
            if (context.user) {
                return Conversation.find({ _id: chatID }).populate('messages', { sort: { 'createdAt': -1 } });
            }
        },
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
            const user = await User.findOne({ email });

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
        addFriend: async ( parent, { friendId }, context) => {
            if (context.user) {
                const newFriend = await User.findOne({ _id: friendId });

                const user = await User.findOneAndUpdate(
                    {_id: context.user._id},
                    { $addToSet: {friends: newFriend}}
                );
                return user;
            }
            throw new AuthenticationError("Please login.")
        },

        removeFriend: async ( parent, { friendId }, context ) => {

        },

        newChat


    },
}

module.exports = resolvers;