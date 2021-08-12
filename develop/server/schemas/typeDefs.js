const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        eamil: String!
        password: String!
        friends: [User]
        conversations: [Conversation]
    }

    type Conversation {
        _id: ID
        friendId: User!
        lastUpdatedAt: Date!
        messages: [Message]
    }

    type Message {
        _id: ID
        senderId: User!
        receiverId: User!
        createdAt: Date!
        payload: String!
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
        allConversations: User
        loadConversation(chatID: ID!): Conversation
        getFriends(username: String!): [User]
    }

    type Mutation {
        signUp(
            username: String!
            email: String!
            password: String!
        ): Auth

        login(
            email: String!
            password: String!
        ): Auth

        addFriend(_id: ID!): User
        removeFriend(_id: ID!): User
        newChat(_id: ID!): Conversation
        deleteChat(_id: ID!): Conversation
        addMessage(senderId: ID!, receiverId: ID!, payload: String): Conversation
        deleteMessage(_id: ID!): Conversation
    }
`

module.exports = typeDefs;