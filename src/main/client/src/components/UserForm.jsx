import React, {useEffect, useState} from "react";
import MenuBar from "./MenuBar";
import Footer from "./Footer";
import axios from "axios";

function UserForm(props) {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: 0,
        password: "",
        role: "",
    });

    useEffect(() => {
        //setIsLoading(true);

    }, []);

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

export default UserForm;

