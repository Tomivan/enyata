import React from "react";
import StarwarsImage from "../../assets/images/starwars.svg";
import "./starwars.css";

const Starwars = () => {
    return(
        <div className="starwars">
            <img src={StarwarsImage} alt="the official starwars logo" />
        </div>
    )
}

export default Starwars;