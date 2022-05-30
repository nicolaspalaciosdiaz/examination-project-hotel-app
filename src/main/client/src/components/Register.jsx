import React, {useEffect, useRef, useState} from "react";
import MenuBar from "./MenuBar";
import Footer from "./Footer";
import axios from "axios";
import {isEmail} from "validator";
import "../css/Register.css";

const required = value => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                Det här fältet får inte vara tomt!
            </div>
        );
    }
};

const validEmail = value => {
    if (!isEmail(value)) {
        return (
            <div className="alert alert-danger" role="alert">
                This is not a valid email.
            </div>
        );
    }
};

const validUsername = (value) => {
    if (value.length < 3 || value.length > 20) {
        return (
            <div className="alert alert-danger" role="alert">
                Användarnamnet är för kort, det får minst vara 3 och högst 20 karaktärer.
            </div>
        );
    }
};

const validPassword = (value) => {
    if (value.length < 6 || value.length > 40) {
        return (
            <div className="alert alert-danger" role="alert">
                Lösenordet får minst vara 6 och högst 40 karaktärer.
            </div>
        );
    }
};

function Register(props) {
    const form = useRef();
    const checkBtn = useRef();

    const [user, setUser] = useState({
        userName: "",
        firstName: "",
        lastName: "",
        dateOfBirth: null,
        email: "",
        phoneNumber: 0,
        password: "",
        role: "",
    });

    const onChange = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        });
    };

    const onSubmit = (event) => {
        event.preventDefault();

        let headers = {'content-type': 'application/json'}

        const result = axios.post("/api/users/adduser", user, {headers});

        setUser({
            userName: "",
            firstName: "",
            lastName: "",
            dateOfBirth: "",
            email: "",
            phoneNumber: 0,
            password: "",
            role: "",
        });

    }

    useEffect(() => {
        //setIsLoading(true);

    }, []);

    return (
        <React.Fragment>
            <MenuBar/>
            <main className="register-page">
            <div>
                <p className="register-discount-text">10% på din första bokning som medlem!</p>
                <p className="register-discount-text2">Just nu får du 10% på din första bokning online när du blir medlem i Project Hotel. <br/> Registrera
                    dig nedan för att ta del av erbjudandet.</p>
            </div>
            <div>
                <h1 className="register-h1-become-member-in-hotel-project">BLI MEDLEM I HOTEL PROJECT</h1>
                <p className="register-description-become-member">
                    Som medlem hos oss får du bonus på varje bokning. Dessutom personliga erbjudanden och unika förmåner.
                    Ju högre medelemspoäng du har, desto fler förmåner får du.
                    Erbjudanden hittar du i inloggat läge på Mina Sidor, via e-post eller sms.
                </p>
            </div>

            <form onSubmit={onSubmit}>
                <div className="register-form-container">
                    <div>
                        <label>
                            <p>Användarnamn:</p>
                            <input className="register-page-field"
                                name="userName"
                                type="text"
                                value={user.userName}
                                onChange={e => onChange(e)}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            <p>Förnamn:</p>
                            <input className="register-page-field"
                                name="firstName"
                                type="text"
                                value={user.firstName}
                                onChange={e => onChange(e)}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            <p>Efternamn:</p>
                            <input className="register-page-field"
                                name="lastName"
                                type="text"
                                value={user.lastName}
                                onChange={e => onChange(e)}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            <p>Födelsedatum (YYYY-MM-DD):</p>
                            <input className="register-page-field"
                                name="birthday"
                                type="input"
                                value={user.dateOfBirth}
                                onChange={e => onChange(e)}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            <p>Email:</p>
                            <input className="register-page-field"
                                name="email"
                                type="email"
                                value={user.email}
                                onChange={e => onChange(e)}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            <p>Telefonnummer:</p>
                            <input className="register-page-field"
                                name="phoneNumber"
                                type="number"
                                value={user.phoneNumber}
                                onChange={e => onChange(e)}
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            <p>Lösenord:</p>
                            <input className="register-page-field"
                                name="password"
                                type="password"
                                value={user.password}
                                onChange={e => onChange(e)}
                            />
                        </label>
                    </div>
                    <div>
                        <input type="submit" value="BLI MEDLEM"/>
                    </div>
                </div>
            </form>
            </main>
            <Footer/>
        </React.Fragment>
    );
}

export default Register;

