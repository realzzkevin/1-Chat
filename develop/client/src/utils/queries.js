import { gql } from '@apollo/client';

export const QUERY_ME = gql`
    query me {
        me {
            _id
            username
            email
            friends {
                _id
                username
            }
            conversations {
                _id
                friendId
                updatedAt
                message {
                    _id
                }
            }
        }
    }
`;

export const QUERY_ALLCHATS = gql`
    query allConversations {
        allConversations{
            _id
            username
            email
            friends {
                _id
                username
            }
            conversations {
                _id
                friendId
                updatedAt
                message {
                    _id
                }
            }      
        }
    }
`;

export const QUERY_LOADCHAT = gql`
    query loadConversation($_id: ID!) {
        loadConversation( _id: $_id) {
            _id
            friendId
            updatedAt
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

export const QUERY_FRIENDS = gql`
    query getFriends($username: String!) {
        getFriends(username: $username) {
            _id
            username
            email
        }
    }
`;
