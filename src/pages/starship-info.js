import React from "react";
import Sidenav from "../components/sidenav/sidenav.component";
import StarshipInfoComponent from "../components/starship-info/starship-info.component";
import Topnav from "../components/topnav/topnav.component";

const StarshipInfo = () => {
    return(
        <div className="page">
            <Sidenav />
            <div className="right">
                <Topnav />
                <StarshipInfoComponent />
            </div>
        </div>
    )
}

export default StarshipInfo;