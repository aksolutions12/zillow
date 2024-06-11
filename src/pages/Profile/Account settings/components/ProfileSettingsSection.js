import React, { useState, useEffect } from "react";
import { FiArrowLeftCircle, FiX } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { TfiEmail } from "react-icons/tfi";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db, storage } from "../../../../Firebase/firebase";
import { sendEmailVerification, updatePassword } from "firebase/auth";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";

export default function ProfileSettingsSection() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [isNameModalOpen, setIsNameModalOpen] = useState(false);
  const [isScreenNameModalOpen, setIsScreenNameModalOpen] = useState(false);
  const [isVerifyEmailModalOpen, setIsVerifyEmailModalOpen] = useState(false);
  const [userDetails, setUserDetails] = useState(null);
  const [newFirstName, setNewFirstName] = useState("");
  const [newLastName, setNewLastName] = useState("");
  const [userId, setUserId] = useState("");
  const [newScreenName, setNewScreenName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState("success");
  const [emailVerified, setEmailVerified] = useState(false);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const [newPassword, setNewPassword] = useState("");

  const handleCreatePasswordClick = () => {
    setIsPasswordModalOpen(true); // Open the password modal
  };

  const handleApplyPassword = async () => {
    if (!newPassword) {
      console.error("New password is missing.");
      return;
    }

    try {
      setIsLoading(true);
      const user = auth.currentUser;
      if (user) {
        await updatePassword(user, newPassword);
        setSnackbarMessage("Password updated successfully!");
        setSnackbarSeverity("success");
      } else {
        console.error("No user is currently signed in.");
        setSnackbarMessage("Failed to update password.");
        setSnackbarSeverity("error");
      }
      handleCloseModal();
    } catch (error) {
      console.error("Error updating password:", error);
      setSnackbarMessage("Failed to update password.");
      setSnackbarSeverity("error");
    } finally {
      setIsLoading(false);
      setSnackbarOpen(true);
    }
  };

  const fetchUserData = async () => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUserId(user.uid);
        setEmailVerified(user.emailVerified);
        const docRef = doc(db, "Users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUserDetails(docSnap.data());

          setPhotoURL(docSnap.data().photoURL);
        } else {
          // If user document doesn't exist, create one with default values
          const userData = {
            firstName: "",
            lastName: "",
            screenName: "",
            email: user.email,
            photoURL: "",
          };
          await setDoc(doc(db, "Users", user.uid), userData);
          setUserDetails(userData);
          setPhotoURL("");
        }
      } else {
        console.log("User is not logged in");
      }
      setIsLoading(false);
    });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleSnackbarClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  // Event handler to handle Apply button click
  const handleApplyName = async () => {
    if (!userDetails || !userId) {
      console.error("User details or UID is missing.");
      return;
    }

    try {
      // Update the isLoading state to true
      setIsLoading(true);

      // Update the Firestore document with new values
      await setDoc(doc(db, "Users", userId), {
        ...userDetails,
        firstName: newFirstName,
        lastName: newLastName,
      });

      fetchUserData();

      // Close the modal
      handleCloseModal();
    } catch (error) {
      console.error("Error updating name:", error);
    } finally {
      // Reset the isLoading state to false regardless of success or failure
      setIsLoading(false);
    }
  };

  const handleApplyScreenName = async () => {
    if (!userDetails || !userId || !newScreenName) {
      console.error("User details, UID, or new screen name is missing.");
      return;
    }

    try {
      // Update the isLoading state to true
      setIsLoading(true);

      // Update the Firestore document with the new screen name
      await setDoc(doc(db, "Users", userId), {
        ...userDetails,
        screenName: newScreenName,
      });

      // Fetch user data again to reflect the changes
      fetchUserData();

      // Close the modal
      handleCloseModal();
    } catch (error) {
      console.error("Error updating screen name:", error);
    } finally {
      // Reset the isLoading state to false regardless of success or failure
      setIsLoading(false);
    }
  };

  const handleBackClick = () => {
    navigate(-1); // Navigate back to the previous page
  };

  const handleEditNameClick = () => {
    setIsNameModalOpen(true); // Open the name modal
  };

  const handleEditScreenNameClick = () => {
    setIsScreenNameModalOpen(true); // Open the screen name modal
  };

  const handleCloseModal = () => {
    setIsNameModalOpen(false); // Close the name modal
    setIsScreenNameModalOpen(false); // Close the screen name modal
    setIsVerifyEmailModalOpen(false); // Close the email verification modal
    setIsPasswordModalOpen(false);
  };

  const handleVerifyEmailModal = () => {
    setIsVerifyEmailModalOpen(true); // Open the email verification modal
  };

  const handleVerifyEmailClick = async () => {
    if (auth.currentUser) {
      try {
        await sendEmailVerification(auth.currentUser);
        setSnackbarMessage("Verification email sent!");
        setSnackbarSeverity("success");
        setSnackbarOpen(true);
        setIsVerifyEmailModalOpen(false);
      } catch (error) {
        console.error("Error sending email verification:", error);
        setSnackbarMessage("Failed to send verification email.");
        setSnackbarSeverity("error");
        setSnackbarOpen(true);
      }
    }
  };

  // Other functions remain unchanged...

  return (
    <div>
      {isLoading ? ( // Display loader while loading
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress />
        </Box>
      ) : (
        <>
          <div>
            <button
              onClick={handleBackClick}
              className="text-blue-600 dark:text-blue-400 mb-4 px-4 pt-4 flex items-center"
            >
              <FiArrowLeftCircle className="inline-block mr-2 " /> Back to Saved
              homes
            </button>
            <div className="bg-white dark:bg-zinc-800 w-full mx-auto p-4">
              <div className="border rounded-lg p-6 md:p-8">
                <h2 className="text-xl font-semibold mb-4">Personal Info</h2>
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row justify-between md:items-center">
                    <div className="flex-1 mb-4 md:mb-0">
                      <h3 className="font-medium">Name</h3>
                      <p className="text-sm text-zinc-600 dark:text-zinc-300">
                        Your first and last given names. Updates are reflected
                        across all Zillow experiences.
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      {userDetails && (
                        <span>
                          {userDetails.firstName} {userDetails.lastName}
                        </span>
                      )}
                      <a
                        href="#"
                        onClick={handleEditNameClick}
                        className="text-blue-600 font-bold"
                      >
                        Edit
                      </a>
                    </div>
                  </div>
                  <hr color="text-gray-300" />

                  {/* Edit Profile Name Modal */}
                  {isNameModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-zinc-800 bg-opacity-50">
                      <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg w-96">
                        <div className="flex justify-between items-center border-b border-zinc-200 dark:border-zinc-700 p-4">
                          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                            Edit name
                          </h2>
                          <button
                            onClick={handleCloseModal}
                            className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
                          >
                            <span className="sr-only">Close</span>
                            <FiX className="w-5 h-5" />
                          </button>
                        </div>
                        <div className="p-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label
                                htmlFor="first-name"
                                className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
                              >
                                First name
                              </label>
                              <input
                                type="text"
                                id="first-name"
                                className="mt-1 block w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-zinc-700 dark:text-zinc-300"
                                value={newFirstName}
                                onChange={(e) =>
                                  setNewFirstName(e.target.value)
                                }
                              />
                            </div>
                            <div>
                              <label
                                htmlFor="last-name"
                                className="block text-sm font-medium text-zinc-700 dark:text-zinc-300"
                              >
                                Last name
                              </label>
                              <input
                                type="text"
                                id="last-name"
                                className="mt-1 block w-full px-3 py-2 border border-zinc-300 dark:border-zinc-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm dark:bg-zinc-700 dark:text-zinc-300"
                                value={newLastName}
                                onChange={(e) => setNewLastName(e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="flex justify-end mt-4">
                            <button
                              onClick={handleCloseModal}
                              className="text-blue-600 hover:underline mr-4"
                            >
                              Cancel
                            </button>
                            <button
                              onClick={handleApplyName}
                              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                            >
                              Apply
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col md:flex-row justify-between md:items-center">
                    <div className="flex-1 mb-4 md:mb-0">
                      <h3 className="font-medium">Screen name</h3>
                    </div>
                    <div className="flex items-center space-x-2">
                      {userDetails && <span>{userDetails.screenName}</span>}
                      <a
                        href="#"
                        onClick={handleEditScreenNameClick}
                        className="text-blue-600 font-bold"
                      >
                        Edit
                      </a>
                    </div>
                  </div>
                  <hr color="text-gray-300" />

                  {/* Edit Screen Name Modal */}
                  {isScreenNameModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-zinc-800 bg-opacity-50">
                      <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg w-96 p-6">
                        <div className="flex justify-between items-center mb-4">
                          <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
                            Edit screen name
                          </h2>
                          <button
                            onClick={handleCloseModal}
                            className="text-zinc-900 dark:text-white"
                          >
                            <span className="sr-only">Close</span>
                            <FiX className="w-5 h-5" />
                          </button>
                        </div>
                        <hr className="border-zinc-300 dark:border-zinc-700 mb-4" />
                        <div className="mb-4">
                          <label
                            htmlFor="screen-name"
                            className="block text-zinc-700 dark:text-zinc-300 mb-2"
                          >
                            Screen name
                          </label>
                          <input
                            type="text"
                            id="screen-name"
                            className="w-full p-2 border rounded-lg bg-zinc-50 dark:bg-zinc-700 dark:text-white border-zinc-300 dark:border-zinc-600"
                            value={newScreenName}
                            onChange={(e) => setNewScreenName(e.target.value)}
                          />
                        </div>
                        <div className="flex justify-end space-x-4">
                          <button
                            onClick={handleCloseModal}
                            className="text-zinc-700 dark:text-zinc-300"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={handleApplyScreenName}
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                          >
                            Apply
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col md:flex-row justify-between md:items-center">
                    <div className="flex-1 mb-4 md:mb-0">
                      <h3 className="font-medium">Photo</h3>
                      <p className="text-sm text-zinc-600 dark:text-zinc-300">
                        Personalize your profile pic with a custom photo.
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      {photoURL ? ( // Check if photoURL is available
                        <img
                          src={photoURL}
                          alt="Profile"
                          className="w-32 h-32 rounded-full"
                        />
                      ) : (
                        <p className="text-sm text-zinc-600 dark:text-zinc-300">
                          No profile photo available.
                        </p>
                      )}
                      <Link to="/editphoto" className="text-blue-600 font-bold">
                        Edit
                      </Link>
                    </div>
                  </div>
                  <hr color="text-gray-300" />

                  <div className="flex flex-col md:flex-row justify-between md:items-center">
                    <div className="flex-1 mb-4 md:mb-0">
                      <h3 className="font-medium">Reviews</h3>
                      <p className="text-sm text-zinc-600 dark:text-zinc-300">
                        Manage the reviews you've written for professionals,
                        rentals, and more.
                      </p>
                    </div>
                    <a href="#" className="text-blue-600 font-bold">
                      Manage
                    </a>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-6 mt-6">
                <h2 className="text-xl font-semibold mb-4">
                  Sign in & Security
                </h2>
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row justify-between md:items-center">
                    <div className="flex-1 mb-4 md:mb-0">
                      <h3 className="font-medium">Email</h3>
                      <p className="text-sm text-zinc-600 dark:text-zinc-300 pb-2">
                        The email address associated with your account.
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      {userDetails && <span>{userDetails.email}</span>}
                      <span
                        className={`text-sm ${
                          emailVerified ? "text-green-500" : "text-red-500"
                        }`}
                      >
                        {emailVerified ? "verified" : "unverified"}
                      </span>
                      <a
                        href="#"
                        onClick={handleVerifyEmailModal}
                        className="text-blue-600 cursor-pointer"
                      >
                        Verify
                      </a>
                      <a
                        href="#"
                        onClick={handleVerifyEmailModal}
                        className="text-blue-600 cursor-pointer"
                      >
                        Edit
                      </a>
                    </div>
                  </div>

                  {/* Verify Email Modal */}
                  {isVerifyEmailModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-zinc-800 bg-opacity-50">
                      <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg w-96">
                        <div className="flex justify-between items-center p-4 border-b border-zinc-200 dark:border-zinc-700">
                          <h2 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                            Verify Account
                          </h2>
                          <button
                            onClick={handleCloseModal}
                            className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
                          >
                            <FiX className="w-6 h-6" />
                          </button>
                        </div>
                        <div className="flex flex-col items-center justify-center p-6 text-center">
                          <TfiEmail size={30} />
                          <p className="text-zinc-600 dark:text-zinc-300 mb-6">
                            To verify your email, select "Send verification
                            email" and then check your inbox.
                          </p>
                          <div className="flex justify-end space-x-4">
                            <button
                              onClick={handleCloseModal}
                              className="text-blue-600 dark:text-blue-400"
                            >
                              Cancel
                            </button>
                            <button
                              onClick={handleVerifyEmailClick}
                              className="bg-blue-600 text-white px-4 py-2 rounded-md"
                            >
                              Send verification email
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <hr color="text-gray-300" />

                  <div className="flex flex-col md:flex-row justify-between md:items-center">
                    <div className="flex-1 mb-4 md:mb-0">
                      <h3 className="font-medium">Password</h3>
                      <p className="text-sm text-zinc-600 dark:text-zinc-300">
                        Set a unique password to protect your account.
                      </p>
                    </div>
                    <a
                      href="#"
                      onClick={handleCreatePasswordClick}
                      className="text-blue-600 border border-blue-600 px-4 py-2 rounded"
                    >
                      Create password
                    </a>
                  </div>

                  {/* Password Modal */}
                  {isPasswordModalOpen && (
                    <div className="fixed inset-0 flex items-center justify-center bg-zinc-800 bg-opacity-50">
                      <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-lg w-96 p-6">
                        <div className="flex justify-between items-center mb-4">
                          <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
                            Create Password
                          </h2>
                          <button
                            onClick={handleCloseModal}
                            className="text-zinc-900 dark:text-white"
                          >
                            <span className="sr-only">Close</span>
                            <FiX className="w-5 h-5" />
                          </button>
                        </div>
                        <hr className="border-zinc-300 dark:border-zinc-700 mb-4" />
                        <div className="mb-4">
                          <label
                            htmlFor="new-password"
                            className="block text-zinc-700 dark:text-zinc-300 mb-2"
                          >
                            New Password
                          </label>
                          <input
                            type="password"
                            id="new-password"
                            className="w-full p-2 border rounded-lg bg-zinc-50 dark:bg-zinc-700 dark:text-white border-zinc-300 dark:border-zinc-600"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                          />
                        </div>
                        <div className="flex justify-end space-x-4">
                          <button
                            onClick={handleCloseModal}
                            className="text-zinc-700 dark:text-zinc-300"
                          >
                            Cancel
                          </button>
                          <button
                            onClick={handleApplyPassword}
                            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                          >
                            Update
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  <hr color="text-gray-300" />

                  <div className="flex flex-col md:flex-row justify-between md:items-center">
                    <div className="flex-1 mb-4 md:mb-0">
                      <h3 className="font-medium">2-Step Verification</h3>
                      <p className="text-sm text-zinc-600 dark:text-zinc-300">
                        Make your account extra secure. Along with your
                        password, you'll need to enter a code that we text to
                        your phone each time you sign in.
                      </p>
                    </div>
                    <a
                      href="#"
                      className="text-blue-600 border border-blue-600 px-4 py-2 rounded"
                    >
                      Enable
                    </a>
                  </div>
                  <hr color="text-gray-300" />

                  <div className="flex flex-col md:flex-row justify-between md:items-center">
                    <div className="flex-1 mb-4 md:mb-0">
                      <h3 className="font-medium">Google sign in</h3>
                      <p className="text-sm text-zinc-600 dark:text-zinc-300">
                        You've linked your Google account to Zillow and are
                        using it to sign in. You are signed in as
                        fakeonline76@gmail.com.
                      </p>
                    </div>
                    <a
                      href="#"
                      className="text-blue-600 border border-blue-600 px-4 py-2 rounded"
                    >
                      Unlink
                    </a>
                  </div>
                </div>
              </div>

              <div className="border rounded-lg p-6 mt-6">
                <h2 className="text-xl font-semibold mb-4">Manage account</h2>
                <div className="space-y-4">
                  <div className="flex flex-col md:flex-row justify-between md:items-center">
                    <div className="flex-1 mb-4 md:mb-0">
                      <h3 className="font-medium">Deactivate my account</h3>
                      <p className="text-sm text-zinc-600 dark:text-zinc-300">
                        This will shut down your account, but retain your
                        information. You won't be able to sign in again until
                        your account is reactivated.
                      </p>
                    </div>
                    <a href="#" className="text-blue-600 font-bold">
                      Deactivate account
                    </a>
                  </div>
                  <hr color="text-gray-300" />

                  <div className="flex flex-col md:flex-row justify-between md:items-center">
                    <div className="flex-1 mb-4 md:mb-0">
                      <h3 className="font-medium">Privacy & Cookies</h3>
                      <p className="text-sm text-zinc-600 dark:text-zinc-300">
                        Tools that allow you to see and manage your personal
                        undefined.
                      </p>
                    </div>
                    <a href="#" className="text-blue-600 font-bold">
                      Go to Privacy Portal
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Snackbar
            open={snackbarOpen}
            autoHideDuration={6000}
            onClose={handleSnackbarClose}
          >
            <MuiAlert
              onClose={handleSnackbarClose}
              severity={snackbarSeverity}
              sx={{ width: "100%" }}
            >
              {snackbarMessage}
            </MuiAlert>
          </Snackbar>
        </>
      )}
    </div>
  );
}
