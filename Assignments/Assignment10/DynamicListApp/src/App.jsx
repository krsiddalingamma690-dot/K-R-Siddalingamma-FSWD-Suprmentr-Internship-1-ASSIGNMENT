import React, { useState } from "react";

function App() {

  // state for tasks
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  // add task
  function addTask() {
    if (input === "") return;

    setTasks([...tasks, input]);
    setInput("");
  }

  // delete task
  function deleteTask(index) {
    const newTasks = tasks.filter((task, i) => i !== index);
    setTasks(newTasks);
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>

      <h1>Task List App</h1>

      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter task"
      />

      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default App;