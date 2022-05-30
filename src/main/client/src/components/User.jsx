import React, {useEffect, useState} from 'react';
import "../css/User.css";
import axios from "axios";

function User(props) {
    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get("/api/service/getall")
            .then((response) => {
                setServices(response.data);
            }).catch((error) => {
            console.error(error)
        });
    }, []);

    return <li className="user">
        <div className="user-block name">
            {props.userProp.firstName} {props.userProp.lastName}
        </div>
        {props.userProp.bookingList.map((booking) => {

            const serviceName = services.map((service) => {
                if (service.id === booking.serviceId) {
                    return service.serviceName
                }
            })

            return <div className="user-block" key={booking.id}>
                <div>
                    <span className="heading">Bokat:</span>
                    <span className="info">{serviceName}</span>
                </div>
                <div>
                    <span className="heading">Datum:</span>
                    <span className="info">{booking.startDate} - {booking.endDate}</span>
                </div>
                <div>
                    <span className="heading">Summa:</span>
                    <span className="info">{booking.price} kr</span>
                </div>
            </div>
        })}
    </li>;
}

export default User;