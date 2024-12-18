import React, { useState } from 'react';

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API_URL}/api/users/signup`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        }
      );
  
      const data = await response.json();
      if (!response.ok) throw new Error(data.message);
  
      console.log('User registered:', data);
      alert(data.message); // הודעת הצלחה מהשרת
    } catch (err) {
      console.error('Error:', err.message);
      alert('Error signing up: ' + err.message);
    }
  };
  

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={onChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={onChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={onChange}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default SignUp;
