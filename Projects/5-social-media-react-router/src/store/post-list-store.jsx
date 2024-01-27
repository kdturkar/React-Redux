import { createContext, useReducer, useCallback, useState, useEffect } from "react";


const DEFAULT_CONTEXT = {
  postList: [],
  fetching: false,
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
  const [fetching, setFetching] = useState(false);

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

  const addPost = (post) => {
    console.log("addPost called");
    const addPostAction = {
      type: "ADD_POST",
      payload: post,
    }
    dispatchPost(addPostAction);
  }

  const addInitialPost = (posts) => {
    dispatchPost({
      type: "ADD_INITIAL_POST",
      payload: {
        posts,
      }
    })
  }

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
    fetching: fetching,
  }}>
    {children}
  </PostCreateContext.Provider>
}
export default PostListProvider;


// const DEFAULT_POST_LIST = [{
//   id: 1,
//   userId: 'user-8',
//   title: "Vibes inside ISKCON Temple",
//   body: "Just got opportunity to go ISKCON temple, I'm very much fortunate to meet sadhus there.",
//   reactions: 3,
//   tags: ["spirituality", "mental_piece"]
// },
// {
//   id: 2,
//   userId: 'user-2',
//   title: "Diksha from Premanandji Maharaj",
//   body: "By Radha-Krishna grace enough fortunate, going to take guru diksha from Premanandji Maharaj.",
//   reactions: 9,
//   tags: ["spirituality", "mental_piece", "diksha"]
// }
// ]