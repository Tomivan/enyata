import React from "react";
import Films from "../films/films.component";
import People from "../people/people.component";
import Species from "../species/species.component";
import Starships from "../starships/starships.component";
import "./overview-top.css";

const OverviewTop = () => {
    return(
        <div className="overview-top">
            <Films />
            <Starships />
            <People />
            <Species />
        </div>
    )
}

export default OverviewTop;