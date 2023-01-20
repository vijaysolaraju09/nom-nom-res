import axios from 'axios';
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useLocation, useParams } from 'react-router-dom';
import './index.css'
import { FaStar } from 'react-icons/fa'
import { BiDish } from 'react-icons/bi'

import { Tabs, Tab, TabContent } from "react-bootstrap";

import { restaurants } from '../data';
const ResDetails = () => {
    // const [title, setTitle ] = useState()
    // const [imgUrl, setImgUrl ] = useState()
    // const [phone, setPhone ] = useState()
    // const [resData, setResData ] = useState({title:'Res Name',})
    const { _id } = useParams();
    // console.log(_id)
    const res = restaurants.filter((item) => {
        return item._id == _id;
    });
    console.log("Res===>", res);

    const { name: title, food_photos: imgUrl, phone_number: phone, address, weighted_rating_value: rating, cuisines: dishes, delivery: delivery_time, local_hours } = res[0];

    useEffect(() => {
        // setTitle(res[0]["name"])
        // setImgUrl(res[0]["food_photos"])
        // setPhone(res[0]["phone_number"])
    }, [res])


    return (
        <>
            <div className='res-details'>
                <div className='container'>
                    {/* <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imgUrl} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {phone}
                    </Card.Text>
                    <Card.Text>
                        {Object.values(address).join(" ")}
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card> */}
                    <div class=" p-5">

                        <article id="card" class="cards rounded-3">

                            <div className='d-flex border'>
                                <figure class="card-image d-flex">
                                    <img src={imgUrl} alt="" />
                                </figure>
                                <div className=''>
                                    <header class="cards-header m-2 mt-3 p-4 shadow">
                                        <h2>{title}</h2>

                                        <address>
                                            <span class="icon-pin" aria-hidden="true"></span>
                                            {Object.values(address).join(" ")}
                                        </address>

                                        <span>Average check: $100</span>
                                    </header>
                                    <div class="card-content p-2 ">


                                        <ul class="card-stats d-flex flex-row justify-content-around">
                                            <li className='d-flex align-items-center'>
                                                <FaStar fill='#faa744' className='review-icon me-2' />
                                                <strong className='me-2'>{parseFloat(rating).toFixed(2)}</strong>
                                                <p>Rating</p>
                                            </li>



                                            <li className='d-flex align-items-center'>
                                                <BiDish className='review-icon  me-2' />
                                                <strong className='me-2'>{dishes.length}</strong>
                                                <p>Dishes</p>
                                            </li>
                                            <button class="card-button">Book table</button>
                                        </ul>

                                    </div>
                                </div>
                            </div>

                            <div className='p-4'>
                                <h2>
                                    All Dishes
                                </h2>
                                <div>
                                    <div>
                                        {Object.values(dishes).join(", ")}
                                    </div>
                                </div>
                            </div>
                            <div className='m-2'>
                                <Tabs fill defaultActiveKey="dineIn" id="uncontrolled-tab-example" className='timings-tab'>
                                    <Tab
                                        eventKey="dineIn"
                                        title="Dine-In"
                                        mountOnEnter // <<<
                                        unmountOnExit={false} // <<<
                                    >
                                        <TabContent tabTitle="Dine-In" className='timings p-4'>
                                            <h2>
                                                Dinin Timings
                                            </h2>
                                            <div>
                                                <div className='d-flex'>
                                                    <div>
                                                        {Object.keys(local_hours.dine_in).map((days) => (
                                                            <span className='d-block'>{days}</span>
                                                        ))}
                                                    </div>
                                                    <div>

                                                        {Object.values(local_hours.dine_in).map((time) => (
                                                            <span className='d-block'>: {time}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </TabContent>
                                    </Tab>
                                    <Tab
                                        eventKey="operational"
                                        title="Operational"
                                        mountOnEnter // <<<
                                        unmountOnExit={false} // <<<
                                    >
                                        <TabContent tabTitle="Operational" className='timings p-4'>
                                            <h2>
                                                Operational Timings
                                            </h2>
                                            <div>
                                                <div className='d-flex'>
                                                    <div>
                                                        {Object.keys(local_hours.operational).map((days) => (
                                                            <span className='d-block'>{days}</span>
                                                        ))}
                                                    </div>
                                                    <div>

                                                        {Object.values(local_hours.operational).map((time) => (
                                                            <span className='d-block'>: {time}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </TabContent>
                                    </Tab>
                                    <Tab
                                        className='timings-tab'
                                        eventKey="profile"
                                        title="Pick-Up"
                                        mountOnEnter // <<<
                                        unmountOnExit={false} // <<<
                                    >
                                        <TabContent tabTitle="Pick-Up" className='timings p-4'>
                                            <h2>
                                                Pick Up Timings
                                            </h2>
                                            <div>
                                                <div className='d-flex'>
                                                    <div>
                                                        {Object.keys(local_hours.pickup).map((days) => (
                                                            <span className='d-block'>{days}</span>
                                                        ))}
                                                    </div>
                                                    <div>

                                                        {Object.values(local_hours.pickup).map((time) => (
                                                            <span className='d-block'>: {time}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </TabContent>
                                    </Tab>
                                    <Tab
                                        eventKey="delivery"
                                        title="Delivery"
                                        mountOnEnter // <<<
                                        unmountOnExit={false} // <<<
                                    >
                                        <TabContent tabTitle="Delivery" className='timings p-4'>
                                            <h2>
                                                Delivery Timings
                                            </h2>
                                            <div>
                                                <div className='d-flex'>
                                                    <div>
                                                        {Object.keys(local_hours.delivery).map((days) => (
                                                            <span className='d-block'>{days}</span>
                                                        ))}
                                                    </div>
                                                    <div>

                                                        {Object.values(local_hours.delivery).map((time) => (
                                                            <span className='d-block'>: {time}</span>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                        </TabContent>
                                    </Tab>
                                </Tabs>

                            </div>



                        </article>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ResDetails