import { useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import DashboardPage from "./pages/Dashboard";
import LoginPage from "./pages/LoginPage";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage ? localStorage.getItem("token") : "";
    if (token) {
      navigate("/dashboard");
    } else {
      navigate("/login");
    }
  }, [navigate]);
  return (
    <div className="App">
      <Routes>
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<Navigate replace to="/login" />} />
      </Routes>
    </div>
  );
};

export default App;
