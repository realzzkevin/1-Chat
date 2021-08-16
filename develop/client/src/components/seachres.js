import React from "react";


const SearchRes = (props) => {

    return (

        <div>
            <h3>
                <p>
                    {props._id}
                </p>
            </h3>

            <h3>
                <span>{props.name}</span>
            </h3>
        </div>
    )
};

export default SearchRes;