import React, { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";

function AddToDo({ handleFetchData }) {
  let [todoName, setTodoName] = useState("");
  let [todoDate, setTodoDate] = useState("");

  const handleNameChange = (e) => {
    setTodoName(e.target.value);
  };

  const handleDateChange = (e) => {
    setTodoDate(e.target.value);
  };

  const handleAddBtn = (e) => {
    console.log(e);
    e.preventDefault(); // Server ko data nahi bhejta, to ab item immediately gayab nahi hota
    handleFetchData(todoName, todoDate);
    setTodoName("");
    setTodoDate("");
  };

  return (
    <div className="container">
      <form onSubmit={handleAddBtn}>
        <div className="row kd-row">
          <div className="col-4">
            <input
              type="text"
              value={todoName}
              onChange={(e) => handleNameChange(e)}
              placeholder="Enter Todo here..."
            />
          </div>
          <div className="col-4">
            <input
              type="date"
              value={todoDate}
              onChange={(e) => handleDateChange(e)}
            />
          </div>
          <div className="col-4">
            <button
              className="btn btn-success kd-btn"
            >
              <IoMdAddCircle />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default AddToDo;
