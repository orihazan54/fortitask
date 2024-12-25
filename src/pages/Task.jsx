import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../styles/Tasks.css';

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date());

  const addTask = () => {
    if (!taskText) return;
    const newTask = { text: taskText, date: selectedDate, completed: false };
    setTasks([...tasks, newTask]);
    setTaskText('');
  };

  const toggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="tasks-container">
      <h2>Assignments</h2>
      <Calendar onChange={setSelectedDate} value={selectedDate} />
      <input
        type="text"
        placeholder="Enter task"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
      <ul className="task-list">
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? 'completed' : ''}>
            <span>{task.text}</span> - <span>{task.date.toDateString()}</span>
            <button onClick={() => toggleComplete(index)}>✔</button>
            <button onClick={() => deleteTask(index)}>🗑</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
