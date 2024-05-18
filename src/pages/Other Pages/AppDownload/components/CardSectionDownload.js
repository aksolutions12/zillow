import React from "react";
import Card3 from "../../../../components/Card/Card3";
import cardimg1 from "../../../../assets/images/downloadcard1.png";
import cardimg2 from "../../../../assets/images/downloadcard2.png";

const CardSectionDownload = () => {
  // Sample data for cards
  const cardsData = [
    {
      imageSrc: cardimg2,
      title: "Browse homes you’ll love",
      content:
        "Stay current with notifications about the latest listings — and homes you won’t find anywhere else",
    },
    {
      imageSrc: cardimg1,
      title: "Find your sweet spot",
      content:
        "Stay current with notifications about the latest listings — and homes you won’t find anywhere else",
    },
    {
      imageSrc: cardimg1,
      title: "Find your sweet spot",
      content:
        "Save and share your favorite homes with friends and family, and compare notes on features you love.",
    },
    {
      imageSrc: cardimg2,
      title: "Tour on your own time",
      content:
        "Explore virtually with 3D tours and photos — or schedule an in-person tour with a local agent.",
    },
  ];

  return (
    <div className="flex flex-wrap px-10 py-5">
      {cardsData.map((card, index) => (
        <div
          key={index}
          className={`w-full sm:w-1/2 lg:w-1/2 xl:w-1/2 px-4 py-2`} // Responsive class adjustments
        >
          <Card3
            imageSrc={card.imageSrc}
            title={card.title}
            content={card.content}
          />
        </div>
      ))}
    </div>
  );
};

export default CardSectionDownload;
