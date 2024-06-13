import SettingListUI from "./SettingListUI";
import { Link } from "react-router-dom";
import img1 from "../../../../assets/images/user.png";
import img2 from "../../../../assets/images/email-marketing.png";
import img3 from "../../../../assets/images/folder.png";

const settingsData = [
  {
    profileImg: img1,
    heading: "Profile",
    description:
      "Personalize your account and update your sign in preferences.",
    link: "/profilesettings",
  },
  {
    profileImg: img2,
    heading: "Notifications",
    description: "Manage the content and frequency of your Zillow emails.",
    link: "/notificationssettings",
  },
  {
    profileImg: img3,
    heading: "Document Preferences",
    description:
      "View your legal documents, and manage your preferences for receiving and signing documents.",
    link: "/document-preferences",
  },
];

export default function AccountSettingsList() {
  return (
    <div className="py-10 px-4">
      <div className="mb-4">
        <h1 className="font-bold text-3xl font-serif">Account settings</h1>
      </div>
      <div className="space-y-4 px-4">
        {settingsData.map((setting, index) => (
          <Link to={setting.link} key={index} className="block mb-4">
            <SettingListUI
              profileImg={setting.profileImg}
              profileName={setting.heading}
              profileDescription={setting.description}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
