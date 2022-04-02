import React from "react";
import image from "../images/landing-page-image.jpg"
import "../css/Header.css";

const Header = () => {
    return (
        <React.Fragment>
            <header className="header">
                <div className="header-container">
                    <div className="image-wrapper">
                        <img className="header-image" src={image} alt="hotel"/>
                    </div>
                    <div className="hotel-text-container">
                        <h1>Välkommen till</h1>
                        <h2>Hotel Project</h2>
                        <p>Boka din vistelse för att njuta av de mest prisärda rummen</p>
                    </div>
                </div>
            </header>
        </React.Fragment>
    )
}
export default Header;