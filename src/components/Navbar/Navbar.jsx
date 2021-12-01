import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/meals">Posiłki</Link>
            <Link to="/add-meal">Dodaj posiłek</Link>
        </nav>
    )
}
