import React from "react";
import Box from '@mui/material/Box';
import Yellow from "../../assets/images/species.svg"
import "./species.css";

const Species = () => {
    return(
        <Box sx={{ p: 1, ml: 5, backgroundColor: '#ffffff', width: 200, borderRadius: '5px', boxShadow: '3' }}>
            <div className="top">
                <p><strong>Species</strong></p>
                <img src={Yellow} alt="" />
            </div>
            <p><strong>200</strong></p>
            <p class="green"> 20 More than than yesterday</p>
        </Box>
    )
}

export default Species;