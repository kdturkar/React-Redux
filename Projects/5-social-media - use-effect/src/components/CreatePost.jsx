import { useContext, useRef } from 'react'
import { PostCreateContext } from '../store/post-list-store';

function CreatePost() {

  const { addPost } = useContext(PostCreateContext);

  const userIdElement = useRef();
  const titleElement = useRef();
  const contentElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = userIdElement.current.value;
    const title = titleElement.current.value;
    const content = contentElement.current.value;
    const reaction = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(" ");

    userIdElement.current.value = "";
    titleElement.current.value = "";
    contentElement.current.value = "";
    reactionsElement.current.value = "";
    tagsElement.current.value = "";

    addPost(userId, title, content, reaction, tags);
  }

  return (
    <form className='create-post' onSubmit={(e) => handleSubmit(e)}>

      <div className="mb-3">
        <label htmlFor="userId" className="form-label">UserId</label>
        <input type="text" ref={userIdElement} className="form-control" id="userId" placeholder='Enter you userId here...' />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">Post Title</label>
        <input type="text" ref={titleElement} className="form-control" id="title" />
      </div>

      <div className="mb-3">
        <label htmlFor="content" className="form-label">Post Content</label>
        <textarea type="text" ref={contentElement} rows={3} className="form-control" id="content" placeholder='Tell us more about it...' />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">Number of reactions</label>
        <input type="text" ref={reactionsElement} className="form-control" id="reactions" placeholder='How many people reacted to this post...' />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">Tags</label>
        <input type="text" ref={tagsElement} className="form-control" id="tags" placeholder='Please enter tags using space...' />
      </div>


      <button className="btn btn-primary">Post</button>
    </form>
  )
}

export default CreatePost