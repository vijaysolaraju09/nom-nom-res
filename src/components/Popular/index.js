import { FaAngleRight } from "react-icons/fa"
import "./index.css";

// const popularCont = [
//     {
//         "name": "LowerParel",
//         "count": "70 Places"
//     },
//     {
//         "name": "Powai",
//         "count": "923 Places"
//     },
//     {
//         "name": "Malad West",
//         "count": "70 Places"
//     },
//     {
//         "name": "Boriwali West",
//         "count": "70 Places"
//     },
//     {
//         "name": "Bandra Kurla Complex",
//         "count": "70 Places"
//     },
//     {
//         "name": "Vasai",
//         "count": "70 Places"
//     },
//     {
//         "name": "Juhu",
//         "count": "70 Places"
//     },
//     {
//         "name": "Girgaon chowpathy",
//         "count": "70 Places"
//     },
//     {
//         "name": "see more",
//         "count": ""
//     },
// ]


const Popular = (props) => {
    const popularCont = props.data
    return (
        <section className="container mb-2 mb-xl-5" >
            <div className="row mb-2">
                <h1 className="popular-title">
                    Popular localities in and around <span>Mumbai.</span>
                </h1>
            </div>
            <div className="row">
                {popularCont?.map((item) => (
                    <div className="col-xs-12 col-sm-6 col-lg-4 mb-3" key={item.name}>
                        <div className="popular-location-cont d-flex justify-content-between align-items-center">
                            <div>
                                <p className="location-name m-0 m-0">{item.name}</p>
                                <p className="location-count m-0 m-0">{item.count}</p>
                            </div>
                            <FaAngleRight fill="#282828" />
                        </div>
                    </div>
                ))}
                {/* <div className="col-xs-12 col-sm-6 col-lg-4 mb-3" >
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
                </div> */}
            </div>
        </section>
    );
};
export default Popular;