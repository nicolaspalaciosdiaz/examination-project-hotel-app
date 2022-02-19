import React, { useEffect, useState } from 'react';
import axios from "axios";
import User from "./User";

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

    return <div>
        <ul>
            {
                isLoading ?
                <div>Laddar...</div> :
                hasError ?
                    <div>Något gick fel...</div> :
                    users.map((user) => {
                        return <User key={user.id} userProp={user} />
                    })
            }
        </ul>
    </div>;
}

export default Users;