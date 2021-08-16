const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String!
        password: String
        friends: [User]
        conversations: [Conversation]
    }

    type Conversation {
        _id: ID
        friendId: String!
        updatedAt: Int
        messages: [Message]
    }

    type Message {
        _id: ID
        senderId: String!
        receiverId: String!
        createdAt: Int
        payload: String!
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User!
        allConversations: User!
        loadConversation(_id: String!): Conversation
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

        addFriend(username: String!): User
        removeFriend(username: String!): User
        newChat(friendId: String!): Conversation
        deleteChat(_id: String!): Conversation
        sendMessage( _id: String!, receiverId: String!, payload: String!): Message
        receiveMessage( _id: String!, senderId: String!, payload: String!): Message
        deleteMessage(_id: String!): Message
    }
`

module.exports = typeDefs;