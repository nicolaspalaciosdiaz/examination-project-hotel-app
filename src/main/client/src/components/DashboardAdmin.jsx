import React from "react";
import MenuBar from "./MenuBar";
import Users from "./Users";
import "../css/HomePage.css";


const HomePage = () => {
    return (
        <React.Fragment>
            <MenuBar/>
            <Users />
        </React.Fragment>
    )
}
export default HomePage;