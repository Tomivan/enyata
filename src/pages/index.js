import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Film from "./film";
import Login from "./login";
import Overview from "./overview";
import People from "./people";
import PeopleInfo from "./people-info";
import SpecieInfo from "./specie-info";
import Species from "./species";
import StarshipInfo from "./starship-info";
import Starships from "./starships";
const Pages = () => {

    return(
        <Router>
            <Routes>
            <Route  path="/" element={<Login />}/>
            <Route  path="/overview" element={<Overview />}/>
            <Route  path="/film" element={<Film />}/>
            <Route  path="/people" element={<People />}/>
            <Route  path="/person-info" element={<PeopleInfo />}/>
            <Route  path="/species" element={<Species />}/>
            <Route  path="/specie-info" element={<SpecieInfo />}/>
            <Route  path="/starships" element={<Starships />}/>
            <Route  path="/starship-info" element={<StarshipInfo />}/>
            </Routes>
        </Router>
    )
}

export default Pages;