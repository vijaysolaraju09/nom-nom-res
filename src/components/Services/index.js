import React from "react";
import "./index.css";
// const servicesCont = [
//     {
//         "imgUrl": "./images/order-online.png",
//         "title": "Order Online",
//         "description": "stay home and order to your door step"
//     },
//     {
//         "imgUrl": "./images/dining.png",
//         "title": "Dining",
//         "description": "View the city’s favourite dining venues"
//     },
//     {
//         "imgUrl": "./images/night-life.png",
//         "title": "Nightlife and Clubs",
//         "description": "Explore the city’s top nightlife outlets"
//     },
// ]

function Services(props) {
    const servicesCont=props.data
    return (
        <>
            <section className="container mb-2 mb-xl-5">
                <div className="row services-cont ">

                    {/* <div className="col-xs-12 col-md-6 col-lg-4 mb-3" >
                            <img src="./images/order-online.png" alt="restaurant-services" className="services-image" />
                            <div className="services-content">
                                <h3 className="services-title m-0">Order Online</h3>
                                <p className="services-description m-0">stay home and order to your door step</p>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-6 col-lg-4 mb-3" >
                            <img src="./images/dining.png" alt="restaurant-services" className="services-image" />
                            <div className="services-content">
                                <h3 className="services-title m-0">Dining</h3>
                                <p className="services-description m-0">View the city’s favourite dining venues</p>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-6 col-lg-4 mb-3" >
                            <img src="./images/night-life.png" alt="restaurant-services" className="services-image" />
                            <div className="services-content">
                                <h3 className="services-title m-0">Nightlife and Clubs</h3>
                                <p className="services-description m-0">Explore the city’s top nightlife outlets</p>
                            </div>
                        </div> */}
                    {servicesCont.map((item) => (
                        <div className="col-xs-12 col-md-6 col-lg-4 mb-3" key={item.imgUrl}>
                            <img src={item.imgUrl} alt="restaurant-services" className="services-image" />
                            <div className="services-content">
                                <h3 className="services-title m-0">{item.title}</h3>
                                <p className="services-description m-0">{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};
export default Services;