import AddToDo from "./components/AddToDo";
import AppName from "./components/AppName";
import "./App.css";
import ToDoItems from "./components/ToDoItems";
import { useState } from "react";

function App() {

  const initialTodoItems = [
    // {
    //   name: "Buy Milk",
    //   dueDate: "02/11/2023",
    // },
    // {
    //   name: "Buy Chips",
    //   dueDate: "09/10/2023",
    // },
    // {
    //   name: "Buy Bread",
    //   dueDate: "10/10/2023",
    // }
  ];

  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const handleFetchData = (itemName, itemDate) => {
    const newItem = {
      name: itemName,
      dueDate: itemDate,
    }
    setTodoItems([...todoItems, newItem]);
  }

  return (
    <center className="todo-container">
      <AppName />
      <AddToDo handleFetchData={handleFetchData}></AddToDo>
      <ToDoItems todoItems={todoItems}></ToDoItems>
      {todoItems.length == 0 && <p>Enjoy your day</p>}
    </center>
  );
}

export default App;
