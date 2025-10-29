import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup.jsx";
import Dashboard from "../pages/Dashboard/Dashboard";
import MainLayout from "../components/layout/MainLayout";
import ProtectedRoute from "../components/common/ProtectedRoute.jsx";

const AppRoutes = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Protected Route */}
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default AppRoutes;
