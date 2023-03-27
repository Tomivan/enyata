import React from "react";
import PeopleInfoComponent from "../components/people-info/people-info.component";
import Sidenav from "../components/sidenav/sidenav.component";
import Topnav from "../components/topnav/topnav.component";

const PeopleInfo = () => {
    return(
        <div className="page">
            <Sidenav />
            <div className="right">
                <Topnav />
                <PeopleInfoComponent />
            </div>
        </div>
    )
}

export default PeopleInfo;