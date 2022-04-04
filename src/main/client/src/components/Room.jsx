import React from "react";
import singleRoom from "../images/singleroom.jpg"
import doubleRoom from "../images/doubleroom.jpg";
import deluxRoom from "../images/deluxroom.jpg";
import superiorRoom from "../images/superiorroom.jpg"
import superiorJuniorsuiteRoom from "../images/superiorjuniorsuite.jpg"
import MenuBar from "./MenuBar";
import Footer from "./Footer";
import "../css/Room.css";

const Room = () => {
    return (
        <React.Fragment>
            <MenuBar/>
            <div>
                <h1>VÅRA RUM</h1>
                <p>
                    Ett varmt välkomnande till Hotel Project. Vår personal finns tillgängliga dygnet runt för att ni ska
                    kunna njuta av er vistelse. Vi har ett motto. Att göra er nöjda och glada, så har ni önskemål och
                    kan vi uppfylla dom, så gör vi det.
                </p>
                <div className="hotel-room-container">
                    <div>
                        <h1>ENKELRUM</h1>
                        <img className="room-single-room" src={singleRoom} alt="singleRoom"/>
                    </div>
                    <div>
                        <h1>DUBBELRUM</h1>
                        <img className="room-double-room" src={doubleRoom} alt="doubleRoom"/>

                    </div>
                    <div>
                        <h1>DELUXRUM</h1>
                        <img className="room-delux-room" src={deluxRoom} alt="juniorSuiteRoom"/>
                    </div>
                </div>
                <div>
                    <div>
                        <h1>SUPERIORRUM</h1>
                        <img className="room-superior-room" src={superiorRoom} alt="deluxRoom"/>

                    </div>
                    <div>
                        <h1>SUPERIORSUITE</h1>
                        <img className="room-superior-suite-room" src={superiorJuniorsuiteRoom}
                             alt="superiorRoom"/>
                    </div>
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    );
}
export default Room;