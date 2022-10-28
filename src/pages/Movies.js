import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Movie from "../components/Movie";
import { getMovies } from "../slice/moviesSlice";
import { Container, Row } from "react-bootstrap";
const Movies = () => {
  const dispatch = useDispatch();
  const { movies } = useSelector((state) => state.movies);
  console.log(movies);
  useEffect(() => {
    dispatch(getMovies());
  });
  return (
    <div>
      <Container>
        <Row>
          {movies?.results?.map((movie, index) => {
            return <Movie key={index} {...movie} />;
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Movies;
