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
    mutation addFriend( $username: String!) {
        addFriend( username: $username) {
            _id
            username
            email
        }
    }
`;

export const DELETE_FRIEND = gql`
    mutation removeFriend( $username: String!) {
        removeFriend( username: $username) {
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
    mutation newChat($friendId: String!){
        newChat(friendId: $friendId) {
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
    mutation deleteChat( $_id: String!) {
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
    mutation sendMessage($_id: String!, $receiverId: String!, $payload: String!) {
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
    mutation receiveMessage($_id: String!, $senderId: String!, $payload: String!) {
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
    mutation deleteMessage($_id: String!) {
        deleteMessage( _id: $_id ) {
            _id
            senderId
            receiverId
            createdAt
            payload
        }
    }
`;