import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import "./starship-list.css";

const StarshipList = () => {
    const [state, setState] = useState(null);

    useEffect(() => {
        fetch('https://swapi.dev/api/starships', {
            method: 'GET'
        })  
        .then(resp => resp.json())
        .then(
            response => {
                setState(response)
            }
        )   
    }, [])
    return(
        <Box sx={{ p: 1, ml: 5, mt: 3, backgroundColor: '#ffffff', width: 880, borderRadius: '5px', boxShadow: '1' }}>
            <table>
                <thead>
                    <tr>
                        <th><input type="checkbox" /></th>
                        <th>Name</th>
                        <th>Model</th>
                        <th>Class</th>
                        <th>Passenger</th>
                        <th>Length</th>
                    </tr>
                </thead>
                <tbody>
                    {state && state.results.map(data => (
                    <tr>
                        <td><input type="checkbox" /></td>
                        <td><Link to="/starship-info" state={{data: data}} className="link">{data.name}</Link></td>
                        <td>{data.model}</td>
                        <td>{data.starship_class}</td>
                        <td>{data.passengers}</td>
                        <td>{data.length}</td>
                    </tr>))}
                </tbody>
            </table>
        </Box>
    )
}

export default StarshipList;