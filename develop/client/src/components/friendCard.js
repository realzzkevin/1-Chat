import React from "react";


const FriendCard = (props) => {

    return (

        <div>
            <h3>
                <p>
                    {props._id}
                </p>
            </h3>

            <h3>
                <span>{props.username}</span>
            </h3>
        </div>
    )
};

export default FriendCard;