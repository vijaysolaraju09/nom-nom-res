import './index.css'
import axios from 'axios';
import { useEffect, useState } from 'react'
import { Row, Col, Container, Card, ListGroup } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import ResDetails from './ResDetails'
import { restaurants } from './data';
import { FaStar } from 'react-icons/fa'
import { BiDish } from 'react-icons/bi'


function Restaurants() {
  //const resUrl = "https://api.spoonacular.com/food/restaurants/search?cuisine=italian&distance=2&apiKey=72b6c06b05e54df4b0471c8bacbe6387"

  console.log(restaurants)
  const navigate = useNavigate();
  const [restaurantData, setRestaurantData] = useState();
  const [resId, setResId] = useState();
  // const fetchRestaurant = () => {
  //   axios.get(resUrl)
  //     .then((response) => {
  //       setRestaurantData(response.data.restaurants)
  //     })
  // }
  // useEffect(() => {
  //   fetchRestaurant()
  // }, [])


  return (
    <>
      <Container className='add-restaurants mx-auto'>
        <Row >

          {restaurants?.map((data) => (
            <div className="m-3 p-0 mx-auto border shadow rounded res-card" onClick={() => { navigate(`/restaurant-details/${data._id}`) }}>
              <img src={data.food_photos} style={{ height: '10rem', width: '100%' }}/>
              <div className='px-4 py-3'>
                <h4 className='mb-3'>{data.name}</h4>
                <hr className='mt-0'/>
                <div className='d-flex justify-content-between'>
                  <div className='d-flex'>
                    <FaStar fill='#faa744' className='review-icon me-1' />
                    <strong className=''>{parseFloat(data.weighted_rating_value).toFixed(2)}</strong>
                  </div>
                  <div className='d-flex'>
                    <strong className='me-1'>{data.aggregated_rating_count}</strong>
                    <p>Reviews</p>
                  </div>
                </div>
                <div className='d-flex justify-content-between'>
                  <p><span>{parseFloat(data.miles).toFixed(2)}</span> Mtrs</p>
                  <p className={data.is_open ? "text-bg-success px-1" : "text-bg-danger px-1"}>{data.is_open ? "Open" : "Closed"}</p>
                </div>
                <hr className='mt-0'/>
                <p>Call Us: <a className='' href=''>{data.phone_number}</a></p>
              </div>
            </div>


          ))}

          {/* {restaurants?.map((data) => (
            <Card style={{ width: '18rem' }} className="m-2 p-0" onClick={() => { navigate(`/restaurant-details/${data._id}`)}}>
              <Card.Img variant="top" src={data.food_photos} style={{ height: '10rem' }} />
              <Card.Body>
                <Card.Title> {data.name} </Card.Title>
                
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item >Call Us: <a className=''>{data.phone_number}</a></ListGroup.Item>
                <ListGroup.Item >Distance: {data.miles}</ListGroup.Item>
                <ListGroup.Item className={data.is_open ? "text-success" : "text-danger" }>{data.is_open ? "Open" : "Closed" }</ListGroup.Item>
                <ListGroup.Item className='d-flex align-items-center'>{parseFloat(data.weighted_rating_value).toFixed(2)}<FaStar fill='#ffb100'/>{data.aggregated_rating_count} Ratings</ListGroup.Item>
              </ListGroup>
              
            </Card>
          ))} */}






        </Row>
      </Container>
    </>
  )
}

export default Restaurants