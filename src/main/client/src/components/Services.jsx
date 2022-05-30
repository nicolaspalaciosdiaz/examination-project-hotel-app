import React, {useEffect, useState} from "react";
import singleRoom from "../images/singleroom.jpg"
import doubleRoom from "../images/doubleroom.jpg";
import deluxRoom from "../images/deluxroom.jpg";
import superiorRoom from "../images/superiorroom.jpg"
import superiorJuniorsuiteRoom from "../images/superiorjuniorsuite.jpg"
import MenuBar from "./MenuBar";
import Footer from "./Footer";
import "../css/Services.css";
import axios from "axios";

function Services() {
    const [services, setServices] = useState([]);
    const [hasError, setHasError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios.get("/api/service/getall")
            .then((response) => {
                setServices(response.data);
                setIsLoading(false);
            }).catch((error) => {
            setHasError(true);
            setIsLoading(false);
        });
    }, []);

    function bookService(service, userId) {
        const body =
            {
                userId: userId,
                serviceId: service.id,
                startDate: "2022-03-20",
                endDate: "2022-03-31",
                price: service.price,
                discount: 0,
                priceFinal: service.price,
                canceled: false

            }
        axios.post(`/api/bookings/addbookingtouser/${service.id}/${userId}`, body, {
            headers: {
                "x-access-token": "token-value"
            }
        }).then((response) => {
            console.log(response)

        }).catch((error) => {
            setHasError(true);

        });
    }

    return (
        <React.Fragment>
            <MenuBar/>
            <main className="services-page">
                <h2>Tjänster</h2>
                <ul className="services">
                    {
                        isLoading ?
                            <div>Laddar...</div> :
                            hasError ?
                                <div>Något gick fel...</div> :
                                services.map((service) => {
                                    return <li className="service" key={service.id} onClick={() => bookService(service, 3)}>
                                        <div>{service.serviceName}</div>
                                        <div>{service.price} kr</div>
                                    </li>
                                })
                    }


                    {/*<div>*/}
                    {/*    <h1>VÅRA RUM</h1>*/}
                    {/*    <p>*/}
                    {/*        Ett varmt välkomnande till Hotel Project. Vår personal finns tillgängliga dygnet runt för att ni*/}
                    {/*        ska*/}
                    {/*        kunna njuta av er vistelse. Vi har ett motto. Att göra er nöjda och glada, så har ni önskemål*/}
                    {/*        och*/}
                    {/*        kan vi uppfylla dom, så gör vi det.*/}
                    {/*    </p>*/}
                    {/*    <div className="hotel-room-container">*/}
                    {/*        <div>*/}
                    {/*            <h1>ENKELRUM</h1>*/}
                    {/*            <img className="room-single-room" src={singleRoom} alt="singleRoom"/>*/}
                    {/*        </div>*/}
                    {/*        <div>*/}
                    {/*            <h1>DUBBELRUM</h1>*/}
                    {/*            <img className="room-double-room" src={doubleRoom} alt="doubleRoom"/>*/}

                    {/*        </div>*/}
                    {/*        <div>*/}
                    {/*            <h1>DELUXRUM</h1>*/}
                    {/*            <img className="room-delux-room" src={deluxRoom} alt="juniorSuiteRoom"/>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="hotel-room-container-two">*/}
                    {/*        <div>*/}
                    {/*            <h1>SUPERIORRUM</h1>*/}
                    {/*            <img className="room-superior-room" src={superiorRoom} alt="deluxRoom"/>*/}

                    {/*        </div>*/}
                    {/*        <div>*/}
                    {/*            <h1>SUPERIORSUITE</h1>*/}
                    {/*            <img className="room-superior-suite-room" src={superiorJuniorsuiteRoom}*/}
                    {/*                 alt="superiorRoom"/>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<div className="service-footer">*/}
                </ul>
            </main>
            <Footer/>
        </React.Fragment>
    );
}

export default Services;