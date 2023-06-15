import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import "./people-list.css";

const PeopleList = () => {
    const [state, setState] = useState(null);

    useEffect(() => {
        fetch('https://swapi.dev/api/people', {
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
        <Box sx={{ p: 1, ml: 5, mt: 3, backgroundColor: '#ffffff', width: 1000, borderRadius: '5px', boxShadow: '1',height: 500, position: 'relative', overflowY: 'scroll' }}>
            <table>
                <thead>
                    <tr>
                        <th><input type="checkbox" /></th>
                        <th>Name</th>
                        <th>Birth Year</th>
                        <th>Gender</th>
                        <th>Height</th>
                        <th>Hair Color</th>
                        <th>Created</th>
                    </tr>
                </thead>
                <tbody>
                    {state && state.results.map(data => (
                    <tr>
                        <td><input type="checkbox" /></td>
                        <td><Link to="/person-info" state={{data: data}} className="table-link"> {data.name}</Link></td>
                        <td>{data.birth_year}</td>
                        <td>{data.gender}</td>
                        <td>{data.height}</td>
                        <td>{data.hair_color}</td>
                        <td>{data.created}</td>
                    </tr>))}
                </tbody>
            </table>
        </Box>
    )
}

export default PeopleList;