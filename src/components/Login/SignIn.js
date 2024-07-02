import React, { useState } from "react";
import { useAuth } from "../../ContextApi/AuthContext";
import { useNavigate } from "react-router-dom";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const SignIn = ({ onClose }) => {
  const { login, googleLogin, facebookLogin } = useAuth(); // Accessing login, googleLogin, and facebookLogin functions from AuthContext
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [openSnackbar, setOpenSnackbar] = useState(false); // State for Snackbar
  const [snackbarMessage, setSnackbarMessage] = useState(""); // State for Snackbar message

  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    // Perform validation if needed
    if (!email || !password) {
      setError("Please enter email and password.");
      return;
    }

    try {
      await login(email, password); // Call the login function from AuthContext with email and password
      setSnackbarMessage("Login successfully!");
      setOpenSnackbar(true);
      console.log("Login Successfully");
      setTimeout(() => {
        onClose();
        navigate("/");
      }, 1500);
    } catch (error) {
      setError("Invalid email or password.");
      // Show error message in Snackbar
      setSnackbarMessage("Invalid email or password.");
      setOpenSnackbar(true);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await googleLogin(); // Use googleLogin function from AuthContext
      setSnackbarMessage("Login successfully!");
      setOpenSnackbar(true);
      setTimeout(() => {
        onClose();
        navigate("/");
      }, 1500);
    } catch (error) {
      setError("Google sign-in failed.");
      // Show error message in Snackbar
      setSnackbarMessage("Google sign-in failed.");
      setOpenSnackbar(true);
    }
  };

  const handleFacebookSignIn = async () => {
    try {
      await facebookLogin(); // Use facebookLogin function from AuthContext
      setSnackbarMessage("Login successfully!");
      setOpenSnackbar(true);
      setTimeout(() => {
        onClose();
        navigate("/");
      }, 1500);
    } catch (error) {
      setError("Facebook sign-in failed.");
      // Show error message in Snackbar
      setSnackbarMessage("Facebook sign-in failed.");
      setOpenSnackbar(true);
    }
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenSnackbar(false);
  };

  const action = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={handleCloseSnackbar}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  );

  return (
    <div className="w-full mx-auto bg-white dark:bg-zinc-800 lg:max-w-md">
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
        action={action}
      />
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
        <div className="mt-7 flex flex-col gap-2">
          <button className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60">
            <img
              src="https://www.svgrepo.com/show/511330/apple-173.svg"
              alt="Apple icon"
              className="h-[18px] w-[18px]"
            />
            Continue with Apple
          </button>

          <button
            onClick={handleGoogleSignIn}
            className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#c24242] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google icon"
              className="h-[18px] w-[18px]"
            />
            Continue with Google
          </button>

          <button
            onClick={handleFacebookSignIn}
            className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#3e6fa4] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60"
          >
            <img
              src="https://www.svgrepo.com/show/475647/facebook-color.svg"
              alt="Facebook icon"
              className="h-[18px] w-[18px]"
            />
            Continue with Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
