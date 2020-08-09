import React from 'react'
// import { Link } from 'react-router-dom';


//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import logo from "../img/Logo_Alvaro_small-final.png";

//stylesheets
import './footer.css';

export default function Footer() {
    return (
        <div className=" bigpie">
            <div className="container ">
                <a href={"https://www.linkedin.com/in/alvaro-fernando-nieto-guil/"}>
                    <FontAwesomeIcon icon={faFacebook} style={{ fontSize: "3em", color: "White" }} className='pieicon' />
                </a>
                <a href={"https://www.linkedin.com/in/alvaro-fernando-nieto-guil/"}>
                    <FontAwesomeIcon icon={faTwitter} style={{ fontSize: "3em", color: "White" }} className='pieicon' />
                </a>
                <a href={"https://www.linkedin.com/in/alvaro-fernando-nieto-guil/"}>
                    <FontAwesomeIcon icon={faInstagram} style={{ fontSize: "3em", color: "White" }} className='pieicon' />
                </a>
                <br />
                <img src={logo} className="logoFooter" alt="logo" />
                <p className="linkfAl" >Free Entry Every Sunday 8.30am - 12.30pm | Subscribe to our E-News for the latest market updates</p>
                <p className="linkfAl" >© 2020 | Alvaro Nieto </p>
                <a href={"https://github.com/Anieto86"}>
                    <FontAwesomeIcon icon={faGithub} style={{ fontSize: "3.5em", color: "White" }} className='pieiconAl' />
                </a>
                
                <a href={"https://www.linkedin.com/in/alvaro-fernando-nieto-guil/"}>
                    <FontAwesomeIcon icon={faLinkedinIn} style={{ fontSize: "3.5em", color: "White" }} className='pieiconAl' />
                </a>
            </div>
        </div>
    )

}
