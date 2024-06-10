import React from "react";
import SavedCardList from "../../SavedHome/components/SavedCardList";

const RecentlyViewedList = () => {
  return (
    <div className="py-10 px-2">
      <div>
        <h1 className="font-bold text-3xl font-serif">Recently Viewed</h1>
      </div>
      <div>
        <SavedCardList />
      </div>
    </div>
  );
};

export default RecentlyViewedList;
