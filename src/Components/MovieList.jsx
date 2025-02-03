import React from 'react'
import { Row } from 'react-bootstrap'
import MovieCard from './MovieCard'
const MoviesList = () => {
  return (
    <Row className="mt-3">
      <h1 style={{ color: 'dark', textAlign: 'center', fontSize: '30px' }}>
        The Movie List
      </h1>
      <MovieCard />
      <MovieCard />
      <MovieCard />
      <MovieCard />
    </Row>
  )
}

export default MoviesList
