import React, {useEffect, useRef, useState} from "react";
import MenuBar from "./MenuBar";
import Footer from "./Footer";
import axios from "axios";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import {isEmail} from "validator";
import AuthService from "../services/auth.service";

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

    }

    useEffect(() => {
        //setIsLoading(true);

    }, []);

    return (
        <React.Fragment>
            <MenuBar/>
            <form onSubmit={onSubmit}>
                <div>
                    <label>
                        First Name:
                        <input
                            name="firstName"
                            type="text"
                            value={user.firstName}
                            onChange={e => onChange(e)}
                            placeholder="FÖRNAMN"
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Last Name:
                        <input
                            name="lastName"
                            type="text"
                            value={user.lastName}
                            onChange={e => onChange(e)}
                            placeholder="EFTERNAMN"
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Birthday:
                        <input
                            name="birthday"
                            type="date"
                            value={user.dateOfBirth}
                            onChange={e => onChange(e)}
                            placeholder="FÖDELSEDAG"
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Email:
                        <input
                            name="email"
                            type="email"
                            value={user.email}
                            onChange={e => onChange(e)}
                            placeholder="EMAIL"
                        />
                    </label>
                </div>
                <div>
                    <label>
                        Phone number:
                        <input
                            name="phoneNumber"
                            type="number"
                            value={user.phoneNumber}
                            onChange={e => onChange(e)}
                        />
                    </label>
                </div>

                {/*Todo att lägga till födelsedatum*/}
                <div>
                    <label>
                        Password:
                        <input
                            name="password"
                            type="password"
                            value={user.password}
                            onChange={e => onChange(e)}
                            placeholder="LÖSENORD"
                        />
                    </label>
                </div>
                <div>
                    <input type="submit" value="BLI MEDLEM"/>
                </div>
            </form>
            <Footer/>
        </React.Fragment>
    );
}

export default Register;

