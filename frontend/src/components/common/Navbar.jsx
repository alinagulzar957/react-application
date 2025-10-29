import { Link, NavLink, useNavigate } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav
      className={`flex justify-between items-center px-6 py-3 shadow-md ${
        theme === "dark" ? "bg-gray-800" : "bg-white"
      }`}
    >
      <Link to="/" className="text-2xl font-bold text-indigo-600 dark:text-indigo-300">
        Alina
      </Link>

      <div className="flex gap-6 items-center">
        {/* Links */}
        {!token && (
          <>
            <NavLink
              to="/login"
              className={({ isActive }) =>
                `font-medium hover:text-indigo-500 ${
                  isActive
                    ? "text-indigo-600 dark:text-indigo-300"
                    : "text-gray-700 dark:text-gray-300"
                }`
              }
            >
              Login
            </NavLink>
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                `font-medium hover:text-indigo-500 ${
                  isActive
                    ? "text-indigo-600 dark:text-indigo-300"
                    : "text-gray-700 dark:text-gray-300"
                }`
              }
            >
              Signup
            </NavLink>
          </>
        )}

        {token && (
          <>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `font-medium hover:text-indigo-500 ${
                  isActive
                    ? "text-indigo-600 dark:text-indigo-300"
                    : "text-gray-700 dark:text-gray-300"
                }`
              }
            >
              Dashboard
            </NavLink>
            <button
              onClick={handleLogout}
              className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
            >
              Logout
            </button>
          </>
        )}

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className="px-3 py-2 bg-gray-200 dark:bg-gray-700 rounded-md text-gray-800 dark:text-gray-200"
        >
          {theme === "light" ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
