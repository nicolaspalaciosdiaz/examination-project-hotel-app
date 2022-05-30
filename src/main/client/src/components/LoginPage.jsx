import React, {useState} from "react";
import axios from 'axios';
import MenuBar from "./MenuBar";
import Footer from "./Footer";
import {Link} from "react-router-dom";
import "../css/Loginpage.css";

function LoginPage(props) {
    const [state, setState] = useState({
        email: "",
        password: "",
        successMessage: null
    });

    const handleChange = (e) => {
        const {id, value} = e.target
        setState(prevState => ({
            ...prevState,
            [id]: value
        }))
    };

    const handleSubmitClick = (e) => {
        e.preventDefault();
        const payload = {
            "email": state.email,
            "password": state.password,
        };

        axios.post("http://localhost:3000/loginpage", payload)
            .then(function (response) {
                if (response.status === 200) {
                    setState(prevState => ({
                        ...prevState,
                        'sucessMessage': 'Login lyckades'
                    }))
                    // Redirecta till dashboard
                } else if (response.code === 204) {
                    props.showError("Användarnamn och/eller lösenord är fel");
                } else {
                    props.showError("Username does not exists");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    return (
        <React.Fragment>
            <MenuBar/>
            <main className="login-page">
                <div className="login-page-h1-loggain">
                    <h1>LOGGA IN</h1>
                </div>
                <form>
                    <div className="login-page-form-container">

                        <div className="login-page-email-field">
                            <label>
                                <p>EMAIL</p>
                                <input className="login-page-form-field"
                                    type="email"
                                    id="email"
                                    placeholder="Skriv din email"/>
                            </label>
                        </div>
                        <div className="login-page-password-field">
                            <label>
                                <p>LÖSENORD</p>
                                <input className="login-page-form-field"
                                    type="password"
                                    id="password"
                                    placeholder="Lösenord"/>
                            </label>
                        </div>
                        <div>
                            <input type="submit" value="LOGGA IN"/>
                        </div>
                    </div>
                </form>
                <div className="login-page-links">
                    <Link to="/">GLÖMT LÖSENORD</Link>
                    <Link to="/register" className="btn btn-userform">BLI MEDELM</Link>
                    <Link to="/">TILLBAKA</Link>
                </div>
            </main>
            <Footer/>
        </React.Fragment>
    )
        ;
}

export default LoginPage;