import React from 'react';
import { Link } from 'react-router-dom';
import './Bulamu.css';


class Bulamu extends React.Component{
    render(){
        return(
            <div className = "Bulamu">
                <Link to="/login"><header className = "header"><h1>BULAMU-MORE</h1></header></Link>
            </div>
        );
    }
}


export default Bulamu;
