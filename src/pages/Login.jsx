import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", name: "" });

  const handleLogin = () => {
    login(form);
    navigate("/profile");
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Your Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />
      <input
        type="email"
        placeholder="Your Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />
      <button onClick={handleLogin} style={{ width: "100%", padding: "12px", background: "#00b894", color: "white", border: "none", borderRadius: "8px" }}>
        Login
      </button>
    </div>
  );
}

export default Login;
