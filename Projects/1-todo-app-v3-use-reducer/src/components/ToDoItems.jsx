import { useContext } from "react";
import Item from "./Item";
import TodoItemsContext from "../store/todo-items-store";
const ToDoItems = () => {
  const { todoItems, deleteItem } = useContext(TodoItemsContext);
  return (
    <div className="items-container">
      {todoItems.map((item) => (
        <Item
          key={item.name}
          todoName={item.name}
          todoDate={item.dueDate}></Item>
      ))}
    </div>
  );
};
export default ToDoItems;
