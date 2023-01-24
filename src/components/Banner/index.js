import React from 'react'
import './index.css'

export default function Banner() {
    return (
        <>
            <section className="banner mb-2 mb-xl-5">
                <div className="banner-cont">
                    <div className="d-flex flex-column align-items-center align-items-xs-start">

                        <h2 className="banner-title m-0"><img src="./images/banner-icon.png" alt="bannerIcon" className='banner-icon'/>NOM-<span >NOM</span></h2>
                        <h3 className="banner-sub-title text-center">Discover the best food &amp; drinks in mumbai</h3>

                        <div className="search-cont d-flex align-items-center ">
                            <div className="location-cont py-1 px-2">
                                <img
                                    src="./images/location-icon.png"
                                    className="m-0"
                                    alt="location"
                                />
                                <select className="location-dropdown">
                                    <option>Mumbai</option>
                                    <option>Hyderabad</option>
                                    <option>Bangalore</option>
                                    <option>Pune</option>
                                    <option>Chennai</option>
                                </select>
                            </div>
                            <div className="input-cont py-1 px-2">
                                <img
                                    src="./images/search-icon.png"
                                    alt="search"
                                    className=""
                                />
                                <input
                                    type="text"
                                    placeholder="search for restaurant cuisine or dish"
                                    className="search-input"
                                />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </>
    )
}
