import React from "react";
import Box from '@mui/material/Box';
import Blue from "../../assets/images/starships.svg"
import "./starships.css";

const Starships = () => {
    return(
        <Box sx={{ p: 1, ml: 5, backgroundColor: '#ffffff', width: 200, borderRadius: '5px', boxShadow: '3' }}>
            <div className="top">
                <p><strong>Starships</strong></p>
                <img src={Blue} alt="a blue rectangle" />
            </div>
            <p><strong>200</strong></p>
            <p class="green"> 20 More than than yesterday</p>
        </Box>
    )
}

export default Starships;