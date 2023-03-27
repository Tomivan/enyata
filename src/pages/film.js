import React from "react";
import FilmInfo from "../components/film-info/film-info.component";
import Sidenav from "../components/sidenav/sidenav.component";
import Topnav from "../components/topnav/topnav.component";

const Film = () => {
    return(
        <div className="page">
            <Sidenav />
            <div className="right">
                <Topnav />
                <FilmInfo />
            </div>
        </div>
    )
}

export default Film;