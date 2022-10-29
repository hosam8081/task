import React from "react";
import { useEffect } from "react";
import { useDispatch} from "react-redux";
import { getPosts } from "../slice/postsSlice";
import { Container } from "react-bootstrap";
import CreatePost from "../components/CreatePost";
import Posts from "../components/Posts";
const Home = () => {
  const dispatch = useDispatch();

  // to get posts on every Change
  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <Container className="hero p-5">
      <CreatePost />
      <Posts />
    </Container>
  );  
};

export default Home;
