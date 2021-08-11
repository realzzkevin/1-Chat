const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        eamil: String!
        password: String!
        friends: [User]
        Conversations: [Conversation]
    }

    type Conversation {
        _id: ID
        friendId: User!
        lastUpdatedTime: Date!
        messages: [Message]
    }

    type Message {
        _id: ID
        senderId: User!
        receiverId: User!
        time: Date!
        payload: String!
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: [User]
        allConversations: [conversations]
        loadConversation(id: ID!): [message]
        getFriends(username: String1): [user]
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