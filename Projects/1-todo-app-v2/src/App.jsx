import AddToDo from "./components/AddToDo";
import AppName from "./components/AppName";
import "./App.css";
import ToDoItems from "./components/ToDoItems";

function App() {
  const todoItems = [
    {
      name: "Buy Milk",
      dueDate: "02/11/2023",
    },
    {
      name: "Buy Chips",
      dueDate: "09/10/2023",
    },
    {
      name: "Buy Bread",
      dueDate: "10/10/2023",
    }
  ];
  return (
    <center className="todo-container">
      <AppName />
      <AddToDo />
      <ToDoItems todoItems = {todoItems}></ToDoItems>
    </center>
  );
}

export default App;
