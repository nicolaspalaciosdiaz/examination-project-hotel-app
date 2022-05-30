import React, {useEffect, useState} from 'react';
import axios from "axios";
import User from "./User";
import Footer from "./Footer";
import MenuBar from "./MenuBar";

function Users() {
    const [users, setUsers] = useState([]);
    const [hasError, setHasError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios.get("/api/users")
            .then((response) => {
                setUsers(response.data);
                setIsLoading(false);
            }).catch((error) => {
            setHasError(true);
            setIsLoading(false);
        });
    }, []);

    return (
        <React.Fragment>
            <MenuBar/>
            <main className="users-page">
                <h2>Användare</h2>
                <ul className="users">
                    {
                        isLoading ?
                            <div>Laddar...</div> :
                            hasError ?
                                <div>Något gick fel...</div> :
                                users.map((user) => {
                                    return <User key={user.id} userProp={user}/>
                                })
                    }
                </ul>
            </main>
            <Footer/>
        </React.Fragment>
    )
}

export default Users;