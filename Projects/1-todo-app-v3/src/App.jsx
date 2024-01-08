import AddToDo from "./components/AddToDo";
import AppName from "./components/AppName";
import "./App.css";
import ToDoItems from "./components/ToDoItems";
import { useState } from "react";
import WelcomeMsg from "./components/WelcomeMsg";

function App() {

  const initialTodoItems = [
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

  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const handleFetchData = (itemName, itemDate) => {
    const newItem = {
      name: itemName,
      dueDate: itemDate,
    }
    setTodoItems([...todoItems, newItem]);
  }

  const handleDeleteItem = (toDoItem) => {
    // To delete item
    const newItemList = todoItems.filter((item) => item.name !== toDoItem);
    setTodoItems(newItemList);
  }

  return (
    <center className="todo-container">
      <AppName />
      <AddToDo handleFetchData={handleFetchData}></AddToDo>
      {todoItems.length === 0 ? <WelcomeMsg></WelcomeMsg> : <ToDoItems todoItems={todoItems} onDeleteClick={handleDeleteItem}></ToDoItems>}
    </center>
  );
}

export default App;
