import React from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component{
    render(){
        return (
            <nav className="navbar">
                <h1><Link to="/">Come2gether</Link></h1>
                <div className="navbar-buttons">
                    <h1><Link to="/new" className="btn">Add event</Link></h1>
                </div>
            </nav>
        );
    }
}