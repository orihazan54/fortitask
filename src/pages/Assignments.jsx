import React, { useState, useEffect } from 'react';
import Sidebar from '../components/Sidebar';
import '../styles/Assignments.css';
import { Calendar } from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Assignments = () => {
  const [assignments, setAssignments] = useState(() => {
    const savedAssignments = localStorage.getItem('assignments');
    return savedAssignments ? JSON.parse(savedAssignments) : [];
  });
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [newAssignment, setNewAssignment] = useState('');
  const [error, setError] = useState('');

  // שמירת משימות ב-localStorage
  useEffect(() => {
    localStorage.setItem('assignments', JSON.stringify(assignments));
  }, [assignments]);

  const addAssignment = () => {
    if (newAssignment.trim() === '') {
      setError('Task name cannot be empty.');
      return;
    }
    setAssignments([
      ...assignments,
      { id: Date.now(), name: newAssignment, dueDate: selectedDate.toISOString(), completed: false },
    ]);
    setNewAssignment('');
    setError('');
  };

  const toggleComplete = (id) => {
    setAssignments(
      assignments.map((assignment) =>
        assignment.id === id ? { ...assignment, completed: !assignment.completed } : assignment
      )
    );
  };

  const deleteAssignment = (id) => {
    setAssignments(assignments.filter((assignment) => assignment.id !== id));
  };

  return (
    <div className="page-container">
      <Sidebar />
      <div className="page-content">
        <h1>Assignments</h1>
        <div className="calendar-container">
          <Calendar onChange={setSelectedDate} value={selectedDate} />
        </div>
        <div className="add-assignment">
          <input
            type="text"
            placeholder="Task Name"
            value={newAssignment}
            onChange={(e) => setNewAssignment(e.target.value)}
            className="assignment-input"
          />
          <button onClick={addAssignment} className="add-button">Add Task</button>
        </div>
        {error && <p className="error-message">{error}</p>}
        <ul className="assignment-list">
          {assignments.map((assignment) => (
            <li key={assignment.id} className={`assignment-item ${assignment.completed ? 'completed' : ''}`}>
              <span>{assignment.name} - Due: {new Date(assignment.dueDate).toLocaleDateString()}</span>
              <button onClick={() => toggleComplete(assignment.id)} className="complete-button">✔</button>
              <button onClick={() => deleteAssignment(assignment.id)} className="delete-button">Delete</button>
            </li>
          ))}
        </ul>
        {assignments.length === 0 && <p className="no-tasks">No tasks yet. Add your first task!</p>}
      </div>
    </div>
  );
};

export default Assignments;
