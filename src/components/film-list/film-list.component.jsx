import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { Box } from "@mui/material";
import "./film-list.css";

const FilmList = () => {
    const [state, setState] = useState(null);

    useEffect(() => {
        fetch('https://swapi.dev/api/films', {
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
        <Box sx={{ p: 1, ml: 3, mt: 3, backgroundColor: '#ffffff', width: 1050, borderRadius: '5px', boxShadow: '1', height: 350, position: 'relative', overflowY: 'scroll' }}>
            <table>
                <thead>
                    <tr>
                        <th><input type="checkbox" /></th>
                        <th>Film Title</th>
                        <th>Release Date</th>
                        <th>Director</th>
                        <th>Producer</th>
                        <th>Episode ID</th>
                        <th>Character</th>
                    </tr>
                </thead>
                <tbody>
                    {state && state.results.map((data, index) => (
                    <tr key={index}>
                        <td><input type="checkbox" /></td>
                        <td><Link to="/film" state={{data: data}} className="table-link"> {data.title} </Link></td>
                        <td>{data.release_date}</td>
                        <td>{data.director}</td>
                        <td>{data.producer}</td>
                        <td>{data.episode_id}</td>
                        <td>{data.characters.length}</td>
                    </tr>))}
                </tbody>
            </table>
        </Box>
    )
}

export default FilmList;