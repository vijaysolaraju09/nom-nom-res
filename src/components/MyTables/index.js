import React from 'react'
import './index.css'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { restaurants } from '../Restaurants/data';
import {FaMapMarkedAlt} from 'react-icons/fa'

function MyTables() {
  return (
    <>
      <div className='my-tables container'>
        <div className='d-flex flex-column flex-sm-row mx-auto shadow-lg w-75' style={{ height: "10rem" }}>
          <img src="../images/dining.png" alt="restaurant-image" />
          <div className='p-3 w-100  border'>

            <h4 className='text-center'>Restaurant Nmae</h4>
            <a className='shadow d-flex justify-content-center align-items-center rounded-3 text-decoration-none text-dark' style={{ height: "70%", background:"#d6d6d6" }} href={`http://maps.google.com/}`} ><FaMapMarkedAlt className='me-2'/> View on Map</a>


          </div>
        </div>
      </div>
    </>
  )
}

export default MyTables