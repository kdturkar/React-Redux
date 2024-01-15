import { React, useContext } from 'react'
import Post from './Post'
import { PostCreateContext } from '../store/post-list-store'

function PostList() {
  const { postList } = useContext(PostCreateContext)
  return <>
    {postList.map((post) => (<Post key={post.id} post={post} />))}
  </>
}

export default PostList