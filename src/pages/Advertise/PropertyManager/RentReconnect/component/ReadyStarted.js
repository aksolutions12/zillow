import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
export default function ReadyStarted() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
      <div className="flex flex-col items-center justify-center py-16 bg-blue-100 dark:bg-zinc-800 gap-5">
        <h2 className="text-4xl font-semibold text-blue-800 dark:text-white mb-4">
          Ready to get started?
        </h2>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          Advertise with us
        </button>
      </div>
      <div className="py-24 bg-blue-900">
        <div>
          <h1 className="font-bold text-center text-3xl text-white">
            See what others are saying
          </h1>
        </div>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <div className="flex justify-center">
              <div className="flex flex-col items-center text-center p-6">
                <h1 className="text-lg  mb-2 text-white">
                  “I am impressed! Zillow has grown and evolved and is now one
                  of, if not the most important marketing resource for us.”
                </h1>
                <p className="font-semibold text-white pb-8">
                  Jennifer Jayne Bell, Warmington Residential
                </p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="flex justify-center">
              <div className="flex flex-col items-center text-center p-6">
                <h1 className="text-lg  mb-2 text-white">
                  “I am impressed! Zillow has grown and evolved and is now one
                  of, if not the most important marketing resource for us.”
                </h1>
                <p className="font-semibold text-white pb-8">
                  Jennifer Jayne Bell, Warmington Residential
                </p>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
