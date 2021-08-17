import React, { useState, useEffect, useRef } from 'react';
//import { link } from 'react-router-dom';
import { io } from "socket.io-client";
import Auth from '../utils/auth';
import { useQuery, useMutation, useLazyQuery } from '@apollo/client';
import { QUERY_ME, QUERY_ALLCHATS, QUERY_LOADCHAT, QUERY_FRIENDS } from '../utils/queries';
import { ADD_FRIEND, DELETE_FRIEND, NEW_CHAT, DELETE_CHAT, SEND_MESSAGE, RECEIVE_MESSAGE, DELETED_MESSAGE } from '../utils/mutation';

//import Profile from '../components/userprofile';
import Navbar from '../components/Navbar';
//import Friends from '../components/friends';
import Message from '../components/message';
import FriendCard from '../components/friendCard';
import SearchRes from '../components/seachres';
import './main.css';

const MainPage = () => {
    const { loading, data, refetch } = useQuery(QUERY_ME);

    const userData = data?.me || {};
    const friendList = data?.me.friends || {};

    //const [results, setResults] = useState([]);
    const [searchInput, setSearchInput] = useState('');
    //const [friendList, setFreindList] = useState([]);
    const [currentChat, setCurrentChat] = useState(null);
    const [currentChatId, setCurrentChatId] = useState('');
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [arrivalMessage, setArrivalMessage] = useState(null);
    
    const [submitSearch, { loading: searchLoading, data: searchData }] = useLazyQuery(QUERY_FRIENDS, { variables: { username: searchInput } });
    const results = searchData?.getFriends || [];
    const [fetchMessage, {loading: messageLoading, data: allMessages}] = useLazyQuery(QUERY_LOADCHAT, { variables: { _id :currentChatId }} );
    const messageData = allMessages?.loadConversation.messages || [];

    const [addFriend] = useMutation(ADD_FRIEND);
    const [newChat] = useMutation(NEW_CHAT);
    const [sendMessage] = useMutation(SEND_MESSAGE);
    const [incomingMessage] = useMutation(RECEIVE_MESSAGE);
    
    const socket = useRef();        
    const scrollRef = useRef();

    useEffect(() => {
        socket.current = io("ws://localhost:3000");
        socket.current.on("getMessage", (data) => {
          /*setArrivalMessage({
            sender: data.senderId,
            text: data.text,
            createdAt: Date.now(),
          });*/
          console.log("incomming message");
          console.log(data);
        });
      }, []);

    useEffect(() => {
        socket.current.emit("addUser", userData._id);
        socket.current.on()
    })


    const handleSearchSubmit = async (event) => {
        event.preventDefault();

        /*const token = Auth.loggedIn() ? Auth.getToken() : null;
        if (!token) {
          return false;
        }*/

        if (!searchInput) {
            return false;
        }
        try {
            submitSearch();
            if (!searchLoading) {                
                console.log("search results");
                console.log(searchData);
            }
        } catch (err) {
            console.error(err);
        }

    };

    const handleAddFriend = async (username) => {
        console.log(username);
        if (!username) {
            return false;
        }
        try {
            await addFriend({ variables: { username: username } });

        } catch (err) {
            return false
        }

        setSearchInput("");
        refetch();
    };

    const handleStartChat = async (friendId) => {

        if (!friendId) {
            return false;
        };

        const chatList = userData.conversations;
        chatList.forEach(chat => {
            if (chat.friendId == friendId) {
                //continue chat
                setCurrentChat(chat);
                setCurrentChatId(chat._id);
                return;
            };
        });

        //never chat with this friend before
        try {
            const { data } = await newChat({ variables: { friendId: friendId } });
            setCurrentChat(data.newChat);
            setCurrentChatId(data.newChat._id)

        } catch (err) {
            console.log(err);
            console.log('cannot create new chat');
        }

    };
    
    const handleMessageSubmit = async(event) => {
        event.preventDefault();
        if(!newMessage){
            return false;
        }
        const message = {
            senderId: userData._id,
            receiverId: currentChat.friendId,
            payload: newMessage,           
        };
        console.log(message);
        socket.current.emit('sendMessage', {
            senderId: message.senderId,
            receiverId: message.receiverId,
            payload: message.payload,
        });

        // save send message into database
        try {
            /*
            await sendMessage({
                variables: {
                    chatId : currentChat._id,
                    receiverId: message.receiverId,
                    payload: message.payload,
                }
            })*/

            fetchMessage();
            setNewMessage('');

        } catch (err) {
            console.log(err);
        }
    };

    if (loading) {
        return <h2> LOADING ...</h2>
    } else {
        console.log(userData);
        console.log(friendList);
    };

    return (
        <>
            <Navbar userInfo={userData} />
            <div className="chatUI">
                <div className="friends">
                    <div className="fList">
                        {friendList.map((each) => (
                            <div key={each._id} onClick={() => handleStartChat(each._id)}>                                
                                <FriendCard friendName={each.username} friendId= {each._id}/>
                            </div>
                        ))}

                    </div>
                </div>
                <div className="chatBox">
                    <div className="boxWrapper">
                        {currentChat ? (
                            <>
                                <div className="chatNavbar">
                                    {messages.map((m) => (
                                        <div ref={scrollRef}>
                                            <Message message={m} own={m.sender === userData._id} />
                                        </div>
                                    ))}
                                </div>
                                <div className="chatInput">
                                    <textarea
                                        className="messageInput"
                                        placeholder="write something..."
                                        onChange={(e) => setNewMessage(e.target.value)}
                                        value={newMessage}
                                    ></textarea>
                                    <button className="messageButton" onClick={handleMessageSubmit}>
                                        Send
                                    </button>
                                </div>
                            </>
                        ) : (
                            <span className="noChat">
                                Open a conversation to start a chat.
                            </span>
                        )}
                    </div>
                </div>
                <div className="searchBar">
                    <div className="searchMenu">
                        <form onSubmit={handleSearchSubmit}>
                            <input className="searchInput" name='searchInput' value={searchInput} onChange={(e) => { setSearchInput(e.target.value) }} type='text' placeholder='search fro friends' />
                            <button type='submit'>submit</button>
                        </form> 
                        {results.map((newFriend) => (
                            <div key={newFriend._id} onClick={() => handleAddFriend(newFriend.username)}>
                                <p>{newFriend._id}</p>
                                <SearchRes id={newFriend._id} name={newFriend.username} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );

}

export default MainPage;