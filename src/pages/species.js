import React from "react";
import Sidenav from "../components/sidenav/sidenav.component";
import SpecieList from "../components/specie-list/specie-list.component";
import Topnav from "../components/topnav/topnav.component";

const Species = () => {
    return(
        <div className="page">
            <Sidenav />
            <div className="right">
                <Topnav />
                <SpecieList />
            </div>
        </div>
    )
}

export default Species;