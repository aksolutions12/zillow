import React, { useState } from "react";
import { useAuth } from "../../ContextApi/AuthContext";
import { useNavigate } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa";
import { GrGoogle } from "react-icons/gr";
import { AiFillApple } from "react-icons/ai";

const SignIn = ({ onClose }) => {
  const { login } = useAuth(); // Accessing login function from AuthContext
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    // Perform validation if needed
    if (!email || !password) {
      setError("Please enter email and password.");
      return;
    }

    // Simulating login process (replace with your actual login logic)
    if (email === "omar@gmail.com" && password === "12345") {
      login(); // Call the login function from AuthContext
      onClose();
      navigate("/");
    } else {
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="w-full mx-auto bg-white dark:bg-zinc-800 lg:max-w-md">
      <form className="space-y-4" onSubmit={handleSignIn}>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            className="mt-1 block w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-zinc-700 dark:text-zinc-300"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            className="mt-1 block w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 dark:bg-zinc-700 dark:text-zinc-300"
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        <div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 text-white font-semibold rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Sign in
          </button>
        </div>
        <div className="text-center">
          <a
            href="#"
            className="text-blue-600 hover:underline dark:text-blue-400"
          >
            Forgot your password?
          </a>
        </div>
      </form>
      <div className="mt-6">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-zinc-300 dark:border-zinc-600"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white dark:bg-zinc-800 text-zinc-500 dark:text-zinc-300">
              Or connect with:
            </span>
          </div>
        </div>
        <div className="mt-6 space-y-3 w-full">
          <button className="w-full py-2 px-4 border border-zinc-300 dark:border-zinc-600 rounded-md shadow-lg bg-white dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 flex items-center justify-center gap-5">
            <AiFillApple className="mr-2" color="black" />
            Continue with Apple
          </button>
          <button className="w-full py-2 px-4 border border-zinc-300 dark:border-zinc-600 rounded-md shadow-lg bg-white dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 flex items-center justify-center  gap-5">
            <FaFacebookF className="mr-2" color="blue" />
            Continue with Facebook
          </button>
          <button className="w-full py-2 px-4 border border-zinc-300 dark:border-zinc-600 rounded-md shadow-lg bg-white dark:bg-zinc-700 text-zinc-700 dark:text-zinc-300 flex items-center justify-center  gap-5">
            <GrGoogle className="mr-2" color="red" />
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
