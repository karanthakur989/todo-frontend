import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  async function handleRegister() {
    const res = await fetch("http://35.172.226.94/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json()
    if (data.success) {
      navigate("/login");
    } else {
      setError(data.message)
    }
  }

  return (
    <>
      <h1>Register</h1>
      <input placeholder="Username" onChange={e => setUsername(e.target.value)} />
      <input
        type="password"
        placeholder="Password"
        onChange={e => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
      <br />
      <br />
      {error && <p style={{ color: "red" }}>{error}</p>}

      Already have an account? ---- 
      <span onClick={() => navigate("/login")}>Login</span>
    </>
  );
}

export default Register;
