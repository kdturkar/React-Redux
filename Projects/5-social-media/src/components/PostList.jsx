import { React, useContext, useState } from 'react'
import Post from './Post'
import { PostCreateContext } from '../store/post-list-store'
import WelcomeScreen from './WelcomeScreen'

function PostList() {
  const { postList, addInitialPost } = useContext(PostCreateContext);
  const [dataFetch, setDataFetch] = useState(false);

  if (!dataFetch) {
    fetch('https://dummyjson.com/posts')
      .then((res) => res.json())
      .then((data) => {
        addInitialPost(data.posts);
      })
    setDataFetch(true)
  }

  return (<>
    {postList.length === 0 && (<WelcomeScreen />)}
    {postList.map((post) => (<Post key={post.id} post={post} />))}
  </>)
}

export default PostList