import { MdSearch } from "react-icons/md";

export default function TourSection() {
  return (
    <div className="py-10 px-4 bg-zinc-100">
      <div className="mb-2">
        <h1 className="text-3xl font-serif font-bold">Manage tours</h1>
      </div>
      <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-zinc-900 p-4">
        <img
          src="https://placehold.co/600x400"
          alt="Illustration"
          className="w-64 h-40 mb-6"
        />
        <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-200 mb-4">
          No tours scheduled
        </h2>
        <p className="text-center text-zinc-600 dark:text-zinc-400 mb-6">
          Appointment cards for upcoming and past tours will appear here so you
          can see your schedule and access tour details. Ready to start touring?
        </p>
        <button className="flex items-center bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
          <MdSearch className="mr-2" />
          Find a home
        </button>
      </div>
    </div>
  );
}
