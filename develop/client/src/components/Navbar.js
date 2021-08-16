import React, { useState } from "react";
import Auth from "../utils/auth";

const Navbar = (props) => {

    return (
        <nav className="navbar fixed-top navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" >{props.userInfo.username}</a>
            </div>
            <a onClick={()=>Auth.logout()}> logout </a>
        </nav>
    )

};

export default Navbar;