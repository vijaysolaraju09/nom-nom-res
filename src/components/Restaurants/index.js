import './index.css'
import axios from 'axios';
import { useEffect, useState } from 'react'
import { Row, Col, Container, Card, ListGroup } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import ResDetails from './ResDetails'
import { restaurants } from './data';
import {FaStar } from 'react-icons/fa'


function Restaurants() {
  //const resUrl = "https://api.spoonacular.com/food/restaurants/search?cuisine=italian&distance=2&apiKey=72b6c06b05e54df4b0471c8bacbe6387"
  
  console.log(restaurants)
  const navigate=useNavigate();
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
        {/* <Card style={{ width: '18rem' }} className="m-2 p-0" id="vijayId" onClick={showDetails}>
              <Card.Img variant="top" src="https://e7.pngegg.com/pngimages/716/758/png-clipart-graphics-restaurant-logo-restaurant-thumbnail.png" style={{ height: '10rem' }} />
              <Card.Body>
                <Card.Title> Restaurants </Card.Title>
                
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item >Call Us: <a className=''>0000000000</a></ListGroup.Item>
                <ListGroup.Item >Distance: 00</ListGroup.Item>
                <ListGroup.Item className={"text-success"}>{"Open"}</ListGroup.Item>
                <ListGroup.Item className='d-flex align-items-center'>5<FaStar fill='#ffb100'/>1000 Ratings</ListGroup.Item>
              </ListGroup>
              
            </Card> */}
          {restaurants?.map((data) => (
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
          ))}






        </Row>
      </Container>
    </>
  )
}

export default Restaurants