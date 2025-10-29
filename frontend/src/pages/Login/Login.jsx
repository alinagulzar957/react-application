import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Fixed test account
    if (email === "admin@test.com" && password === "admin123") {
      localStorage.setItem("token", "mock-token");
      localStorage.setItem("user", JSON.stringify({ email }));
      navigate("/dashboard");
      return;
    }

    // Check local signup data
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) => u.email === email && u.password === password);

    if (user) {
      localStorage.setItem("token", "mock-token");
      localStorage.setItem("user", JSON.stringify(user));
      navigate("/dashboard");
    } else {
      setError("Invalid credentials or account doesn't exist.");
    }
  };

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <form
        onSubmit={handleLogin}
        className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-indigo-600 dark:text-indigo-300">
          Login
        </h2>

        {error && <p className="text-red-500 text-sm mb-3">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 mb-3 border rounded-md dark:bg-gray-700 dark:text-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 mb-4 border rounded-md dark:bg-gray-700 dark:text-white"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
        >
          Login
        </button>

        <p className="text-sm text-gray-600 dark:text-gray-400 mt-3 text-center">
           Test using admin@test.com / admin123 <br></br>Don't have an account?{" "}
          <a href="/signup" className="text-indigo-500 hover:underline">
            Signup
          </a>
        </p>
      </form>
    </div>
  );
}
