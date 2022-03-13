import React, {useEffect, useState} from "react";
import axios from "axios";
import User from "./User";
import Users from "./Users";

function UserForm(props) {
    /*const [hasError, setHasError] = useState(false);

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState(null);
    const [password, setPassword] = useState('');*/

   // const [isLoading, setIsLoading] = useState(false);
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: undefined,
        password: "",
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

       const result = axios.post("/api/userform", user);

       console.log("result", result)
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

            <input type="submit" value="Submit" />

        </form>
    );
}

export default UserForm;
// setState({}); för att tömma formulär


/*        return <div>
            <ul>
                {
                    isLoading ?
                        <div>Laddar...</div> :
                        hasError ?
                            <div>Något gick fel...</div> :

                })
            </ul>
        </div>;*/