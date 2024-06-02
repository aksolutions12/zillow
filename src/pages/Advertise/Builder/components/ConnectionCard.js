import img1 from "../../../../assets/images/Discovery_x4-1.png";
import img2 from "../../../../assets/images/Connections_x4-1889ff-903c31.png";
import img3 from "../../../../assets/images/Outcomes_x4-00909b-665602.png";
export default function ConnectionCard() {
  return (
    <div className="flex flex-col items-center space-y-8 py-10 px-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
          <img src={img1} alt="Discovery Icon" className="mb-4 w-32 h-32" />
          <h3 className="text-xl font-bold mb-2">DISCOVERY</h3>
          <p className="text-center">
            Access to the largest audience of online home shoppers.
          </p>
        </div>
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
          <img src={img2} alt="Connections Icon" className="mb-4 w-32 h-32" />
          <h3 className="text-xl font-bold mb-2">CONNECTIONS</h3>
          <p className="text-center">
            Immediately connect with prospective home buyers.
          </p>
        </div>
        <div className="flex flex-col items-center p-6 bg-white rounded-lg shadow-md">
          <img src={img3} alt="Outcomes Icon" className="mb-4 w-32 h-32" />
          <h3 className="text-xl font-bold mb-2">OUTCOMES</h3>
          <p className="text-center">
            Review feedback and performance with resources to take action.
          </p>
        </div>
      </div>
      <button className="bg-blue-700 text-white py-2 px-6 p-5 rounded-lg">
        Get started
      </button>
    </div>
  );
}
