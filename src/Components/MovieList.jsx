import React from 'react'
import NoData from './NoData'
import Pagination from './Pagination'
import { Row } from 'react-bootstrap'
import MovieCard from './MovieCard'

const MoviesList = ({ movies, getPage, pageCount }) => {
  return (
    <>
      {/* <h1
        style={{
          color: 'black',
          textAlign: 'center',
          fontSize: '30px',
          marginTop: '20px',
        }}
      >
        The Movie List
      </h1> */}
      <Row className="mt-3 justify-content-center">
        {movies.length > 0 ? (
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <NoData />
        )}

        <Pagination getPage={getPage} pageCount={pageCount} />
      </Row>
    </>
  )
}

export default MoviesList
