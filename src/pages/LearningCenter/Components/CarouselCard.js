export default function CarouselCard({
  imageUrl,
  category,
  readTime,
  title,
  description,
}) {
  return (
    <div className="bg-cyan-50 dark:bg-zinc-800 p-6 rounded-lg flex flex-col md:flex-row items-center md:items-start">
      <div className="md:w-1/2 mb-4 md:mb-0 md:mr-6">
        <img
          className="w-full h-full rounded-lg"
          src={imageUrl}
          alt="House Image"
        />
      </div>
      <div className="flex-1 lg:py-16 sm:py-4  ">
        <div className="flex items-center space-x-2  mb-2">
          <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
            {category}
          </span>
          <span className="text-zinc-500 text-xs dark:text-zinc-400">
            {readTime}
          </span>
        </div>
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-white mb-2">
          {title}
        </h2>
        <p className="text-zinc-700 dark:text-zinc-300 mb-4">{description}</p>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
          Read article
        </button>
      </div>
    </div>
  );
}
