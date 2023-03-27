import React from "react";
import Sidenav from "../components/sidenav/sidenav.component";
import StarshipList from "../components/starship-list/starship-list.component";
import Topnav from "../components/topnav/topnav.component";

const Starships = () => {
    return(
        <div className="page">
            <Sidenav />
            <div className="right">
                <Topnav />
                <StarshipList />
            </div>
        </div>
    )
}

export default Starships;