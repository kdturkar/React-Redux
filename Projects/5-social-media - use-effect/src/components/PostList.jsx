import { React, useContext, useEffect, useState } from 'react'
import Post from './Post'
import { PostCreateContext } from '../store/post-list-store'
import WelcomeScreen from './WelcomeScreen'
import LoadingSpinner from './LoadingSpinner';

function PostList() {
  const { postList, addInitialPost } = useContext(PostCreateContext);
  const [fetching, setFetching] = useState(false)
  // #Junior
  // useEffect(() => {
  //   setFetching(true);
  //   fetch('https://dummyjson.com/posts')
  //     .then((res) => res.json())
  //     .then((data) => {
  //       addInitialPost(data.posts);
  //       setFetching(false)
  //     }
  //   )
  //   return () => {
  //     console.log("Jab component marne ki kagaar pe honga tab return honga")
  //   }
  // }, [])

  // #Pro
  useEffect(() => {
    setFetching(true);
    const controller = new AbortController();
    const signal = controller.signal;
    fetch('https://dummyjson.com/posts', { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPost(data.posts);
        setFetching(false)
      }
      )
    return () => {
      console.log("Jab component marne ki kagaar pe honga tab return honga");
      controller.abort();
    }
  }, [])


  return (<>

    {fetching && <LoadingSpinner />}
    {!fetching && postList.length === 0 && (<WelcomeScreen />)}
    {!fetching && postList.map((post) => (<Post key={post.id} post={post} />))}
  </>)
}

export default PostList