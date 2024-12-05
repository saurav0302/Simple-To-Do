import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";

export const ToDo = ({
  task,
  toggleComplete,
  completed,
  deleteTask,
  editTask,
}) => {
  return (
    <div className="todo">
      <p className={completed ? "completed" : ""} onClick={toggleComplete}>
        {task}
      </p>
      <div>
        <FontAwesomeIcon
          className="edit-icon"
          icon={faPenToSquare}
          onClick={editTask}
        />
        <FontAwesomeIcon
          className="delete-icon"
          icon={faTrash}
          onClick={deleteTask}
        />
      </div>
    </div>
  );
};
