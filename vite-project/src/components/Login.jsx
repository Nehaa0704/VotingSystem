import React, { useState } from "react";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = () => {
    if (!username.trim()) {
      setMessage("Please enter your name.");
      return;
    }

    const votedUsers = JSON.parse(localStorage.getItem("votedUsers")) || {};
    if (votedUsers[username]) {
      setMessage("❌ You have already voted.");
    } else {
      localStorage.setItem("currentUser", username);
      onLogin(username);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "40px" }}>
      <h2>🔐 Login to Vote</h2>
      <input
        type="text"
        placeholder="Enter your name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{ padding: "10px", fontSize: "16px" }}
      />
      <br /><br />
      <button onClick={handleLogin} style={{ padding: "10px 20px" }}>
        Login
      </button>
      <p style={{ color: "red" }}>{message}</p>
    </div>
  );
};

export default Login;
