import React, { useState, useRef, useContext } from "react";
import { IoMdAddCircle } from "react-icons/io";
import { TodoItemsContext } from "../store/todo-items-store";

function AddToDo() {
  const toDoNameElement = useRef();
  const todoDateElement = useRef();
  const { addNewItem } = useContext(TodoItemsContext);

  const handleAddBtn = (e) => {
    e.preventDefault(); // Server ko data nahi bhejta, to ab item immediately gayab nahi hota
    addNewItem(toDoNameElement.current.value, todoDateElement.current.value);
    toDoNameElement.current.value = "";
    todoDateElement.current.value = "";
  };

  return (
    <div className="container">
      <form onSubmit={handleAddBtn}>
        <div className="row kd-row">
          <div className="col-4">
            <input
              type="text"
              ref={toDoNameElement}
              placeholder="Enter Todo here..."
            />
          </div>
          <div className="col-4">
            <input
              type="date"
              ref={todoDateElement}
            />
          </div>
          <div className="col-4">
            <button className="btn btn-success kd-btn">
              <IoMdAddCircle />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddToDo;
