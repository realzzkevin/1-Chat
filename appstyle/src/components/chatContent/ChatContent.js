import React, {Component} from 'react'
// import "./nav.css"

export default class ChatContent extends Component {
    render() {
        return (
            <div className="main_chatcontent">
            <div className="content_header">
                <div className="blocks">
                    <div className="current-chatting-user">
                        {/* <Avatar 
                        isOnline="active" /> */}
                        <p>Sandy</p>
                    </div>
                </div>

                <div className="blocks">
                    <div className="settings">
                        <button className="btn-nobg">
                            <i className= "fa fa-cog"></i>
                        </button>
                </div>
                </div>
            </div>
            <div className="content_body">
            <div className="content_footer">
                </div>
                </div>
            </div>
           
        );
    }
}