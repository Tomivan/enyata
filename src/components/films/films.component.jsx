import React from "react";
import Box from '@mui/material/Box';
import Green from "../../assets/images/films.svg"
import "./films.css";

const Films = () => {
    return(
        <Box className="overview-box" sx={{ p: 1, ml: 3, backgroundColor: '#ffffff', width: 230, borderRadius: '5px', boxShadow: '3' }}>
            <div className="top">
                <p><strong>Film</strong></p>
                <img src={Green} alt="" />
            </div>
            <p><strong>200</strong></p>
            <p className="green"> 20 More than than yesterday</p>
        </Box>
    )
}

export default Films;