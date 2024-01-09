import { createContext, useReducer } from "react";

export const TodoItemsContext = createContext({
  // for autocomplete we use just str
  todoItems: [],
  addNewItem: () => { },
  deleteItem: () => { },
});

const todoItemReducer = (currentTodoItems, action) => {
  let newTodoItems = currentTodoItems;
  if (action.type === 'NEW_ITEM') {
    newTodoItems = [...currentTodoItems, { name: action.payload.itemName, dueDate: action.payload.itemDate },];
  } else if (action.type === 'DELETE_ITEM') {
    newTodoItems = currentTodoItems.filter((item) => item.name !== action.payload.itemName);
  }
  return newTodoItems;
}

const TodoItemsContextProvider = ({ children }) => {
  const [todoItems, dispatchTodoItems] = useReducer(todoItemReducer, []);
  const addNewItem = (itemName, itemDate) => {
    const newActionItem = {
      type: "NEW_ITEM",
      payload: {
        itemName,
        itemDate
      }
    }
    dispatchTodoItems(newActionItem);
  }
  const deleteItem = (todoItemName) => {
    const deleteActionItem = {
      type: "DELETE_ITEM",
      payload: {
        itemName: todoItemName,
      }
    }
    dispatchTodoItems(deleteActionItem);
  }
  return <TodoItemsContext.Provider value={
    {
      todoItems,
      addNewItem,
      deleteItem,
    }
  }>{children}</TodoItemsContext.Provider>
}
export default TodoItemsContextProvider;