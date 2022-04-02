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
            <div>
                <div className="body-bedroom-image-wrapper">
                    <h1>Lyx omdefineras</h1>
                    <p>Våra bekväma och rymliga rum. Omsorgsfullt inredd från 25 kvm. Här finns rum för att koppla av
                        och allt det där andra. vila ut i den sköna dubbelsängen på 200 cm eller slappna av i soffan och
                        njut av utsikten över trädgården och vattnet.</p>
                    <img className="body-bedroom-image" src={bedroomImage} alt="image"/>
                </div>
                <div>
                    <div className="body-spa-image-wrapper">
                        <h1>Lämna dina bekymmer</h1>
                        <p>Spa och avkoppling för att göra dagen perfekt. Njut av en klassik massage, få en
                            skönhetsbehandling, eller gå till vårat gym och utmana dig själv.</p>
                        <img className="body-spa-image" src={sauna} alt="image"/>
                    </div>
                </div>
                <Footer/>
            </div>
        </React.Fragment>
    )
}
export default HomePage;