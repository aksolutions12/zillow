import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../../../../assets/images/real-estate-agent-3c32cc.png";
import img2 from "../../../../assets/images/new_con_buyer-a82aae.png";

function BuilderCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="py-10 bg-white">
      <div>
        <h1 className="font-bold text-4xl text-center mb-8">
          Hear from our builders
        </h1>
      </div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <div className="flex justify-center">
            <div className="flex flex-col items-center text-center p-6">
              <img
                src={img1}
                alt="Profile Image"
                className="rounded-full w-24 h-24 mb-4"
              />
              <p className="text-lg italic mb-2">
                “I am impressed! Zillow has grown and evolved and is now one of,
                if not the most important marketing resource for us.”
              </p>
              <p className="font-semibold">
                Jennifer Jayne Bell, Warmington Residential
              </p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="flex justify-center">
            <div className="flex flex-col items-center text-center p-6">
              <img
                src={img2}
                alt="Profile Image"
                className="rounded-full w-24 h-24 mb-4"
              />
              <p className="text-lg italic mb-2">
                “I am impressed! Zillow has grown and evolved and is now one of,
                if not the most important marketing resource for us.”
              </p>
              <p className="font-semibold">
                Jennifer Jayne Bell, Warmington Residential
              </p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default BuilderCarousel;
