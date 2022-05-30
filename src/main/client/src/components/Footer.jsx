import React from "react";
import "../css/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-block">
                <h4>Hotel Project</h4>
                <p>Abc gatan, Stockholm, Sverige</p>
                <p>08-8798675</p>
                <Link className="footer-link" to="/mail">hotelproject@gmail.com</Link>
            </div>

            <div className="footer-block">
                <Link to="/aboutus">Om oss</Link>
                <Link to="/contactus">Kontakt</Link>
                <Link to="/termsandcondition">Förhållande och villkor</Link>
            </div>

            <div className="footer-block">
                <Link to="/facebook">FaceBook</Link>
                <Link to="/twitter">Twitter</Link>
                <Link to="/instagram">Instagram</Link>
            </div>
        </footer>
    );
};
export default Footer;