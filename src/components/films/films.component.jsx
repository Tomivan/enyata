import React from "react";
import Box from '@mui/material/Box';
import Green from "../../assets/images/films.svg"
import "./films.css";

const Films = () => {
    return(
        <Box sx={{ p: 1, ml: 3, backgroundColor: '#ffffff', width: 200, borderRadius: '5px', boxShadow: '3' }}>
            <div className="top">
                <p><strong>Film</strong></p>
                <img src={Green} alt="" />
            </div>
            <p><strong>200</strong></p>
            <p class="green"> 20 More than than yesterday</p>
        </Box>
    )
}

export default Films;