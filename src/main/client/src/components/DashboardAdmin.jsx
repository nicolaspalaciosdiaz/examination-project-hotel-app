import React from "react";
import Header from "./Header";
import MenuBar from "./MenuBar";
import Users from "./Users";
import "../css/HomePage.css";


const HomePage = () => {
    return (
        <React.Fragment>
            <MenuBar/>
            <div>
               <Users />
            </div>
        </React.Fragment>
    )
}
export default HomePage;