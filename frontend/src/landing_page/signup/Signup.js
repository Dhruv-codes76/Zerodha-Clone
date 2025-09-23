import React, { useState } from "react";
import axios from "axios";

function Signup() {
		const [form, setForm] = useState({ name: "", email: "", username: "", password: "", role: "user" });
	const [message, setMessage] = useState("");

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const res = await axios.post("http://localhost:3002/register", form);
			setMessage(res.data.message || "Registered successfully!");
		} catch (err) {
			setMessage(err.response?.data?.message || "Registration failed");
		}
	};

		return (
			<div className="container p-5 mb-5">
				<h2>Sign Up</h2>
				<form onSubmit={handleSubmit} style={{ maxWidth: 400 }}>
					<div className="mb-3">
						<label>Name</label>
						<input type="text" name="name" value={form.name} onChange={handleChange} required className="form-control" />
					</div>
					<div className="mb-3">
						<label>Email</label>
						<input type="email" name="email" value={form.email} onChange={handleChange} required className="form-control" />
					</div>
					<div className="mb-3">
						<label>Username</label>
						<input type="text" name="username" value={form.username} onChange={handleChange} required className="form-control" />
					</div>
					<div className="mb-3">
						<label>Password</label>
						<input type="password" name="password" value={form.password} onChange={handleChange} required className="form-control" />
					</div>
					<div className="mb-3">
						<label>Role</label>
						<select name="role" value={form.role} onChange={handleChange} className="form-control">
							<option value="user">User</option>
							<option value="admin">Admin</option>
						</select>
					</div>
					<button type="submit" className="btn btn-primary">Sign Up</button>
				</form>
				{message && <div className="mt-3">{message}</div>}
			</div>
		);
}

export default Signup;
