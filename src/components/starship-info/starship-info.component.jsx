import React from "react";
import { useLocation } from "react-router-dom";
import "./starship-info.css";

const StarshipInfoComponent = (props) => {
    const location = useLocation();
    const data = location.state?.data;
    console.log(data)
    return(
        <div className="film-info">
            <img src={data.url} alt="a starship" />
            <div className="info">
                <h1>{data.title}</h1>
                <p>{data.model}</p>
                <p>Passengers: {data.passengers}</p>
                <p>Pilots: {data.release_dates}</p>
            </div>
        </div>
    )
}

export default StarshipInfoComponent;