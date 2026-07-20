import React from 'react';
import styles from './TodoList.module.css';

const TodoList = () => {
    const [task, setTask] = React.useState("");
    const [tasks, setTasks] = React.useState([]);

    console.log("tasks", task);

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Todo List</h2>
            <div className={styles.inputContainer}>
             <input
              type="text"
              placeholder="Add a new task"
              className={styles.input}
              value={task}
              onChange={(e) => setTask(e.target.value)}
              />
             {/* <button className={styles.button} onClick={addTask}>Add</button> */}
             <button
                className={styles.button}
                onClick={() => {
                    if (task.trim() === "") return;

                    setTasks([...tasks, task]);
                    setTask("");
                }}
                >
                Add
            </button>
            </div>
        <ul className={styles.taskList}>
            {tasks.map((taskItem, index) => (
                <li key={index} className={styles.taskItem}>
                    {taskItem}
                </li>
            ))}
        </ul>
        </div>
    );
};

export default TodoList;