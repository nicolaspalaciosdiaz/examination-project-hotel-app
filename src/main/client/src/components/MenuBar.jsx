import React from "react";
import "../css/MenuBar.css";
import {Link} from "react-router-dom";

const MenuBar = () => {
    return (
        <nav className="menu-bar">
            <div className="nav-wrapper">
                <Link to="/" className="home-logo">Hotel Project</Link>

                <ul className="menu">
                    <li><Link to="/facilities">Gym</Link></li>
                    <li><Link to="/services">Boka Service</Link></li>
                    {/*if logged in*/}
                    {/*<li><button onClick={onLogout}>Logout</Link></li>*/}

                    {/*if logged out*/}
                    <li><Link to="/loginpage">Logga In</Link></li>
                </ul>
            </div>
        </nav>
    )
}
export default MenuBar;