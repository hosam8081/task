import React from "react";
import Post from "../components/Post";
import { useSelector } from "react-redux";
import Loading from "../components/Loading";

const Posts = () => {
  const { posts, loading } = useSelector((state) => state.posts);
  
  // Check Loading 
  if (loading) {
    return <Loading />;
  }
  
  return (
    <>
      {posts.map((post, index) => {
        return <Post key={index} {...post} />;
      })}
    </>
  );
};

export default Posts;
