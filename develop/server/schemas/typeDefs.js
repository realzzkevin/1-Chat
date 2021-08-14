const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        friends: [ID]
        conversations: [ID]
    }

    type Conversation {
        _id: ID
        friendId: ID!
        updatedAt: Int
        messages: [Message]
    }

    type Message {
        _id: ID
        senderId: ID!
        receiverId: ID!
        createdAt: Int
        payload: String!
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
        allConversations: User
        loadConversation(_id: ID!): Conversation
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
        newChat(friendId: ID!): Conversation
        deleteChat(_id: ID!): Conversation
        sendMessage( _id: ID!, receiverId: ID!, payload: String!): Message
        receiveMessage( _id: ID!, senderId: ID!, payload: String!): Message
        deleteMessage(_id: ID!): Message
    }
`

module.exports = typeDefs;