import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Movie from "../components/Movie";
import { getMovies } from "../slice/moviesSlice";
import { Container, Row } from "react-bootstrap";
import Loading from "../components/Loading";

const Movies = () => {
  const dispatch = useDispatch();
  const { movies, loading } = useSelector((state) => state.movies);

  // to get Movies on every Change
  useEffect(() => {
    dispatch(getMovies());
  }, []);

  // Check if Loading true
  if (loading) {
    return <Loading />
  }
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
