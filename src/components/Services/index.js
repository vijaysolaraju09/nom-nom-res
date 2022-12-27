import React from "react";
import "./index.css";


const RestaurantType = () => {
    return (
        <>
            <section className="container">
                <div className="row services-cont mt-4 mb-4">
                    
                        <div className="col-xs-12 col-md-6 col-lg-4 mb-3" >
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
                        </div>
                </div>
            </section>
        </>
    );
};
export default RestaurantType;