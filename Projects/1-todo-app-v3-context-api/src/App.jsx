import AddToDo from "./components/AddToDo";
import AppName from "./components/AppName";
import "./App.css";
import ToDoItems from "./components/ToDoItems";
import { useState } from "react";
import WelcomeMsg from "./components/WelcomeMsg";
import TodoItemsContext from "./store/todo-items-store";

function App() {

  const initialTodoItems = [];
  const [todoItems, setTodoItems] = useState(initialTodoItems);
  // Below one is 1st class object, coz fun assigned to a variable.
  const addNewItem = (itemName, itemDate) => {
    // const newItem = {
    //   name: itemName,
    //   dueDate: itemDate,
    // }
    // setTodoItems([...todoItems, newItem]);

    // Updating state from Previous state
    // setTodoItems((currValue) => {
    //   const newToDoItems = [
    //     ...currValue,
    //     { name: itemName, dueDate: itemDate }
    //   ];
    //   return newToDoItems;
    // }) 
    // OR
    setTodoItems((currValue) =>
      [
        ...currValue,
        { name: itemName, dueDate: itemDate }
      ]
    )
  }

  const deleteItem = (toDoItem) => {
    // To delete item
    const newItemList = todoItems.filter((item) => item.name !== toDoItem);
    setTodoItems(newItemList);
  }

  return (
    // If todoItems contents changed then all elements under Provider will re-paint
    <TodoItemsContext.Provider value={
      {
        todoItems: todoItems,
        addNewItem,
        deleteItem: deleteItem,
      }
    }>
      <center className="todo-container">
        <AppName></AppName>
        <AddToDo></AddToDo>
        <WelcomeMsg></WelcomeMsg>
        <ToDoItems></ToDoItems>
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
