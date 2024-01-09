import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import TodoItemsContext from "../store/todo-items-store";

function Item({ todoName, todoDate }) {
  const { deleteItem } = useContext(TodoItemsContext)
  return (
    <div className="container">
      <div className="row kd-row">
        <div className="col-4">{todoName}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-4">
          <button type="button" onClick={() => deleteItem(todoName)} className="btn btn-danger kd-btn">
            <MdDelete />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Item;
