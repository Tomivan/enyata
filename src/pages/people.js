import React from "react";
import Sidenav from "../components/sidenav/sidenav.component";
import Topnav from "../components/topnav/topnav.component";

const People = () => {
    return(
        <div className="page">
            <Sidenav />
            <div className="right">
                <Topnav />
            </div>
        </div>
    )
}

export default People;