import { useContext } from 'react'
import { MdDelete } from "react-icons/md";
import { PostCreateContext } from '../store/post-list-store';

const Post = ({ post }) => {
  const { deletePost } = useContext(PostCreateContext);
  return (
    <div className="card post-body">
      <div className="card-body">
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" onClick={() => deletePost(post.id)} style={{ cursor: "pointer" }}><MdDelete />
        </span>
        <h5 className="card-title">{post.title}</h5>
        <p className="card-text">{post.body}</p>
        {Array.isArray(post.tags) && post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary hashtag">
            {"#" + tag}
          </span>
        ))}
        <div className="alert alert-success reaction" role="alert">
          This blog is reacted by {post.reactions} peoples.
        </div>
      </div>
    </div>
  )
}

export default Post