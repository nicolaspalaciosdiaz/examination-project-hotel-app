import React from "react";
import gymImage from "../images/gym.jpg";
import workingOut from "../images/workingOut.jpg";
import dumbbells from "../images/dumbbells.jpg";
import "../css/Facilities.css";
import MenuBar from "./MenuBar";
import Footer from "./Footer";

const Facilities = () => {
    return (
        <React.Fragment>
            <MenuBar/>
            <div className="facility-gym-image-wrapper">
                <img className="facility-gym-image" src={gymImage} alt="gym"/>
                <div className="">
                    <h1>Hotel Project</h1>
                    <p>Stockholm</p>
                    <p>Sverige</p>
                </div>
            </div>
            <div className="facility-workingOut-image-and-text-container">
                <div className="facility-workingOut-image-description">
                    <p>
                        Vi på Hotel Project anser att regelbunden träning är viktigt. Och vi vet att många av våra
                        gäster gärna spenderar en tid på träning. Som gäst hos oss har du därför tillgång till vårat två
                        våningsgym utan extra kostnad. Hos oss kan du köra intensiva pass med vänner eller varför inte
                        en av våra personliga tränare?
                    </p>
                </div>
                <div className="facility-workingOut-image-wrapper">
                    <img className="facility-workingOut-image" src={workingOut} alt="workingOut"/>
                </div>
            </div>
            <div className="facility-dumbbells-image-and-text-container">
                <div className="facility-dumbbells-image-wrapper">
                    <img className="facility-dumbbells-image" src={dumbbells} alt="dumbbells"/>
                </div>
                <div className="facility-dumbbells-image-description">
                    <p>Gymmet är fullt utrustat med maskiner och hantlar som behövs för en fullständig träning. Där
                        finns bland annat fria vikter, träningsmakiner från FitNord, löpband, cycklar och mycket
                        mer.</p>
                </div>
            </div>
            <div>
            </div>
            <Footer/>
        </React.Fragment>
    );
}
export default Facilities;