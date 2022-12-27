import { FaAngleRight } from "react-icons/fa"
import "./index.css";

const Popular = () => {
    return (
        <section className="container mb-2 mb-xs-5" >
            <div className="row mb-2">
                <h1 className="popular-title">
                    Popular localities in and around <span>Mumbai.</span>
                </h1>
            </div>
            <div className="row">
                <div className="col-xs-12 col-sm-6 col-lg-4 mb-3" >
                    <div className="popular-location-cont d-flex justify-content-between align-items-center">
                        <div>
                            <p className="location-name m-0 m-0">LowerParel</p>
                            <p className="location-count m-0 m-0">70 Places</p>
                        </div>
                        <FaAngleRight fill="#282828" />
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-lg-4 mb-3" >
                    <div className="popular-location-cont d-flex justify-content-between align-items-center">
                        <div>
                            <p className="location-name m-0">Powai</p>
                            <p className="location-count m-0">923 Places</p>
                        </div>
                        <FaAngleRight fill="#282828" />
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-lg-4 mb-3" >
                    <div className="popular-location-cont d-flex justify-content-between align-items-center">
                        <div>
                            <p className="location-name m-0">Malad West</p>
                            <p className="location-count m-0">70 Places</p>
                        </div>
                        <FaAngleRight fill="#282828" />
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-lg-4 mb-3" >
                    <div className="popular-location-cont d-flex justify-content-between align-items-center">
                        <div>
                            <p className="location-name m-0">Boriwali West</p>
                            <p className="location-count m-0">70 Places</p>
                        </div>
                        <FaAngleRight fill="#282828" />
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-lg-4 mb-3" >
                    <div className="popular-location-cont d-flex justify-content-between align-items-center">
                        <div>
                            <p className="location-name m-0">Bandra Kurla Complex</p>
                            <p className="location-count m-0">70 Places</p>
                        </div>
                        <FaAngleRight fill="#282828" />
                    </div>
                </div>
                
                <div className="col-xs-12 col-sm-6 col-lg-4 mb-3" >
                    <div className="popular-location-cont d-flex justify-content-between align-items-center">
                        <div>
                            <p className="location-name m-0">Vasai</p>
                            <p className="location-count m-0">70 Places</p>
                        </div>
                        <FaAngleRight fill="#282828" />
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-lg-4 mb-3" >
                    <div className="popular-location-cont d-flex justify-content-between align-items-center">
                        <div>
                            <p className="location-name m-0">Juhu</p>
                            <p className="location-count m-0">70 Places</p>
                        </div>
                        <FaAngleRight fill="#282828" />
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-lg-4 mb-3" >
                    <div className="popular-location-cont d-flex justify-content-between align-items-center">
                        <div>
                            <p className="location-name m-0">Girgaon chowpathy</p>
                            <p className="location-count m-0">70 Places</p>
                        </div>
                        <FaAngleRight fill="#282828" />
                    </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-lg-4 mb-3" >
                    <div className="popular-location-cont d-flex justify-content-between align-items-center">
                        <div>
                            <p className="location-name m-0">see more</p>
                        </div>
                        <FaAngleRight fill="#282828" />
                    </div>
                </div>
            </div>
        </section>
    );
};
export default Popular;