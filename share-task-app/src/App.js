import { useState } from 'react';
import './App.css';
import NewTask from './components/NewTaskComponent/NewTask';
import TaskList from './components/TaskComponent/TaskList';

// const taskArray = [
//   {id : 101, title : "Watch Movie"},
//   {id : 102, title : "Play Cricket"},
//   {id : 103, title : "Learn React"},
//   {id : 104, title : "Learn SQL"},
//   {id : 105, title : "New Task.."}
// ];

function App() {

  const [taskArray, setTask] = useState([
    // {id : 101, title : "Watch Movie"},
    // {id : 102, title : "Play Cricket"},
  ]);

  const addNewTaskHandler = (newTask) => {
    // taskArray.push(newTask);
    // Re-render using state
    // setTask(taskArray.concat(newTask));

    // Better way to render
    setTask((prevTask) => {
      return prevTask.concat(newTask);
    });

  }

  return (
    <div className="task-wrapper">
      <h2>Task App</h2>
      {/* <ul>
        <li>Watch Movie</li>
        <li>Learn React</li>
        <li>Play Cricket</li>
      </ul> */}

      <NewTask onAddTask = {addNewTaskHandler}/>
      <TaskList items={taskArray}/>
    </div>
  );
}

export default App;
