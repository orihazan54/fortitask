import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Sidebar.css';

const Sidebar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  const role = user?.role;

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <div className="sidebar">
      <h3>{role === 'Teacher' ? 'Lecturer Menu' : 'Student Menu'}</h3>
      <ul>
        {role === 'Teacher' ? (
          <>
            <li>
              <Link to="/lecturer-dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/manage-courses">Manage Courses</Link>
            </li>
            <li>
              <Link to="/view-students">View Students</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/student-dashboard">Dashboard</Link>
            </li>
            <li>
              <Link to="/courses">My Courses</Link>
            </li>
            <li>
              <Link to="/assignments">Assignments</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          </>
        )}
      </ul>
      <button className="logout-button" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
