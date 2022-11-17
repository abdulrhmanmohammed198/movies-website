import React from "react";
import { Container } from "react-bootstrap";
import MoviesList from "./Components/MoviesList";
import { NavBar } from "./Components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MovieDetails from "./Components/MovieDetails";

const App = () => {
  return (
    <div className="color-body font">
      <NavBar />
      <Container>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MoviesList />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
};

export default App;
