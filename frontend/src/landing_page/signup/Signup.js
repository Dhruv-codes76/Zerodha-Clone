
import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Signup() {
	const [form, setForm] = useState({ name: "", email: "", username: "", password: "", role: "user" });
	const [confirmPassword, setConfirmPassword] = useState("");
	const [message, setMessage] = useState("");

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleConfirmPasswordChange = (e) => {
		setConfirmPassword(e.target.value);
	};

	const validateForm = () => {
		if (!form.name || !form.email || !form.username || !form.password || !confirmPassword) {
			setMessage("Please fill in all fields.");
			return false;
		}
		if (form.password !== confirmPassword) {
			setMessage("Passwords do not match.");
			return false;
		}
		return true;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setMessage("");
		if (!validateForm()) return;
		try {
			const API_URL = process.env.REACT_APP_API_URL;
			const res = await axios.post(`${API_URL}/register`, form);
			setMessage(res.data.message || "Signup done!");
			// Redirect to dashboard after successful signup
			if (res.data.message && res.data.message.toLowerCase().includes("success")) {
				setTimeout(() => {
					window.location.href = process.env.REACT_APP_DASHBOARD_URL;
				}, 1200);
			}
		} catch (err) {
			if (err.response && err.response.data && err.response.data.message) {
				setMessage(`Registration failed: ${err.response.data.message}`);
			} else if (err.response && err.response.data && err.response.data.error) {
				setMessage(`Registration failed: ${err.response.data.error}`);
			} else {
				setMessage("Registration failed: Unknown error");
			}
		}
	};

	return (
		<div className="container d-flex justify-content-center align-items-center min-vh-100">
			<div className="w-100" style={{ maxWidth: 420, background: '#fff', borderRadius: 16, boxShadow: '0 4px 24px rgba(0,0,0,0.08)', padding: '2.5rem 2rem' }}>
				<h2 className="text-center mb-4">Create your Zerodha account</h2>
				<form onSubmit={handleSubmit} className="w-100">
					<div className="mb-3">
						<label className="form-label">Name</label>
						<input type="text" name="name" value={form.name} onChange={handleChange} required className="form-control form-control-lg" placeholder="Enter your name" />
					</div>
					<div className="mb-3">
						<label className="form-label">Email</label>
						<input type="email" name="email" value={form.email} onChange={handleChange} required className="form-control form-control-lg" placeholder="Enter your email" />
					</div>
					<div className="mb-3">
						<label className="form-label">Username</label>
						<input type="text" name="username" value={form.username} onChange={handleChange} required className="form-control form-control-lg" placeholder="Choose a username" />
					</div>
					<div className="mb-3">
						<label className="form-label">Password</label>
						<input type="password" name="password" value={form.password} onChange={handleChange} required className="form-control form-control-lg" placeholder="Create a password" />
					</div>
					<div className="mb-3">
						<label className="form-label">Confirm Password</label>
						<input type="password" name="confirmPassword" value={confirmPassword} onChange={handleConfirmPasswordChange} required className="form-control form-control-lg" placeholder="Confirm your password" />
					</div>
					<button type="submit" className="btn btn-primary w-100 py-2 fs-5 mt-2">Sign Up</button>
				</form>
				{message && <div className="alert alert-info mt-4 text-center">{message}</div>}
				<div className="mt-3 text-center">
					Already have an account? <Link to="/login">Login</Link>
				</div>
			</div>
		</div>
	);
}

export default Signup;
