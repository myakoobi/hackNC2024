
import React, { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "user" && password === "web_dev") {
      alert("You have successfully logged in.");
      onLogin(username, "user@soemthing.com");
      window.location.reload();
    } else {
      setError(true);
    }
  };

  return (
    <div>
      <form id="login-form" onSubmit={handleLogin}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" id="login-form-submit">Login</button>
      </form>
      {error && <p id="login-error-msg" style={{ color: "red" }}>Invalid username or password.</p>}
    </div>
  );
}
