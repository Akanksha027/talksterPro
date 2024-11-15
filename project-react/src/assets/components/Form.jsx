import React, { useState } from "react";
import axios from "axios";
import { useUser } from "../context/UserContext"; // If you're using context to manage user state
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { setUser } = useUser();
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    try {
      const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/users/login`, {
        username,
        password,
      });
      
      const { token, user } = response.data;
      localStorage.setItem("authToken", 'guptt_raaz'); 
      setUser(user);

      setSuccess("Login successful!");

      setTimeout(() => {
        navigate("/profile");
      }, 1500);
    } catch (error) {
      setError(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md bg-white p-10 rounded-3xl shadow-xl transition-all transform hover:scale-105">
        <h1 className="text-5xl font-bold text-center text-orange-500 mb-8">Login</h1>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        {success && <p className="text-green-500 text-center mb-4">{success}</p>}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-lg font-semibold text-gray-800 mb-2">
              Username
            </label>
            <input
              id="username"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-lg font-semibold text-gray-800 mb-2">
              Password
            </label>
            <input
              id="password"
              className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button
            className="w-full py-3 mt-4 text-lg font-semibold text-white bg-gradient-to-r from-orange-500 to-orange-400 rounded-xl shadow-lg transform transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
            type="submit"
          >
            Login
          </button>
        </form>

        <p className="mt-8 text-center text-gray-600">
          Don&apos;t have an account?{" "}
          <a href="/signup" className="text-orange-500 font-semibold hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
