import React from "react";
import "../css/MenuBar.css";
import {Link} from "react-router-dom";

const MenuBar = () => {
    return (
        <nav className="menu-bar">
            <Link to="/" className="menu-bar-logo">Hotel Project</Link>

            <ul className="menu-bar-links">
                <li className="menu-bar-link">
                    <Link to="/gym">Gym</Link>
                </li>
                <li className="menu-bar-link">
                    <Link to="/spa">Spa</Link>
                </li>
                <li className="menu-bar-link">
                    <Link to="/services">Boka Service</Link>
                </li>
                <li className="menu-bar-link">
                    <Link to="/loginpage">Logga In</Link>
                </li>
            </ul>
        </nav>
    )
}
export default MenuBar;