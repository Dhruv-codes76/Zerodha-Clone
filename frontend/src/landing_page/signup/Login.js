import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Link } from "react-router-dom";
function Login() {
  const [form, setForm] = useState({ username: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const API_URL = process.env.REACT_APP_API_URL;
  const DASHBOARD_URL = process.env.REACT_APP_DASHBOARD_URL;
      const res = await axios.post(`${API_URL}/login`, form);
  // Store token in cookie for cross-origin access
  Cookies.set("token", res.data.token, { path: "/", sameSite: "Lax" });
      setMessage("Login successful! Redirecting to dashboard...");
      setTimeout(() => {
        window.location.href = DASHBOARD_URL;
      }, 1200);
    } catch (err) {
      setMessage(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="container d-flex justify-content-center align-items-center min-vh-100">
      <div className="w-100" style={{ maxWidth: 420, background: '#fff', borderRadius: 16, boxShadow: '0 4px 24px rgba(0,0,0,0.08)', padding: '2.5rem 2rem' }}>
        <h2 className="text-center mb-4">Login to Zerodha</h2>
        <form onSubmit={handleSubmit} className="w-100">
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input type="text" name="username" value={form.username} onChange={handleChange} required className="form-control form-control-lg" placeholder="Enter your username" />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" name="password" value={form.password} onChange={handleChange} required className="form-control form-control-lg" placeholder="Enter your password" />
          </div>
          <button type="submit" className="btn btn-primary w-100 py-2 fs-5 mt-2">Login</button>
        </form>
        {message && <div className="alert alert-info mt-4 text-center">{message}</div>}
        <div className="mt-3 text-center">
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;