import HubTabs from "./HubTabs";
import HubFavourite from "./HubFavourite";
import HubProfile from "./HubProfile";
import RightNotification from "./RightNotification";

export default function MainComponentHub() {
  return (
    <div className="flex flex-col lg:flex-row min-h-screen">
      <div className="w-full lg:w-9/12 p-4">
        <HubTabs />
        <HubFavourite />
        <HubProfile />
      </div>
      <div className="w-full lg:w-3/12 p-2">
        <RightNotification />
      </div>
    </div>
  );
}
