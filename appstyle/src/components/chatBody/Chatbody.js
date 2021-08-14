import React, {Component} from 'react'
import "./chatBody.css"
import ChatList from "../chatList/ChatList"
import ChatContent from "../chatContent/ChatContent"
import UserProfile from "../userProfile/UserProfile"
import NavTabs from "../NavTabs"

export default class ChatBody extends Component {
    render() {
        return (
            <div className="main_chatbody">
                <NavTabs/>
                <ChatList/>
                <ChatContent/>
                <UserProfile/>

              </div>
        );
    }
}