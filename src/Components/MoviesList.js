import React, { useState, useEffect } from "react";
import { Row } from "react-bootstrap";
import CardMovie from "./CardMovie";
import Paginate from "./Pagination";
import { useSelector, useDispatch } from "react-redux";
import { getAllMovies } from "../redux/actions/movieAction";

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllMovies());
  }, [dispatch]);

  const dataMovies = useSelector((state) => state.movies);

  useEffect(() => {
    setMovies(dataMovies);
  }, [dataMovies]);
  return (
    <Row className="mt-3">
      {movies.length >= 1 ? (
        movies.map((movie) => {
          return <CardMovie key={movie.id} movie={movie} />;
        })
      ) : (
        <h1 className="text-center my-5">No Movies to Show...</h1>
      )}

      {movies.length >= 1 ? <Paginate /> : null}
    </Row>
  );
};

export default MoviesList;
