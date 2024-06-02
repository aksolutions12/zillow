export default function VideoSection() {
  return (
    <div className=" py-10 bg-white">
      <div className="bg-gray-200 lg:flex justify-between items-center py-8 px-5 mx-5">
        {/* Left side (text content) */}
        <div className="lg:w-2/5 mb-4 lg:mb-0">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Builders, meet buyers.
          </h2>
          <p className="text-lg text-gray-700">
            64 percent of all buyers consider new construction.* Make it easy
            for them to find you – list where they’re looking.
            <br />
            *Zillow New Construction Consumer Housing Trends Report 2019
          </p>
        </div>
        {/* Right side (video) */}
        <div className="lg:w-3/5 lg:ml-6 h-full ">
          {/* Replace 'videoSrc' with the actual URL of your video */}
          <iframe
            className="mx-auto w-full h-96 rounded-lg shadow-xl"
            src="https://www.youtube.com/embed/uxCXMj_XDP4"
            title="Video Player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}
