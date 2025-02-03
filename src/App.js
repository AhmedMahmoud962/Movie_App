import React from "react";
import Navbar from "./Components/Navbar";
import { Container } from "react-bootstrap";
import MoviesList from "./Components/MovieList";

function App() {
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
