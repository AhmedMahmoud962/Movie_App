import React from "react";
import Navbar from "./Components/Navbar";
import { Container } from "react-bootstrap";
import MoviesList from "./Components/MovieList";
import axios from "axios";
import { useEffect, useState } from "react";
function App() {
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const respose = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=6a3a03b0fc3cbf98bd67aad57854a518&language=en-US"
    );
    setMovies(respose.data.results);
    console.log(movies);
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <>
      <Navbar />
      <Container>
        <MoviesList />
      </Container>
    </>
  );
}

export default App;
