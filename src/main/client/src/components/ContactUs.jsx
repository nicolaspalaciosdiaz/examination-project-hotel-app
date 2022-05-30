import React from "react";
import "../css/ContactUs.css";
import MenuBar from "./MenuBar";
import Footer from "./Footer";
import {Link} from "react-router-dom";

const ContactUs = () => {
    return (
        <React.Fragment>
            <MenuBar/>
            <main className="contact-page">
                <h1>Välkommen!</h1>
                <h2>Hur kan vi hjälpa?</h2>

                <div>
                    <input type="text" placeholder="Sök.."/>
                </div>

                <div className="contactus-links">
                    <Link to="/">Mina sidor</Link>
                    <Link to="/">Medlemskap</Link>
                    <Link to="/">Avbokning</Link>
                    <Link to="/">Om Hotel Project</Link>
                </div>

                <div>
                    <h1>Vanliga frågor</h1>
                </div>
            </main>
            <Footer/>
        </React.Fragment>
    )
}
export default ContactUs;