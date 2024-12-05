import React, { useState } from "react";
import { ToDoForm } from "./ToDoForm";
import { EditToDoForm } from "./EditToDoForm";
import { v4 as uuidv4 } from "uuid";
import { ToDo } from "./ToDo";

export const ToDoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTask = (task) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: task, completed: false, isEditing: false },
    ]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTask = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const editTask = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTodo = (task, id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
      )
    );
  };

  return (
    <div className="todo-wrapper">
      <h1>Simple ToDo App...</h1>
      <ToDoForm addTask={addTask} />
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditToDoForm
            key={todo.id}
            editTodo={editTodo}
            task={todo.task}
            taskID={todo.id}
          />
        ) : (
          <ToDo
            key={todo.id}
            task={todo.task}
            completed={todo.completed}
            toggleComplete={() => toggleComplete(todo.id)}
            deleteTask={() => deleteTask(todo.id)}
            editTask={() => editTask(todo.id)}
          />
        )
      )}
    </div>
  );
};
