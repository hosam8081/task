import React from "react";
import { useEffect } from "react";
import { useDispatch} from "react-redux";
import { getPosts } from "../slice/postsSlice";
import Form from "../components/Form";
import Posts from "../components/Posts";
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, []);

  return (
    <div>
      <Form />
      <Posts />
    </div>
  );  
};

export default Home;
