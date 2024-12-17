import React, { useState } from 'react';
import '../App.css'; // ייבוא קובץ עיצוב
import logo from '../assets/logo.png'; // ייבוא הלוגו

const SignUp = () => {
  // סטייטים לטיפול בשדות ההרשמה
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <img src={logo} alt="FortiTask Logo" className="signup-logo" />
        <h2>הרשמה ל-FortiTask</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>שם משתמש:</label>
            <input
              type="text"
              name="username"
              placeholder="הכנס שם משתמש"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>אימייל:</label>
            <input
              type="email"
              name="email"
              placeholder="הכנס אימייל"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label>סיסמה:</label>
            <input
              type="password"
              name="password"
              placeholder="הכנס סיסמה"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="signup-button">הרשמה</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
