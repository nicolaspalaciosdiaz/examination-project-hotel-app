import React from 'react';
import "../css/User.css";

function User(props) {
    return <li className="user">
        <div>{props.userProp.firstName} {props.userProp.lastName}</div>
        { props.userProp.bookingList.map((booking) => {
                return <div key={booking.id}>
                    <div>{booking.price}</div>
                </div>
            })
        }
    </li>;
}

export default User;