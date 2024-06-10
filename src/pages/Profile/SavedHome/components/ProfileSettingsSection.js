import { FiArrowLeftCircle, FiEyeOff } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
export default function ProfileSettingsSection() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Navigate back to the previous page
  };
  return (
    <div>
      {" "}
      <button
        onClick={handleBackClick}
        className="text-blue-600 dark:text-blue-400 mb-4 px-4 pt-4 flex items-center"
      >
        <FiArrowLeftCircle className="inline-block mr-2 " /> Back to Saved homes
      </button>
      <div className="bg-white w-full mx-auto p-4 ">
        <div className="border rounded-lg p-6 md:p-8">
          <h2 className="text-xl font-semibold mb-4">Personal Info</h2>
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h3 className="font-medium">Name</h3>
                <p className="text-sm text-zinc-600">
                  Your first and last given names. Updates are reflected across
                  all Zillow experiences.
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <span>Fk Oline</span>
                <a href="#" className="text-blue-600">
                  Edit
                </a>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h3 className="font-medium">Screen name</h3>
              </div>
              <div className="flex items-center space-x-2">
                <span>fakeonline76</span>
                <a href="#" className="text-blue-600">
                  Edit
                </a>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <h3 className="font-medium">Photo</h3>
                <p className="text-sm text-zinc-600">
                  Personalize your profile pic with a custom photo.
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <img
                  src="https://placehold.co/40x40"
                  alt="Profile"
                  className="rounded-full w-10 h-10 md:w-16 md:h-16"
                />
                <a href="#" className="text-blue-600">
                  Edit
                </a>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium">Reviews</h3>
                <p className="text-sm text-zinc-600">
                  Manage the reviews you've written for professionals, rentals,
                  and more.
                </p>
              </div>
              <a href="#" className="text-blue-600">
                Manage
              </a>
            </div>
          </div>
        </div>
        <div className="border rounded-lg p-6 mt-6">
          <h2 className="text-xl font-semibold mb-4">Sign in & Security</h2>
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div>
                <h3 className="font-medium">Email</h3>
                <p className="text-sm text-zinc-600 pb-2">
                  The email address associated with your account.
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <span>fakeonline76@gmail.com</span>
                <span className="text-sm text-zinc-500">unverified</span>
                <a href="#" className="text-blue-600">
                  Verify
                </a>
                <a href="#" className="text-blue-600">
                  Edit
                </a>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium">Password</h3>
                <p className="text-sm text-zinc-600">
                  Set a unique password to protect your account.
                </p>
              </div>
              <a
                href="#"
                className="text-blue-600 border border-blue-600 px-4 py-2 rounded"
              >
                Create password
              </a>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium">2-Step Verification</h3>
                <p className="text-sm text-zinc-600">
                  Make your account extra secure. Along with your password,
                  you'll need to enter a code that we text to your phone each
                  time you sign in.
                </p>
              </div>
              <a
                href="#"
                className="text-blue-600 border border-blue-600 px-4 py-2 rounded"
              >
                Enable
              </a>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium">Google sign in</h3>
                <p className="text-sm text-zinc-600">
                  You've linked your Google account to Zillow and are using it
                  to sign in. You are signed in as fakeonline76@gmail.com.
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
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium">Deactivate my account</h3>
                <p className="text-sm text-zinc-600">
                  This will shut down your account, but retain your information.
                  You won't be able to sign in again until your account is
                  reactivated.
                </p>
              </div>
              <a href="#" className="text-blue-600">
                Deactivate account
              </a>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-medium">Privacy & Cookies</h3>
                <p className="text-sm text-zinc-600">
                  Tools that allow you to see and manage your personal
                  undefined.
                </p>
              </div>
              <a href="#" className="text-blue-600">
                Go to Privacy Portal
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
