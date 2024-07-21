import React from "react";
import "./TaskList.css";

// const TaskList = () => {
//     return (
//         <ul className="task-group">
//             <li>Watch Movie</li>
//             <li>Learn React</li>
//             <li>Play Cricket</li>
//         </ul>
//     )
// } 

const TaskList = (props) => {
    return (
        <ul className="task-group">
            {
                props.items.map((item) => {
                    return <li key={item.id}>{item.title}</li>
                })
            }
        </ul>
    )
} 

export default TaskList;