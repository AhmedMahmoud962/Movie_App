import React from 'react'
import { Col } from 'react-bootstrap'
import poster from '../assets/2.jpg'
const MovieCard = ({ movie }) => {
  return (
    <Col xs="6" sm="6" md="4" lg="3" className="my-1">
      <div className="card">
        <img
          src={
            movie.poster_path
              ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
              : poster
          }
          className="card__image"
          alt={movie.original_title}
        />
        <div className="card__overlay">
          <div className="overlay__text text-center w-100 p-2">
            <p>اسم الفيلم : {movie.original_title}</p>
            <p>تاريخ النشر : {movie.release_date}</p>
            <p>عدد المقيمين : {movie.popularity} </p>
            <p>التقييم : {movie.vote_average.toFixed(1)} </p>
          </div>
        </div>
      </div>
    </Col>
  )
}

export default MovieCard
