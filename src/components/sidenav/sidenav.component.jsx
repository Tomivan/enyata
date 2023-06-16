import React, { useRef } from "react";
import Logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import Icon from '@mdi/react';
import { mdiMenu, mdiClose } from '@mdi/js';
import Overview from "../../assets/images/overview.svg";
import Blue from "../../assets/images/starships.svg";
import Purple from "../../assets/images/people.svg";
import Yellow from "../../assets/images/species.svg"
import "./sidenav.css";

const Sidenav = () => {
    const ref = useRef();
    function showNav () {
        ref.current.style.display = 'block';
        ref.current.style.width = '80%';
        ref.current.style.zIndex ='10';
    }
    function closeNav() {
        ref.current.style.display = 'none';
    }
    return(  
       <div>
            <Icon path={mdiMenu} size={1} className="hamburger" onClick={showNav}/>
            <div className="sidenav" ref={ref}>
                <div className="sidenav-top">
                    <img src={Logo} alt="The official starwars logo" className="logo"/>
                    <Icon path={mdiClose} size={1} className="close" onClick={closeNav}/>
                </div>
                <div className="links">
                    <Link to="/overview" className="link">
                        <img src={Overview} alt="" />
                        Overview
                    </Link>
                    <Link to="/starships" className="link">
                        <img src={Blue} alt="a blue box" />
                        Starships
                    </Link>
                    <Link to="/people" className="link">
                        <img src={Purple} alt="a purple box" />
                        People
                    </Link>
                    <Link to="/species" className="link">
                        <img src={Yellow} alt="a yellow box" />
                        Species
                    </Link>
                </div>
            </div>
       </div>
    )
}

export default Sidenav;