import React, { useState } from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { auth, db } from "../../Firebase/firebase";
import { setDoc, doc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "../../ContextApi/AuthContext";
import { useNavigate } from "react-router-dom";

export default function NewAccount({ onClose }) {
  const { googleLogin, facebookLogin } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isProfessional, setIsProfessional] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [zip, setZip] = useState("");
  const [phoneNumber, setPhoneNumber] = useState(["", "", "", ""]);
  const [openSnackbar, setOpenSnackbar] = useState(false); // State for Snackbar
  const [snackbarMessage, setSnackbarMessage] = useState(""); // State for Snackbar message

  const navigate = useNavigate();

  const handleProfessionalCheck = () => {
    setIsProfessional(!isProfessional);
  };

  const handlePhoneNumberChange = (index, value) => {
    const newPhoneNumber = [...phoneNumber];
    newPhoneNumber[index] = value.replace(/\D/g, ""); // Remove non-numeric characters
    setPhoneNumber(newPhoneNumber);
  };

  const handleSubmit = async () => {
    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User created:", user);

      if (user) {
        const screenName = user.email.split("@")[0]; // Extract screen name from email
        await setDoc(doc(db, "Users", user.uid), {
          email: user.email,
          screenName: screenName, // Save the screen name
          isProfessional: isProfessional,
          firstName: firstName,
          lastName: lastName,
          zip: zip,
          phoneNumber: phoneNumber,
        });
      }

      // Show success message in Snackbar
      setSnackbarMessage("User registered successfully!");
      setOpenSnackbar(true);

      // Clear form fields
      setEmail("");
      setPassword("");
      setIsProfessional(false);
      setFirstName("");
      setLastName("");
      setZip("");
      setPhoneNumber(["", "", "", ""]);
    } catch (error) {
      // Handle errors

      console.error("Error signing up:", error.message);
      setSnackbarMessage("Error signing up: " + error.message);
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
        setOpenSnackbar(false); // Close snackbar
        // Navigate to home page after successful sign-in
        navigate("/");
      }, 1500);
    } catch (error) {
      console.error("Facebook sign-in failed:", error.message);
      // Show error message in Snackbar
      setSnackbarMessage("Facebook sign-in failed: " + error.message);
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
    <div className="w-full mx-auto sm:max-w-md">
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
        action={action}
      />
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-blue-500 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
      </div>
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          placeholder="Create password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 block w-full px-3 py-2 border border-blue-500 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
        />
        <ul className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
          <li>At least 8 characters</li>
          <li>Mix of letters and numbers</li>
          <li>At least 1 special character</li>
          <li>At least 1 lowercase letter and 1 uppercase letter</li>
        </ul>
      </div>
      <div className="mb-4">
        <label className="inline-flex items-center">
          <input
            type="checkbox"
            className="form-checkbox h-5 w-5 text-zinc-600 rounded-full"
            onChange={handleProfessionalCheck}
          />
          <span className="ml-2 text-sm text-zinc-700 dark:text-zinc-300">
            I am a landlord or industry professional
          </span>
        </label>
      </div>
      {isProfessional && (
        <div className="  bg-white dark:bg-zinc-800  ">
          <h2 className="text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100">
            Professional Information
          </h2>
          <div className="mb-4">
            <label className="block text-zinc-700 dark:text-zinc-300 mb-2">
              Professional type
            </label>
            <select className="w-full p-2.5 bg-zinc-100 dark:bg-zinc-700 border border-zinc-300 dark:border-zinc-600 rounded-lg">
              <option>Select your category</option>
              <option>Real Estate Agent/Broker</option>
              <option>Mortgage Lender</option>
              <option>Home Improvement Services</option>
              <option>Lanlord</option>
            </select>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-zinc-700 dark:text-zinc-300 mb-2">
                First name
              </label>
              <input
                type="text"
                placeholder="First name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full p-2.5 bg-zinc-100 dark:bg-zinc-700 border border-zinc-300 dark:border-zinc-600 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-zinc-700 dark:text-zinc-300 mb-2">
                Last name
              </label>
              <input
                type="text"
                placeholder="Last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full p-2.5 bg-zinc-100 dark:bg-zinc-700 border border-zinc-300 dark:border-zinc-600 rounded-lg"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-zinc-700 dark:text-zinc-300 mb-2">
              Zip/Postal
            </label>
            <input
              type="text"
              placeholder="Zip/Postal"
              value={zip}
              onChange={(e) => setZip(e.target.value)}
              className="w-full p-2.5 bg-zinc-100 dark:bg-zinc-700 border border-zinc-300 dark:border-zinc-600 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <label className="text-zinc-700 dark:text-zinc-300">
                Phone number
              </label>
              <label className="text-zinc-700 dark:text-zinc-300">Ext</label>
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[0, 1, 2, 3].map((index) => (
                <div key={index}>
                  <input
                    type="text"
                    placeholder="555"
                    value={phoneNumber[index]}
                    onChange={(e) =>
                      handlePhoneNumberChange(index, e.target.value)
                    }
                    className="w-full p-2.5 bg-zinc-100 dark:bg-zinc-700 border border-zinc-300 dark:border-zinc-600 rounded-lg"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <div className="mt-4">
        <button
          onClick={handleSubmit}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md shadow-sm  hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Submit
        </button>
      </div>
      <div className="text-center text-sm text-zinc-500 dark:text-zinc-400 mt-2">
        By submitting, I accept Zillow's{" "}
        <a href="#" className="text-blue-500 hover:underline">
          terms of use
        </a>
        .
      </div>
      <div className="my-4 border-t border-zinc-300"></div>
      <div className="text-center text-sm text-zinc-700 dark:text-zinc-300 mb-4">
        Or connect with:
      </div>
      <div class="mt-7 flex flex-col gap-2">
        <button class="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60">
          <img
            src="https://www.svgrepo.com/show/511330/apple-173.svg"
            alt="GitHub"
            class="h-[18px] w-[18px] "
          />
          Continue with Apple
        </button>

        <button
          onClick={handleGoogleSignIn}
          class="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#c24242] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <img
            src="https://www.svgrepo.com/show/475656/google-color.svg"
            alt="Google"
            class="h-[18px] w-[18px] "
          />
          Continue with Google
        </button>

        <button
          onClick={handleFacebookSignIn}
          class="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#3e6fa4] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <img
            src="https://www.svgrepo.com/show/475647/facebook-color.svg"
            alt="Google"
            class="h-[18px] w-[18px] "
          />
          Continue with Facebook
        </button>
      </div>
    </div>
  );
}
