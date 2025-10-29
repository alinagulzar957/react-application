import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const token = localStorage.getItem("token");

  if (!token) {
    // User is not logged in → redirect to login
    return <Navigate to="/login" replace />;
  }

  // User is logged in → render children
  return children;
}
