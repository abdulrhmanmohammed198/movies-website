import React from "react";
import { Navbar, Nav, Form, Container } from "react-bootstrap";
import logo from "../images/logo.jpg";
import {  useDispatch } from "react-redux";
import { getAllMovies, searchMovies } from "../redux/actions/movieAction";

export const NavBar = () => {
  const onSearch = (word) => {
    search(word);
  };
  const dispatch = useDispatch();
  //to Search in api
  const search = async (word) => {
    if (word === "") {
      dispatch(getAllMovies());
    } else {
      dispatch(searchMovies(word));
    }
  };

  return (
    <Navbar
      variant="dark"
      expand="lg"
      className="nav d-flex justify-content-between sticky-top"
    >
      <Container className="mx-1 d-flex ">
        <Navbar.Brand href="/" className="d-flex  ml-5 ">
          <img alt="logo" src={logo} className="logo " />
          <div className="brand-color">Movies</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          ></Nav>
          <div className="d-flex col-lg-11">
            <Form.Control
              type="text"
              placeholder="Search.."
              className="me-2 search"
              onChange={(e) => onSearch(e.target.value)}
            />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
