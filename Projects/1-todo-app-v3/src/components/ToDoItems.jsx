import Item from "./Item";
const ToDoItems = ({ todoItems }) => {
  return (
    <div className="items-container">
      {todoItems.map((item) => (
        <Item key={item.name} todoName={item.name} todoDate={item.dueDate}></Item>
      ))}
    </div>
  );
};
export default ToDoItems;
