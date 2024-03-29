function Item({ todoName, todoDate }) {
  return (
    <div className="container">
      <div className="row kd-row">
        <div className="col-4">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-4">
          <button type="button" className="btn btn-danger kd-btn">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
export default Item;
