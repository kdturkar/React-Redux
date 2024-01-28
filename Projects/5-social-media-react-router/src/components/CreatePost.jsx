import { Form, redirect } from 'react-router-dom';

function CreatePost() {
  return (
    <Form className='create-post' method='POST'>

      <div className="mb-3">
        <label htmlFor="userId" className="form-label">UserId</label>
        <input type="text" name="userId" className="form-control" id="userId" placeholder='Enter you userId here...' />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">Post Title</label>
        <input type="text" name="title" className="form-control" id="title" />
      </div>

      <div className="mb-3">
        <label htmlFor="content" className="form-label">Post Content</label>
        <textarea type="text" name="content" rows={3} className="form-control" id="content" placeholder='Tell us more about it...' />
      </div>

      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">Number of reactions</label>
        <input type="text" name="reactions" className="form-control" id="reactions" placeholder='How many people reacted to this post...' />
      </div>

      <div className="mb-3">
        <label htmlFor="tags" className="form-label">Tags</label>
        <input type="text" name="tags" className="form-control" id="tags" placeholder='Please enter tags using space...' />
      </div>


      <button className="btn btn-primary">Post</button>
    </Form>
  )
}

export async function createPostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  console.log(postData)
  fetch('https://dummyjson.com/posts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
  return redirect("/")
}

export default CreatePost