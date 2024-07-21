import React, { useState } from "react";
import "./NewTaskList.css";

let taskId = 101;

const NewTask = (props) => {
    let [userInput, setUserInput] = useState("");

    const addTaskHander = (event) => {
        event.preventDefault();
        const newTask = {
            id: taskId++,
            title: userInput
        }
        setUserInput("");
        props.onAddTask(newTask);
    }

    const textChangeHandler = event => {
        setUserInput(event.target.value);
    }

    return (
        <form className="taskForm" onSubmit={addTaskHander}>
            <label for="newTask">Enter New Task</label>
            <input type="text" 
            value={userInput} 
            placeholder="Enter New Task" 
            id="newTask" 
            onChange={textChangeHandler}
            />
            <button type="submit" className="btn">Add Task</button>
        </form>
    )
}

export default NewTask;