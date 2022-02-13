import React, { useEffect, useState } from 'react';
import axios from "axios";
import User from "./User";

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get("/api/users")
            .then((response) => {
                setUsers(response.data);
            })
    }, [])

    return <div>
        <ul>
            { users.map((user) => <User key={user.id} userProp={user} />) }
        </ul>
    </div>;
}

export default Users;