import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";

function ToolCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="py-24 bg-blue-900">
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <div className="flex justify-center">
            <div className="flex flex-col items-center text-center p-6">
              <h1 className="text-lg  mb-2 text-white">
                “I am impressed! Zillow has grown and evolved and is now one of,
                if not the most important marketing resource for us.”
              </h1>
              <p className="font-semibold text-white pb-4">
                Jennifer Jayne Bell, Warmington Residential
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="flex justify-center">
            <div className="flex flex-col items-center text-center p-6">
              <h1 className="text-lg  mb-2 text-white">
                “I am impressed! Zillow has grown and evolved and is now one of,
                if not the most important marketing resource for us.”
              </h1>
              <p className="font-semibold text-white pb-4">
                Jennifer Jayne Bell, Warmington Residential
              </p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ToolCarousel;
