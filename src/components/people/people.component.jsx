import React from "react";
import Box from '@mui/material/Box';
import Purple from "../../assets/images/people.svg"
import "./people.css";

const People = () => {
    return(
        <Box className="overview-box" sx={{ p: 1, ml: 3, backgroundColor: '#ffffff', width: 230, borderRadius: '5px', boxShadow: '3' }}>
            <div className="top">
                <p><strong>People</strong></p>
                <img src={Purple} alt="a purple rectangle" />
            </div>
            <p><strong>200</strong></p>
            <p className="green"> 20 More than than yesterday</p>
        </Box>
    )
}

export default People;