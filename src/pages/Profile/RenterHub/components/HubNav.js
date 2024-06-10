import { FaEnvelope, FaHome, FaUser } from "react-icons/fa";

export default function HubNav() {
  return (
    <div className="flex justify-between items-center p-4 bg-zinc-100 dark:bg-zinc-800">
      <h1 className="text-3xl font-serif font-bold text-zinc-800 dark:text-zinc-200">
        Renter Hub
      </h1>
      <div className="flex space-x-6">
        <a
          href="#"
          className="flex items-center text-blue-600 dark:text-blue-400"
        >
          <FaEnvelope
            size={20}
            className="mr-1 text-blue-600 dark:text-blue-400"
          />
          <span className="hidden sm:block">Messages</span>
        </a>
        <a
          href="#"
          className="flex items-center text-blue-600 dark:text-blue-400"
        >
          <FaHome size={20} className="mr-1 text-blue-600 dark:text-blue-400" />
          <span className="hidden sm:block">Your rental</span>
        </a>
        <a
          href="#"
          className="flex items-center text-blue-600 dark:text-blue-400"
        >
          <FaUser size={20} className="mr-1 text-blue-600 dark:text-blue-400" />
          <span className="hidden sm:block">Renter profile</span>
        </a>
      </div>
    </div>
  );
}
