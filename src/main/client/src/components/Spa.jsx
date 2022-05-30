import React from "react";
import massageImage from "../images/massage.jpg";
import saunaImage from "../images/sauna.jpg";
import spaPoolImage from "../images/spa-pool.jpg"
import MenuBar from "./MenuBar";
import Footer from "./Footer";
import "../css/Spa.css";
import gymImage from "../images/gym.jpg";
import workingOut from "../images/workingOut.jpg";
import dumbbells from "../images/dumbbells.jpg";

const Spa = () => {
    return (
        <React.Fragment>
            {/*<MenuBar/>*/}
            {/*<main className="spa-page">*/}
            {/*<div>*/}
            {/*    <img className="spa-spa-image" src={massageImage} alt="massage"/>*/}
            {/*</div>*/}
            {/*<div className="spa-sauna-image-and-text-container">*/}
            {/*    <div>*/}
            {/*        <img className="spa-sauna-image" src={saunaImage} alt=""/>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <p className="spa-sauna-text">Ett av Stockholms mest avkopplande spa. Här njuter du av bekymmersfri*/}
            {/*            tillvaro, vi erbjuder noga*/}
            {/*            utvalda upplevelser som möter dina önskemål på ett varmt och personligt sätt.</p>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*<div className="spa-spa-pool-image-and-text-container">*/}
            {/*    <div>*/}
            {/*        <p className="spa-spa-text">*/}
            {/*            Lämna ansvar och plikter och njut av den vidsträckta spa-lungen, eller gå in i ett av våra*/}
            {/*            basturum, sitt på terrasen i en solbädd och drick en enegigivande dryck.*/}
            {/*        </p>*/}
            {/*    </div>*/}
            {/*    <div>*/}
            {/*        <img className="spa-spa-pool-image" src={spaPoolImage} alt="spaPool"/>*/}
            {/*    </div>*/}
            {/*</div>*/}
            {/*</main>*/}
            {/*<Footer/>*/}

            <MenuBar/>
            <main className="spa-page">
                <header className="spa-header">
                    <div className="spa-header-image-text">
                        <img className="spa-header-image" src={massageImage} alt="massage"/>
                        <div className="spa-header-text">
                            <h1 className="spa-header-heading">Spa</h1>
                            <p>Relax, massage, behandlingar etc</p>
                        </div>
                    </div>
                </header>

                <section className="spa-content">
                    <div className="spa-content-block">
                        <div className="spa-content-block-text">
                            <h3>Koppla av</h3>
                            <p className="spa-content-block-paragraph">
                                Ett av Stockholms mest avkopplande spa.
                                Här njuter du av bekymmersfri tillvaro,
                                vi erbjuder noga utvalda upplevelser som möter dina önskemål
                                på ett varmt och personligt sätt.
                            </p>
                        </div>
                        <div className="spa-content-block-image-container">
                            <img className="spa-content-block-image" src={saunaImage} alt="sauna"/>
                        </div>
                    </div>

                    <div className="spa-content-block">
                        <div className="spa-content-block-image-container">
                            <img className="spa-content-block-image" src={spaPoolImage} alt="pool"/>
                        </div>
                        <div className="spa-content-block-text">
                            <h3>Våra ytor</h3>
                            <p className="spa-content-block-paragraph">
                                Lämna ansvar och plikter och njut av den vidsträckta spa-lungen,
                                eller gå in i ett av våra basturum, sitt på terrasen i en solbädd
                                och drick en enegigivande dryck.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <Footer/>
        </React.Fragment>
    );
}
export default Spa;