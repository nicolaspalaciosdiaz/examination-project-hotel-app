import React from "react";
import "../css/AboutUs.css";
import MenuBar from "./MenuBar";
import Footer from "./Footer";

const AboutUs = () => {
    return (
        <React.Fragment>
            <MenuBar/>
            <main className="about-page">
                <h1>Om Hotel Project</h1>
                <p>
                    Hotel Project startades i januari 2022 som ett examensarbete. Projektet är tänkt att hjälpa mindre till
                    meddelstora hotell och motell att införskaffa sig ett bokningssystem som är säkert, användar vänligt och skalbart.
                    Projektet är bygtt med Java, SpringBoot, Javascript, Reactjs och en MySQL databas.
                </p>
            </main>
            <Footer/>
        </React.Fragment>
    )
}
export default AboutUs;