import { useState } from "react";
import { useNavigate } from "react-router-dom";

type LoginProps = {
  setToken: (token: string) => void;
};

function Login({ setToken }: LoginProps) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [error, setError] = useState("");

  async function handleLogin() {
    setError("");
    const res = await fetch("http://54.196.61.196/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();

    console.log(data);

    if (data.success) {
      localStorage.setItem("token", data.token);
      setToken(data.token);
      navigate("/notes");
    } else {
      setError(data.message);
    }
  }

  return (
    <>
      <h1>Login</h1>
      <input
        placeholder="username..."
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="password..."
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <br />
      <br />
      {error && <p style={{ color: "red" }}>{error}</p>}

      New to Notes App? ---- 
      <span onClick={() => navigate("/register")}>Register</span>
    </>
  );
}

export default Login;
