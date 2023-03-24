import React from "react";
import Box from '@mui/material/Box';
import Purple from "../../assets/images/people.svg"
import "./people.css";

const People = () => {
    return(
        <Box sx={{ p: 1, ml: 5, backgroundColor: '#ffffff', width: 200, borderRadius: '5px', boxShadow: '3' }}>
            <div className="top">
                <p><strong>People</strong></p>
                <img src={Purple} alt="a purple rectangle" />
            </div>
            <p><strong>200</strong></p>
            <p class="green"> 20 More than than yesterday</p>
        </Box>
    )
}

export default People;