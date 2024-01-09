import { createContext } from "react";

const TodoItemsContext = createContext({
  // for autocomplete we use just str
  todoItems: [],
  addNewItem: () => { },
  deleteItem: () => { }
});
export default TodoItemsContext;