import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authApi from "../../api/authApi"; // ✅ fixed path

export default function Signup() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await authApi.signup({ email, password });
      setMessage("✅ Signup successful! Redirecting...");
      setTimeout(() => navigate("/login"), 1500);
    } catch (error) {
      setMessage(`❌ ${error.response?.data?.detail || "Signup failed"}`);
    }
  };

  return (
    <div className="flex justify-center items-center h-[80vh]">
      <form
        onSubmit={handleSignup}
        className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-md w-96"
      >
        <h2 className="text-2xl font-bold mb-4 text-center text-indigo-600 dark:text-indigo-300">
          Signup
        </h2>

        {message && (
          <p className="text-sm text-center text-indigo-500 mb-3">{message}</p>
        )}

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
          Signup
        </button>

        <p className="text-sm text-gray-600 dark:text-gray-400 mt-3 text-center">
          Already have an account?{" "}
          <a href="/login" className="text-indigo-500 hover:underline">
            Login
          </a>
        </p>
      </form>
    </div>
  );
}
