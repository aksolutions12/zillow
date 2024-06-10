import { FaChevronRight } from "react-icons/fa";

export default function SettingListUI({
  profileImg,
  profileName,
  profileDescription,
}) {
  return (
    <div className="flex items-center justify-between p-4 bg-white dark:bg-zinc-800 rounded-lg shadow-md">
      <div className="flex items-center">
        <img
          src={profileImg}
          alt="Profile Icon"
          className="w-10 h-10 rounded-full mr-4"
        />
        <div>
          <h2 className="text-lg font-semibold text-zinc-900 dark:text-white">
            {profileName}
          </h2>
          <p className="hidden sm:block text-zinc-600 dark:text-zinc-400">
            {profileDescription}
          </p>
        </div>
      </div>
      <FaChevronRight className="w-6 h-6 text-blue-500" />
    </div>
  );
}
