import React from "react";
import PeopleList from "../components/people-list/people-list.component";
import Sidenav from "../components/sidenav/sidenav.component";
import Topnav from "../components/topnav/topnav.component";

const People = () => {
    return(
        <div className="page">
            <Sidenav />
            <div className="right">
                <Topnav />
                <PeopleList />
            </div>
        </div>
    )
}

export default People;