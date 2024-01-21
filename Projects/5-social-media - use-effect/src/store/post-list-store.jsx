import { createContext, useReducer, useCallback } from "react";


const DEFAULT_CONTEXT = {
  postList: [],
  addPost: () => { },
  addInitialPost: () => { },
  deletePost: () => { }
}

export const PostCreateContext = createContext(DEFAULT_CONTEXT);

const postListReducer = (currentPostList, action) => {
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

  const addPost = (userId, title, content, reaction, tags) => {
    console.log(`${userId} ${title} ${content} ${reaction} ${tags}`);
    const addPostAction = {
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        userId: userId,
        title: title,
        body: content,
        reactions: reaction,
        tags: tags
      }
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
    addInitialPost: addInitialPost,
    deletePost: deletePost,
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