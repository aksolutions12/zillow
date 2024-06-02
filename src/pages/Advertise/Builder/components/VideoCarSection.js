import AttractForm from "./AttractForm";

export default function VideoCarSection() {
  return (
    <div className="bg-gray-200 lg:flex justify-between py-8 px-5 gap-4">
      {/* Video on the left */}
      <div className="lg:w-3/5 lg:mb-0 mb-8 flex items-center">
        <iframe
          className="mx-auto w-full h-96 rounded-lg shadow-xl"
          src="https://www.youtube.com/embed/uxCXMj_XDP4"
          title="Video Player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      {/* AttractForm on the right */}
      <div className="lg:w-2/5">
        <AttractForm />
      </div>
    </div>
  );
}
