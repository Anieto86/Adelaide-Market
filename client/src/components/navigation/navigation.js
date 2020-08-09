import React from 'react'

import { Link } from 'react-router-dom';

//icons
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGoogle } from '@fortawesome/free-brands-svg-icons';

//Import Login
import Login from "../login/login"
import logo from "../img/Final Logo_Alvaro_V3.png";


//stylesheets
import './navigation.css'

export default function navigation() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark ">
            <div className="container ">
                <div className="collapse navbar-collapse  ">
                    <Link className="navbar-brand" to="/home">
                        <img src={logo} className="logoNav" alt="logo" /> </Link>
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                        </li>
                        <li className="nav-item active catalogue">
                            <Link className="nav-link" to="/catalogue">Catalogue</Link>
                        </li>
                        <li className="nav-item active farmer">
                            <Link className="nav-link" to="/Farmers">Producers & Farmers </Link>
                        </li>
                        <li className="nav-item active loginNav">
                            <Login type="button" className="btn btn-secondary active login" />
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
