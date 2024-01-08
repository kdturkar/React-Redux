import { MdDelete } from "react-icons/md";

function Item({ todoName, todoDate, deleteClick }) {

  return (
    <div className="container">
      <div className="row kd-row">
        <div className="col-4">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-4">
          <button type="button" onClick={() => deleteClick(todoName)} className="btn btn-danger kd-btn">
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );  
}
export default Item;
