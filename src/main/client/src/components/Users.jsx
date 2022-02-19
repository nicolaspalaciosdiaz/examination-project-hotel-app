import React, { useEffect, useState } from 'react';
import axios from "axios";
import User from "./User";

function Users() {
    const [users, setUsers] = useState([]);
    const [hasError, setHasError] = useState(false);
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get("/api/users")
            .then((response) => {
                console.log("response", response);
                setUsers(response.data);
                setLoading(false);
            }).catch(err => {
                setHasError(true);
                setLoading(false);
            });
        }, [])

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