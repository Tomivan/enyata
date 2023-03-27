import React from "react";
import { useLocation } from "react-router-dom";
import "./specie-info.css";

const SpecieInfoComponent = (props) => {
    const location = useLocation();
    const data = location.state?.data;
    return(
        <div className="film-info">
            <img src={data.url} alt="A specie" />
            <div className="info">
                <h1>{data.name}</h1>
                <p>Designation: {data.designation}</p>
                <p>Language: {data.language}</p>
                <p>Eye Colors: {data.eye_colors}</p>
                <p>Average Lifespan: {data.average_lifespan}</p>
            </div>
        </div>
    )
}

export default SpecieInfoComponent;