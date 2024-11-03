
import React, { useState } from "react";

export default function Login({ onLogin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (name  && email ) {
      alert("You have successfully logged in.");
      onLogin(name, email);
      window.location.reload();
    } else {
      setError(true);
    }
  };

  return (
    <div>
      <form id="login-form" onSubmit={handleLogin}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit" id="login-form-submit">Login</button>
      </form>
      {error && <p id="login-error-msg" style={{ color: "red" }}>Invalid username or password.</p>}
    </div>
  );
}
