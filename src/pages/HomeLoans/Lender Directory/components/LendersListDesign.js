import React from "react";

export default function LendersListDesign({ lenders, selectedTab }) {
  const handleLenderClick = (lenderName) => {
    // Handle click action here, for example, navigate to lender details page
    console.log(`Clicked on ${lenderName}`);
  };

  // Filter lenders based on the selected tab
  const filteredLenders = lenders.filter((lender, index) => {
    if (selectedTab === 0) {
      return true; // Show all lenders for "Relevance" tab
    } else if (selectedTab === 1) {
      return index % 2 === 0; // Show lenders with even indexes for "Distance" tab
    } else {
      return index % 2 !== 0; // Show lenders with odd indexes for "Customer Rating" tab
    }
  });

  return (
    <div className="w-11/12 mx-auto">
      {filteredLenders.map((lender, index) => (
        <div
          key={index}
          className="flex items-center border-b py-8 gap-4 cursor-pointer"
          onClick={() => handleLenderClick(lender.name)}
        >
          <img
            src={lender.imageUrl}
            alt={lender.name}
            className="w-20 h-20 rounded-full"
          />
          <div className="ml-4 flex-1">
            <h3 className="text-lg font-semibold">{lender.name}</h3>
            <p className="text-zinc-500">{lender.nmls}</p>
          </div>
          <div className="text-right">
            <div className="flex items-center">
              <span className="text-blue-500 text-xl">{lender.rating}</span>
              <span className="ml-2 text-xl">{lender.averageRating}</span>
            </div>
            <p className="text-zinc-500">{lender.reviews}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
