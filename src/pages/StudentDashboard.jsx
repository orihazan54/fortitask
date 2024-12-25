import React from "react";
import Sidebar from "../components/Sidebar";
import "../styles/StudentDashboard.css";

const StudentDashboard = () => {
  const user = JSON.parse(localStorage.getItem("user")) || { username: "Student" };

  const assignments = JSON.parse(localStorage.getItem("assignments")) || [];

  return (
    <div className="page-container">
      <Sidebar />
      <div className="page-content">
        <h1>Welcome, {user.username}!</h1>
        <p>Here you can manage your assignments, courses, and more.</p>
        <h2>My Assignments</h2>
        {assignments.length > 0 ? (
          <ul>
            {assignments.map((assignment) => (
              <li key={assignment.id}>
                {assignment.name} - Due: {new Date(assignment.dueDate).toLocaleDateString()}
              </li>
            ))}
          </ul>
        ) : (
          <p>No assignments yet. Check back later!</p>
        )}
      </div>
    </div>
  );
};

export default StudentDashboard;
