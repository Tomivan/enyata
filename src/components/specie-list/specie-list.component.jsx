import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import "./specie-list.css";

const SpecieList = () => {
    const [state, setState] = useState(null);

    useEffect(() => {
        fetch('https://swapi.dev/api/species', {
            method: 'GET'
        })  
        .then(resp => resp.json())
        .then(
            response => {
                console.log(response)
                setState(response)
            }
        )   
    }, [])
    return(
        <Box sx={{ p: 1, ml: 5, mt: 5, backgroundColor: '#ffffff', width: 1030, borderRadius: '5px', boxShadow: '1' }}>
            <table>
                <thead>
                    <tr>
                        <th><input type="checkbox" /></th>
                        <th>Name</th>
                        <th>Classification</th>
                        <th>Eye Colors</th>
                        <th>Hair Color</th>
                        <th>Height</th>
                        <th>Created</th>
                    </tr>
                </thead>
                <tbody>
                    {state && state.results.map(data => (
                    <tr>
                        <td><input type="checkbox" /></td>
                        <td><Link to="/specie-info" state={{data: data}} className="table-link">{data.name}</Link></td>
                        <td>{data.classification}</td>
                        <td>{data.eye_colors}</td>
                        <td>{data.hair_colors}</td>
                        <td>{data.average_height}</td>
                        <td>{data.created}</td>
                    </tr>))}
                </tbody>
            </table>
        </Box>
    )
}

export default SpecieList;