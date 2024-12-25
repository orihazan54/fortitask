import React from 'react';
import Sidebar from '../components/Sidebar';
import '../styles/Courses.css';

const Courses = () => {
  return (
    <div className="page-container">
      <Sidebar />
      <div className="page-content">
        <h1>My Courses</h1>
        <p>Here you can view all your registered courses.</p>
        <ul>
          <li>Course 1: Introduction to React</li>
          <li>Course 2: Advanced JavaScript</li>
          <li>Course 3: Web Development</li>
        </ul>
      </div>
    </div>
  );
};

export default Courses;
