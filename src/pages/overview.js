import React from "react";
import FilmList from "../components/film-list/film-list.component";
import OverviewTop from "../components/overview-top/overview-top.component";
import Sidenav from "../components/sidenav/sidenav.component";
import Topnav from "../components/topnav/topnav.component";

const Overview = () => {
    return(
        <div className="page">
            <Sidenav />
            <div className="right">
                <Topnav />
                <OverviewTop />
                <FilmList />
            </div>
        </div>
    )
}

export default Overview;