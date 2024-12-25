import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../styles/SignUp.css";

const SignUp = () => {
  const [formData, setFormData] = useState({ username: "", email: "", password: "", role: "Student" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Submitting form:", formData); // Debug

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;
    if (!passwordRegex.test(formData.password)) {
      toast.error("Password must include at least 8 characters, an uppercase letter, a number, and a special character.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      console.log("Response status:", response.status); // Debug
      const data = await response.json();
      console.log("Response data:", data); // Debug

      if (response.status === 201) {
        toast.success("Sign-up successful!");
        navigate("/login");
      } else {
        toast.error(data.message || "Error signing up. Please try again.");
      }
    } catch (err) {
      console.error("Error during signup:", err); // Debug
      toast.error("Error signing up. Please try again.");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <select name="role" value={formData.role} onChange={handleChange} required>
            <option value="Student">Student</option>
            <option value="Teacher">Teacher</option>
          </select>
          <button type="submit">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
