import { React, useContext, useEffect, useState } from 'react'
import Post from './Post'
import WelcomeScreen from './WelcomeScreen'
import { useLoaderData } from "react-router-dom";

function PostList() {
  const postList = useLoaderData();
  return (
    <>
      {postList.length === 0 && <WelcomeScreen />}
      {postList.map((post) => (<Post key={post.id} post={post} />))}
    </>
  )  
}

export const postLoader = () => {
  return fetch("https://dummyjson.com/posts")
    .then((res) => res.json())
    .then((data) => { return data.posts; });
};

export default PostList