import Login from "./pages/Login";
import Register from "./pages/Register";
import Notes from "./pages/Notes";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";

function App() {
  const [token, setToken] = useState<string | null>(
    localStorage.getItem("token")
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/register"
          element={token ? <Navigate to="/notes" replace /> : <Register />}
        />
        <Route
          path="/login"
          element={
            token ? (
              <Navigate to="/notes" replace />
            ) : (
              <Login setToken={setToken} />
            )
          }
        />
        <Route
          path="/notes"
          element={token ? <Notes setToken={setToken}/> : <Navigate to="/login" replace />}
        />
        <Route
          path="*"
          element={<Navigate to={token ? "/notes" : "/login"} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
