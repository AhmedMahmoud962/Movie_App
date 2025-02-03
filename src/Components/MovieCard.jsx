import React from 'react'
import { Col } from 'react-bootstrap'
import poster from '../assets/2.jpg'
const MovieCard = () => {
  return (
    <Col xs="6" sm="6" md="4" lg="3" className="my-1">
      <div className="card">
        <img src={poster} className="card__image" alt="hu" />
        <div className="card__overlay">
          <div className="overlay__text text-center w-100 p-2">
            <p>Movie Name : test</p>
            <p>Movie Data : test</p>
            <p>Number of residents : test</p>
            <p>Movie Rate : test</p>
          </div>
        </div>
      </div>
    </Col>
  )
}

export default MovieCard
