import React, {useEffect, useState} from "react";
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

        const result = axios.post("http://localhost:8080/api/users/adduser", user, {headers});
        
    }

    return (
        <form onSubmit={onSubmit}>
            <label>
                First Name:
                <input
                    name="firstName"
                    type="text"
                    value={user.firstName}
                    onChange={e => onChange(e)}
                    placeholder="Förnamn"
                />
            </label>
            <label>
                Last Name:
                <input
                    name="lastName"
                    type="text"
                    value={user.lastName}
                    onChange={e => onChange(e)}
                />
            </label>
            <label>
                Email:
                <input
                    name="email"
                    type="email"
                    value={user.email}
                    onChange={e => onChange(e)}
                />
            </label>
            <label>
                Phone number:
                <input
                    name="phoneNumber"
                    type="number"
                    value={user.phoneNumber}
                    onChange={e => onChange(e)}
                />
            </label>
            <label>
                Password:
                <input
                    name="password"
                    type="password"
                    value={user.password}
                    onChange={e => onChange(e)}
                />
            </label>

            <input type="submit" value="Submit"/>

        </form>
    );
}

export default UserForm;