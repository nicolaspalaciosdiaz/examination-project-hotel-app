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
                <div className="body-bedroom-image-wrapper">
                    <br/>
                    <h1 className="homepage-h1-redefine-luxury">Lyx omdefineras</h1>
                    <br/>
                    <p className="homepage-text-description">Våra bekväma och rymliga rum. Omsorgsfullt inredd från 25
                        kvm. Här finns rum för att koppla av
                        och allt det där andra.
                        <br/> vila ut i den sköna dubbelsängen på 200 cm eller slappna av i soffan och
                        njut av utsikten över trädgården och vattnet.</p>
                    <br/>
                    <br/>
                    <img className="body-bedroom-image" src={bedroomImage} alt="image"/>
                </div>
                <br/>
                <br/>
                <div>
                    <div className="body-spa-image-wrapper">
                        <h1 className="homepage-leave-your-worries">Lämna dina bekymmer</h1>
                        <br/>
                        <p className="homepage-spa-text">Spa och avkoppling för att göra dagen perfekt. <br/> Njut av en klassik massage, få en
                            skönhetsbehandling, eller gå till vårat gym och utmana dig själv.</p>
                        <br/>
                        <br/>
                        <img className="body-spa-image" src={sauna} alt="image"/>
                    </div>
                </div>
                <Footer/>
            </main>
        </React.Fragment>
    )
}
export default HomePage;