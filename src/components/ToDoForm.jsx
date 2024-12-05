import React, { useState } from 'react'

export const ToDoForm = ({addTask}) => {
    const [task, setTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(task);
        setTask("");
    }


  return (
    <form className='todo-form' onSubmit={handleSubmit}>
        <input type="text" className='todo-input' placeholder='Add a task' value={task} onChange={(e) => setTask(e.target.value) }/>
        <button type='submit' className='todo-btn'>Add Task</button>
    </form>
  )
}
