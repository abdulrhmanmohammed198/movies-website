import { ALLMOVIES, moviesApi } from "../types/moviesType";
import axios from "axios";

export const getAllMovies = () => {
  return async (dispatch) => {
    const res = await axios.get(moviesApi);
    dispatch({
      type: ALLMOVIES,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};

export const searchMovies = (word) => {
  return async (dispatch) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=11a3759906bfafc67fa4bc01bf80eb47&query=${word}&language=en-US`
    );
    dispatch({
      type: ALLMOVIES,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};
export const getPage = (page) => {
  return async (dispatch) => {
    const res = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=11a3759906bfafc67fa4bc01bf80eb47&language=en-US&page=${page}`
    );
    dispatch({
      type: ALLMOVIES,
      data: res.data.results,
      pages: res.data.total_pages,
    });
  };
};
