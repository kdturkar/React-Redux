import Item from "./Item";
const ToDoItems = ({ todoItems, onDeleteClick }) => {
  return (
    <div className="items-container">
      {todoItems.map((item) => (
        <Item key={item.name} deleteClick={onDeleteClick} todoName={item.name} todoDate={item.dueDate}></Item>
      ))}
    </div>
  );
};
export default ToDoItems;
