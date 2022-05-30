import React from "react";
import Header from "./Header";
import MenuBar from "./MenuBar";
import bedroomImage from "../images/room-image.jpg";
import sauna from "../images/sauna.jpg";
import "../css/HomePage.css";
import Footer from "./Footer";

const HomePage = () => {
    return (
        <React.Fragment>
            <MenuBar/>
            <Header/>
            <main className="home-page">
                <div className="home-block">
                    <h1 className="home-block-heading">Lyx omdefineras</h1>
                    <p className="home-block-text">
                        Våra bekväma och rymliga rum. Omsorgsfullt inredd från 25 kvm.
                        Här finns rum för att koppla av och allt det där andra.
                        Vila ut i den sköna dubbelsängen på 200 cm eller slappna av i soffan
                        och njut av utsikten över trädgården och vattnet.
                    </p>
                    <div className="home-block-image-container">
                        <img className="home-block-image" src={bedroomImage} alt="image"/>
                    </div>
                </div>

                <div className="home-block">
                    <h1 className="home-block-heading">Lämna dina bekymmer</h1>
                    <p className="home-block-text">Spa och avkoppling för att göra dagen perfekt. <br/> Njut av en
                        klassik massage, få en
                        skönhetsbehandling, eller gå till vårat gym och utmana dig själv.</p>
                    <div className="home-block-image-container">
                        <img className="home-block-image" src={sauna} alt="image"/>
                    </div>
                </div>

            </main>
            <Footer/>
        </React.Fragment>
    )
}
export default HomePage;