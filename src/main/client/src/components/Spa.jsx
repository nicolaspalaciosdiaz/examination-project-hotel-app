import React from "react";
import massageImage from "../images/massage.jpg";
import saunaImage from "../images/sauna.jpg";
import spaPoolImage from "../images/spa-pool.jpg"
import MenuBar from "./MenuBar";
import Footer from "./Footer";
import "../css/Spa.css";

const Spa = () => {
    return (
        <React.Fragment>
            <MenuBar/>
            <div>
                <img className="spa-spa-image" src={massageImage} alt="massage"/>
            </div>
            <div className="spa-sauna-image-and-text-container">
                <div>
                    <img className="spa-sauna-image" src={saunaImage} alt=""/>
                </div>
                <div>
                    <p className="spa-sauna-text">Ett av Stockholms mest avkopplande spa. Här njuter du av bekymmersfri
                        tillvaro, vi erbjuder noga
                        utvalda upplevelser som möter dina önskemål på ett varmt och personligt sätt.</p>
                </div>
            </div>
            <div className="spa-spa-pool-image-and-text-container">
                <div>
                    <p className="spa-spa-text">
                        Lämna ansvar och plikter och njut av den vidsträckta spa-lungen, eller gå in i ett av våra
                        basturum, sitt på terrasen i en solbädd och drick en enegigivande dryck.
                    </p>
                </div>
                <div>
                    <img className="spa-spa-pool-image" src={spaPoolImage} alt="spaPool"/>
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    );
}
export default Spa;

// TODO att lägga till bilder och länkar med erbjudannde på behandlingar.