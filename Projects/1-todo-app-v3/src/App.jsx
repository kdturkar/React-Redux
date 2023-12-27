import AddToDo from "./components/AddToDo";
import AppName from "./components/AppName";
import "./App.css";
import ToDoItems from "./components/ToDoItems";
import { useState } from "react";
import WelcomeMsg from "./components/WelcomeMsg";

function App() {

  const initialTodoItems = [

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
