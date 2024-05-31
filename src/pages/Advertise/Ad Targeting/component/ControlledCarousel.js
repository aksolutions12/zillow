import { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import RoundedCards from "./RoundedCards";
import img1 from "../../../../assets/images/real-estate-agent-3c32cc.png";
import img2 from "../../../../assets/images/new_con_buyer-a82aae.png";
import img3 from "../../../../assets/images/luxury_home_buyer-72e875.png";

import img4 from "../../../../assets/images/mid_funnel_buyers-b8979e.png";
import img5 from "../../../../assets/images/first-time-home-buyers-40223c.png";
import img6 from "../../../../assets/images/low_funnel_buyers-528e52.png";

function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="py-10 bg-gray-100">
      <div>
        <h1 className="font-bold text-4xl text-center mb-8">
          Speciality Audiences
        </h1>
      </div>
      <Carousel activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <RoundedCards
            cards={[
              {
                imageUrl: img4,
                altText: "Mid-Funnel Home Buyers",
                title: "Mid-Funnel Home Buyers",
              },
              {
                imageUrl: img6,
                altText: "Low-Funnel Home Buyers",
                title: "Low-Funnel Home Buyers",
              },
              {
                imageUrl: img5,
                altText: "First Time Home Buyers",
                title: "First Time Home Buyers",
              },
            ]}
          />
        </Carousel.Item>
        <Carousel.Item>
          <RoundedCards
            cards={[
              {
                imageUrl: img3,
                altText: "Mid-Funnel Home Buyers",
                title: "Luxery Home Buyers",
              },
              {
                imageUrl: img2,
                altText: "Low-Funnel Home Buyers",
                title: "New Contruction Buyers",
              },
              {
                imageUrl: img1,
                altText: "First Time Home Buyers",
                title: "Real Estate Agents",
              },
            ]}
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default ControlledCarousel;
