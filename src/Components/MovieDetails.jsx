import React, { useEffect, useState } from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import './style.css'

const MovieDetails = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState([])

  // get movie details
  const getMovieDetails = async () => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=6a3a03b0fc3cbf98bd67aad57854a518&language=ar`,
      )
      setMovie(response.data)
    } catch (error) {
      console.error(error, 'Error getting movie details')
    }
  }

  useEffect(() => {
    getMovieDetails()
  }, [])

  if (!movie) {
    return <h2 className="text-center mt-5">Loading...</h2>
  }

  return (
    <>
      <Row className="justify-content-center">
        <Col md={12} sm={12} className="mt-4">
          <div className="card-details d-flex align-items-center">
            <img
              className="img-movie w-30"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.original_title}
            />
            <div className="justify-content-center text-center mx-auto">
              <p className="card-text-details border-bottom">
                اسم الفيلم : {movie.original_title}
              </p>
              <p className="card-text-details border-bottom">
                تاريخ الفيلم : {movie.release_date}
              </p>
              <p className="card-text-details border-bottom">
                عدد المقيمين : {movie.vote_count}
              </p>
              <p className="card-text-details border-bottom">
                التقييم : {movie.vote_average} ⭐
              </p>
              <p className="card-text-details border-bottom">
                نوع الفيلم :
                {movie.genres?.map((genre) => (
                  <span key={genre.id}> {genre.name} |</span>
                ))}
              </p>
            </div>
          </div>
        </Col>
      </Row>

      {/* Story of movie */}
      <Row className="justify-content-center">
        <Col md={12} sm={12} className="mt-4">
          <div className="card-details d-flex align-items-center">
            <div className="justify-content-center mx-auto">
              <h1>قصة الفيلم</h1>
              <p>{movie.overview || 'لا توجد قصة متاحة لهذا الفيلم.'}</p>
            </div>
          </div>
        </Col>
      </Row>
      {/* Homepage and watch movie button */}
      <Row className="justify-content-center">
        <Col md={12} sm={12} className="mt-4 mb-4">
          <div className="d-flex align-items-center">
            <div className="justify-content-center text-center mx-auto">
              <Link to="/" className="btn btn-primary me-1">
                الصفحة الرئيسية
              </Link>
              {movie.homepage && (
                <Link to={movie.homepage} rel="noopener noreferrer">
                  <button type="button" className="btn btn-primary me-1">
                    مشاهدة الفيلم
                  </button>
                </Link>
              )}
            </div>
          </div>
        </Col>
      </Row>
    </>
  )
}

export default MovieDetails
