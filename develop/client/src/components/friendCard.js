import React from "react";


const FriendCard = (props) => {

    return (

        <div>
            <h3>
                <p>
                    {props.friendId}
                </p>
            </h3>

            <h2>
                <span>{props.friendName}</span>
            </h2>
        </div>
    )
};

export default FriendCard;