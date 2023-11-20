function AddToDo() {
  return (
    <div className="container">
      <div class="row kd-row">
        <div class="col-4">
          <input type="text" placeholder="Enter Todo here..." />
        </div>
        <div class="col-4">
          <input type="date" />
        </div>
        <div class="col-4">
          <button type="button" class="btn btn-success kd-btn">Add</button>
        </div>
      </div>
    </div>
  )
}

export default AddToDo;