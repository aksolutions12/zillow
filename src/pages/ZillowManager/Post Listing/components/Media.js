import React from "react";
import { MdOutlineTipsAndUpdates } from "react-icons/md";
import { IoMdPhotos } from "react-icons/io";

const Media = ({ formData, setFormData }) => {
  const { selectedFiles } = formData.media;

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const files = Array.from(event.target.files);
    setFormData((prevFormData) => ({
      ...prevFormData,
      media: {
        ...prevFormData.media,
        selectedFiles: files,
      },
    }));
  };

  const fileInputRef = React.createRef();

  return (
    <div className="lg:px-16 sm:px-5 p-6">
      <h1 className="text-2xl font-bold">Add photos</h1>
      <p className="text-zinc-600 dark:text-zinc-400">
        Photos help renters imagine living in your place.
      </p>
      <div className="mt-4 flex flex-col md:flex-row gap-4">
        <div className="flex-1 border-2 border-zinc-300 border-dashed rounded-lg p-6 flex flex-col items-center justify-center">
          <IoMdPhotos size={30} color="blue" />
          <p className="text-zinc-600 dark:text-zinc-400 mb-4">
            Drag photos here
          </p>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            onClick={handleButtonClick}
          >
            Select from computer
          </button>
          <input
            type="file"
            multiple
            ref={fileInputRef}
            style={{ display: "none" }}
            onChange={handleFileChange}
          />
        </div>
        <div className="border border-zinc-300 rounded-lg p-4 w-full md:w-1/3">
          <MdOutlineTipsAndUpdates size={30} className="mr-2" color="blue" />
          <h2 className="text-xl font-bold">Add photos</h2>
          <p className="text-zinc-600 dark:text-zinc-400">
            Renters like to see photos of the room they'll be renting. Consider
            adding photos of the room, in addition to photos of the property's
            shared areas.
          </p>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {selectedFiles.map((file, index) => (
          <div key={index} className="relative">
            <img
              src={URL.createObjectURL(file)}
              alt={`Selected file ${index + 1}`}
              className="w-full h-64 object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Media;
