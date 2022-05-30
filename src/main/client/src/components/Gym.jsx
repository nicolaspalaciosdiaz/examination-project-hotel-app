import React from "react";
import gymImage from "../images/gym.jpg";
import workingOut from "../images/workingOut.jpg";
import dumbbells from "../images/dumbbells.jpg";
import "../css/Gym.css";
import MenuBar from "./MenuBar";
import Footer from "./Footer";

const Gym = () => {
    return (
        <React.Fragment>
            <MenuBar/>
            <main className="gym-page">
                <header className="gym-header">
                    <div className="gym-header-image-text">
                        <img className="gym-header-image" src={gymImage} alt="gym"/>
                        <div className="gym-header-text">
                            <h1 className="gym-header-heading">Gym</h1>
                            <p>Maskiner, redskap etc</p>
                        </div>
                    </div>
                </header>

                <section className="gym-content">
                    <div className="gym-content-block">
                        <div className="gym-content-block-text">
                            <h3>Träning är viktigt för oss</h3>
                            <p className="gym-content-block-paragraph">
                                Vi på Hotel Project anser att regelbunden träning är viktigt.
                                Vi vet att många av våra gäster gärna spenderar en tid på träning.
                                Som gäst hos oss har du därför tillgång till vårat två våningsgym utan extra kostnad.
                                Hos oss kan du köra intensiva pass med vänner eller varför inte en av våra personliga
                                tränare?
                            </p>
                        </div>
                        <div className="gym-content-block-image-container">
                            <img className="gym-content-block-image" src={workingOut} alt="workingOut"/>
                        </div>
                    </div>

                    <div className="gym-content-block">
                        <div className="gym-content-block-image-container">
                            <img className="gym-content-block-image" src={dumbbells} alt="dumbbells"/>
                        </div>
                        <div className="gym-content-block-text">
                            <h3>Utrustning</h3>
                            <p className="gym-content-block-paragraph">
                                Gymmet är fullt utrustat med maskiner och hantlar som behövs för en fullständig träning.
                                Där inns bland annat fria vikter, träningsmakiner från FitNord, löpband, cycklar och
                                mycket
                                mer.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </React.Fragment>
    );
}
export default Gym;