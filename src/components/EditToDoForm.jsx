import React, { useState } from "react";

export const EditToDoForm = ({ editTodo, task, taskID }) => {
  const [value, setValue] = useState(task);

  const handleSubmit = (e) => {
    e.preventDefault();
    editTodo(value, taskID);
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="todo-input"
        placeholder="Update Task"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="todo-btn">
        Update Task
      </button>
    </form>
  );
};
