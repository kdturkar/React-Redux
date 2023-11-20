function Item2() {
  let todoName = 'Buy Shoes';
  let todoDate = '11-12-2023';
  return (
    <div className="container">
      <div class="row kd-row">
        <div class="col-4">
          {todoName}
        </div>
        <div class="col-4">
          {todoDate}
        </div>
        <div class="col-4">
          <button type="button" class="btn btn-danger kd-btn">Delete</button>
        </div>
      </div>
    </div>
  )
}
export default Item2;