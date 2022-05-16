import React from 'react';
import logo from '../images/globe.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEarthAmericas } from '@fortawesome/free-solid-svg-icons';


export default function Navbar() {
    return (
        <nav className='navbar'>
            <FontAwesomeIcon icon={faEarthAmericas} className="nav--logo" />
            <span>my</span>
            <span>travel</span>
            <span>journal.</span>
        </nav>

    )
}