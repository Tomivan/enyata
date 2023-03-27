import React from "react";
import { useLocation } from "react-router-dom";
import "./people-info.css";

const PeopleInfoComponent = (props) => {
    const location = useLocation();
    const data = location.state?.data;
    console.log(data)
    return(
        <div className="film-info">
            <img src={data.url} alt="A Person" />
            <div className="info">
                <h1>{data.name}</h1>
                <p>Gender: {data.gender}</p>
                <p>Year of Birth: {data.birth_year}</p>
                <p>Skin Color: {data.skin_color}</p>
                <p>Height: {data.height}</p>
            </div>
        </div>
    )
}

export default PeopleInfoComponent;