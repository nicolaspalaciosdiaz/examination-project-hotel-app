import React, {useState} from "react";
import axios from 'axios';
import MenuBar from "./MenuBar";
import Footer from "./Footer";
import {Link} from "react-router-dom";

function LoginPage(props) {
    const [state, setState] = useState({
        email: "",
        password: "",
        successMessage: null
    })
    const handleChange = (e) => {
        const {id, value} = e.target
        setState(prevState => ({
            ...prevState,
            [id]: value
        }))
    }

    const handleSubmitClick = (e) => {
        e.preventDefault();
        const payload = {
            "email": state.email,
            "password": state.password,
        }
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
    }

    return (
        <React.Fragment>
            <MenuBar/>
            <div>
                <div>
                    <h1>LOGGA IN</h1>
                </div>
                <div>
                    <form>
                        <div>
                            <label htmlFor="exampleInputEmail">EMAIL</label>
                            <input type="email" id="email"
                                   placeholder="Skriv din email"/>
                        </div>
                        <div>
                            <label htmlFor="InputPassword">PASSWORD</label>
                            <input type="password"
                                   id="password"
                                   placeholder="Lösenord"/>
                        </div>
                        <button type="submit" className="btn btn-login">
                            LOGGA IN
                        </button>
                        {/* Todo Glömt lösne ska bytas till länk*/}
                        <h1>GLÖMT LÖSENORD</h1>
                    </form>
                    <Link to="/userform" className="btn btn-userform">BLI MEDELM</Link>

                    <Link to="/">TILLBAKA</Link>
                </div>
            </div>
            <Footer/>
        </React.Fragment>
    );
}

export default LoginPage;