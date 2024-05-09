import React from 'react';
import Card from '../../components/Card/Card';
import BrowseHouse from '../../assets/images/Browse.jpg'
import RentHouse from '../../assets/images/House.jpg'
import SaleStory from '../../assets/images/sale-story.png'



const CardsRow = () => {
  // Sample data for the cards
  const cardsData = [
    {
      imageUrl: BrowseHouse,
      heading: 'Browse homes',
      paragraph: 'Find your place with an immersive photo experience and the most listings, including things you won’t find anywhere else.',
      buttonText: 'Browse homes',
    },
    {
      imageUrl: RentHouse,
      heading: 'Rent a home',
      paragraph: 'We’re creating a seamless online experience – from shopping on the largest rental network, to applying, to paying rent.',
      buttonText: 'Find rentals',
    },
    {
      imageUrl: SaleStory,
      heading: 'Sell a home',
      paragraph: 'No matter what path you take to sell your home, we can help you navigate a successful sale.',
      buttonText: 'See your Options',
    },
  ];

  return (
    <div className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:sm:grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8">
          {cardsData.map((card, index) => (
            <Card
              key={index}
              imageUrl={card.imageUrl}
              heading={card.heading}
              paragraph={card.paragraph}
              buttonText={card.buttonText}
            />
          ))}

          
        </div>
      </div>
    </div>
  );
};

export default CardsRow;
