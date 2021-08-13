import { gql } from '@apollo/client';

export const SIGN_UP = gql`
    mutation signUp( $username: String!, $email: String!, $password: String!) {
        signUp( username: $username, email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const LOGIN_USER = gql`
    mutation login( $email: String!, $password: String!) {
        login( email: $email, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_FRIEND = gql`
    mutation addFriend( $_id: ID!) {
        addFriend( _id: $_id) {
            _id
            username
            email
            friends {
                _id
                username
            }
            conversation {
                _id
                friendId
                updatedAt
                message {
                    _id
                    updateAt
                }
            }
        }
    }
`;

export const DELETE_FRIEND = gql`
    mutation removeFriend( $_id: ID!) {
        removeFriend( _id: $_id) {
            _id
            username
            email
            friends {
                _id
                username
            }
            conversation {
                _id
                friendId
            }
        }
    }
`;

export const NEW_CHAT = gql`
    mutation newChat($friendId: ID!){
        newChat(friendId: friendId) {
            _id
            friendId
            updateAt
            messages {
                _id
                senderId
                receiverId
                createdAt
                payload
            }
        }
    }
`;

export const DELETE_CHAT = gql`
    mutation deleteChat( $_id: ID!) {
        deleteChat( _id: $_id) {
            _id
            friendId
            updatedAt
            message {
                _id
                senderId
                receiverId
                createdAt
                payload           
            }
        }
    }
`;

export const SEND_MESSAGE = gql`
    mutation sendMessage($_id: ID!, $receiverId:ID!, $payload: String!) {
        sendMessage( _id: $_id, receiverId: $receiverId, payload: $payload) {
            _id
            senderId
            receiverId
            createdAt
            payload
        }
    }
`;

export const RECEIVE_MESSAGE = gql`
    mutation receiveMessage($_id: ID!, $senderId:ID!, $payload: String!) {
        receiveMessage( _id: $_id, senderId: $senderId, payload: $payload) {
            _id
            senderId
            receiverId
            createdAt
            payload
        }
    }
`;

export const DELETED_MESSAGE = gql`
    mutation deleteMessage($_id: ID!) {
        deleteMessage( _id: $_id ) {
            _id
            senderId
            receiverId
            createdAt
            payload
        }
    }
`;