import React from 'react';
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h2>Smurfville</h2>
            <NavLink to={'/smurfs'}>Smurfs</NavLink>
        </div>
    );
};

export default Header;