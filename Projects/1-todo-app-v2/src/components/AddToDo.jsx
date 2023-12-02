function AddToDo() {
  return (
    <div className="container">
      <div className="row kd-row">
        <div className="col-4">
          <input type="text" placeholder="Enter Todo here..." />
        </div>
        <div className="col-4">
          <input type="date" />
        </div>
        <div className="col-4">
          <button type="button" className="btn btn-success kd-btn">Add</button>
        </div>
      </div>
    </div>
  )
}

export default AddToDo;