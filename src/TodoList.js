import React, { useState } from "react";

function TodoList() {
    const [ tasks , setTasks ] = useState([]);
    const [ newTask , setNewTask ] = useState("");

    const addTask = (e) => {
        e.preventDefault();
        if(newTask.trim !== ""){
            setTasks([...tasks, {id : Date.now(), task : newTask , completed : false}]);
            setNewTask("");
        }
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id));
    };

    const toggleComplete = (taskId) => {
        setTasks(tasks.map((task) => {
            if(task.id === taskId){
                task.completed = !task.completed;
            }
            return task;
        }));
    };
    return (
        <div>
            <h1>Todo List</h1>
            <form onSubmit={addTask}>
                <input type="text" 
                value={newTask} 
                onChange={(e) => setNewTask(e.target.value)} 
                placeholder="Enter new task" />
                <button type="submit">Add Task</button>
            </form>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}> 
                    <input type="checkbox" 
                    checked={task.completed} 
                    onChange={() => toggleComplete(task.id)} />
                    {task.task} 
                    <button onClick={() => deleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
                    