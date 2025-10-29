import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();
  const links = [
    { name: "Dashboard", path: "/dashboard" },
    { name: "Home", path: "/" },
    { name: "Login", path: "/login" },
  ];

  return (
    <aside className="bg-white dark:bg-gray-900 w-64 min-h-screen p-5 shadow-md">
      <h2 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400 mb-8">React Application</h2>
      <nav className="flex flex-col gap-3">
        {links.map(link => (
          <Link
            key={link.path}
            to={link.path}
            className={`p-2 rounded-md font-medium ${
              location.pathname === link.path
                ? "bg-indigo-500 text-white"
                : "text-gray-700 dark:text-gray-300 hover:bg-indigo-100 dark:hover:bg-gray-800"
            }`}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
