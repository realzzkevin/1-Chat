import React from "react";


const Message = (props) => {
    
    return (
        <div>
            <h2>{props.username}</h2>
            <p>{props.payload}</p>
        </div>
    )

};

export default Message;