import React from "react";
import Sidenav from "../components/sidenav/sidenav.component";
import SpecieInfoComponent from "../components/specie-info/specie-info.component";
import Topnav from "../components/topnav/topnav.component";

const SpecieInfo = () => {
    return(
        <div className="page">
            <Sidenav />
            <div className="right">
                <Topnav />
                <SpecieInfoComponent />
            </div>
        </div>
    )
}

export default SpecieInfo;