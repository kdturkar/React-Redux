import React, { useState } from "react";

function AddToDo({ handleFetchData }) {

  let [todoName, setTodoName] = useState("");
  let [todoDate, setTodoDate] = useState("");

  const handleNameChange = (e) => {
    setTodoName(e.target.value);
  }

  const handleDateChange = (e) => {
    setTodoDate(e.target.value);
  }

  const handleAddBtn = () => {
    handleFetchData(todoName, todoDate);
    setTodoName("");
    setTodoDate("");
  }

  return (
    <div className="container">
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
          <input type="date" value={todoDate} onChange={(e) => handleDateChange(e)} />
        </div>
        <div className="col-4">
          <button
            type="button"
            onClick={() => handleAddBtn()}
            className="btn btn-success kd-btn"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddToDo;
