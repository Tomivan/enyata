import React from "react";
import Notification from "../../assets/images/notification.svg";
import User from "../../assets/images/account.svg";
import Dots from "../../assets/images/dots.svg";
import "./topnav.css";

const Topnav = () => {
    return(
        <div className="topnav">
            <div className="nav-info">
                <img src={Notification} alt="a bell" />
                <hr />
                <div className="user">
                    <img src={User} alt="a profile avatar" className="avatar"/>
                    <p>John Doe</p>
                </div>
                <img src={Dots} alt="three dots" />
            </div>
            <hr />
        </div>
    )
}

export default Topnav;