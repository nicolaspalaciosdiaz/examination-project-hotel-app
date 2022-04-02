import React from "react";
//import "../css/Footer.css;";
import {Link} from "react-router-dom";

function Column(props) {
    return null;
}

const Footer = () => {
    return (
        <div className="footer-container">
            <div className="footer-hotel-info">
                <h1>Hotel Project</h1>
                <p>Abc gatan, Stockholm, Sverige</p>
                <p>08-8798675</p>
                <Link to="/mail">hotelproject@gmail.com</Link>
            </div>
            <div className="footer-about-contact-terms-and-agreement-container">
                <div>
                    <Link to="/about">Om oss</Link>
                </div>
                <div>
                    <Link to="/contact">Kontakt</Link>
                </div>
                <div>
                    <Link to="/termsandcondition">Förhållande och villkor</Link>
                </div>
            </div>
            <div className="footer-social-media-container">
                <Link to="/facebook">FaceBook</Link>
                <Link to="/twitter">Twitter</Link>
                <Link to="/instagram">Instagram</Link>
            </div>
        </div>
    );
};

export default Footer;

//Todo att skapa alla länkingar på den här sidan.
// Ta in css och ikoner