import React from "react";
import Navbar from "./Components/Navbar";
import { Container } from "react-bootstrap";
import MoviesList from "./Components/MovieList";
import axios from "axios";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import MovieDetails from "./Components/MovieDetails";
function App() {
  const [movies, setMovies] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  // get all movies by using axios
  const getMovies = async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=6a3a03b0fc3cbf98bd67aad57854a518&language=ar"
    );
    setMovies(response.data.results);
    setPageCount(response.data.total_pages);
  };

  // get pages by using pagination
  const getPage = async (page) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=6a3a03b0fc3cbf98bd67aad57854a518&language=ar&page=${page}`
    );
    setMovies(response.data.results);
    setPageCount(response.data.total_pages);
  };

  // Search for movies
  const searchMovie = async (text) => {
    if (text === "") {
      getMovies();
    } else {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=6a3a03b0fc3cbf98bd67aad57854a518&query=${text}&language=ar`
      );
      setMovies(response.data.results);
      setPageCount(response.data.total_pages);
    }
  };

  // const getMovies = () => {
  //   axios
  //     .get("https://api.themoviedb.org/3/movie/popular?api_key=6a3a03b0fc3cbf98bd67aad57854a518&language=en-US")
  //     .then((response) => {
  //       console.log(response.data.results);
  //       setMovies(response.data.results);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <>
      <Navbar searchMovie={searchMovie} />
      <Container>
        <Routes>
          <Route
            path="/"
            element={
              <MoviesList
                movies={movies}
                getPage={getPage}
                pageCount={pageCount}
              />
            }
          />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
