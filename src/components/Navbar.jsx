import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

function Navbar() {
  const navigate = useNavigate();

  // קבלת נתוני המשתמש מ-localStorage
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('user'); // מחיקת נתוני המשתמש
    navigate('/login'); // ניתוב לדף התחברות
  };

  return (
    <nav className="navbar">
      <h2>FortiTask</h2>
      <div className="navbar-links">
        {/* אם המשתמש מחובר */}
        {user ? (
          <>
            <Link to="/">Home</Link>
            {user.role === 'Student' && <Link to="/student-dashboard">Student Dashboard</Link>}
            {user.role === 'Teacher' && <Link to="/lecturer-dashboard">Lecturer Dashboard</Link>}
            <Link to="/profile">Profile</Link>
            <button onClick={handleLogout} className="logout-button">Logout</button>
          </>
        ) : (
          // אם המשתמש לא מחובר
          <>
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Sign Up</Link>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
