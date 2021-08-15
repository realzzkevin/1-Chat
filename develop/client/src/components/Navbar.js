import React, { useState } from "react";

const Navbar = (props) => {

    return (
        <nav className="navbar fixed-top navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" >{props.userInfo.username}</a>
            </div>
        </nav>
    )

};

export default Navbar;