import React from "react";
import { useLocation } from "react-router-dom";
import "./film-info.css";

const FilmInfo = (props) => {
    const location = useLocation();
    const data = location.state?.data;
    return(
        <div className="film-info">
            <img src={data.url} alt="film art cover" />
            <div className="info">
                <h1>{data.title}</h1>
                <p>{data.director}</p>
                <p>{data.producer}</p>
                <p>{data.release_date}</p>
            </div>
        </div>
    )
}

export default FilmInfo;