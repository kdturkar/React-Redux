import { createContext, useReducer, useCallback } from "react";


const DEFAULT_CONTEXT = {
  postList: [],
  addPost: () => { },
  deletePost: () => { }
}

export const PostCreateContext = createContext(DEFAULT_CONTEXT);

const postListReducer = (currentPostList, action) => {
  console.log(action)
  let newPostList = currentPostList;
  if (action.type === 'DELETE_POST') {
    newPostList = currentPostList.filter((item) => item.id !== action.payload.postId);
  } else if (action.type === 'ADD_POST') {
    newPostList = [action.payload, ...currentPostList];
  } else if (action.type === 'ADD_INITIAL_POST') {
    newPostList = action.payload.posts;
  }
  return newPostList;
}

const PostListProvider = ({ children }) => {

  const [postList, dispatchPost] = useReducer(postListReducer, []);

  const addPost = (post) => {
    console.log("addPost called");
    const addPostAction = {
      type: "ADD_POST",
      payload: post,
    }
    dispatchPost(addPostAction);
  }

  // const addInitialPost = (posts) => {
  //   dispatchPost({
  //     type: "ADD_INITIAL_POST",
  //     payload: {
  //       posts,
  //     }
  //   })
  // }

  // const arr = [56,87,21,982];
  // const sortedArr = useMemo(() => arr.sort(), [])
  // console.log(sortedArr);

  const deletePost = useCallback(
    (postId) => {
      const deletePostAction = {
        type: "DELETE_POST",
        payload: {
          postId: postId,
        },
      }
      dispatchPost(deletePostAction);
    },
    [dispatchPost],
  )


  return <PostCreateContext.Provider value={{
    postList: postList,
    addPost: addPost,
    deletePost: deletePost,
  }}>
    {children}
  </PostCreateContext.Provider>
}
export default PostListProvider;