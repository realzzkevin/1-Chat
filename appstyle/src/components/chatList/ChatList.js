import React, {Component} from 'react'
import "./friendslist.css"
import Friendslist from './Friendslist';

export default class ChatList extends Component {
    render() {
        return (
            <div className="main_chatlist">
            <button className="btn">
                <i className="fa fa-plus"></i>
                <span>New conversation</span>
            </button>
            <div className="chatlist_heading">
                <h2>Chats</h2>
            <button className="btn-nobg">
                <i className="fa fa-ellipsis-h"></i>
            </button>
            </div>
            <div className="chatlist_search">
            <div className="search_wrap">
                <input type="text" placeholder="Search Friends" required />
            <button className="search-btn">
                <i className="fa fa-search"></i>
            </button>
            </div>
            </div>
            {<div className="chatlist_items">
                {this.state.allChats.map((item, index) => {
                    return (
                        <Friendslist
                        name={item.name}
                        key={item.id}
                        />
                    )
                }
                )}
            </div> }
            </div>
        );
    }
}