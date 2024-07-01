import React, { useState } from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { BsInbox } from "react-icons/bs";
import { IoChevronDown } from "react-icons/io5";
import MessageList from "./MessageList";

const FilterSection = () => {
  const [value, setValue] = useState("1");
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [ptext1, setPtext1] = useState("No messages in your inbox to show.");

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    setIsOpen(false);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);

    switch (newValue) {
      case "2":
        setPtext1("Inquiries from potential renters will be shown here.");
        break;
      case "3":
        setPtext1(
          "Once you have a scheduled tour with a renter, be sure to add a note to help organize your leads."
        );
        break;
      case "4":
        setPtext1("Invite promising renters to apply to your listing.");
        break;
      case "5":
        setPtext1("Conversations with current tenants will be shown here.");
        break;
      default:
        setPtext1("No messages in your inbox to show.");
    }
  };

  return (
    <div className="bg-white p-4">
      <div className="flex flex-col lg:flex-row items-center lg:justify-between justify-center">
        <div className="flex items-center gap-4 ">
          <h1 className="font-bold font-serif text-3xl">Messages</h1>

          <div className="relative lg:hidden">
            <button
              id="dropdownAvatarNameButton"
              className="flex items-center text-sm pe-1 font-medium text-gray-900 rounded-full hover:text-blue-600 dark:hover:text-blue-500"
              type="button"
              onClick={toggleDropdown}
            >
              <BsInbox color="blue" size={25} className="mr-2" />
              Inbox
              <IoChevronDown className="w-2.5 h-2.5 ms-3" />
            </button>
            {isOpen && (
              <div
                id="dropdownAvatarName"
                className="absolute z-10 bg-white divide-y right-8 divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
              >
                <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200">
                  <li>
                    <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                      <label
                        htmlFor="inbox-radio-4"
                        className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                      >
                        Inbox
                      </label>
                      <input
                        checked={selectedOption === "inbox"}
                        onChange={handleOptionChange}
                        id="inbox-radio-4"
                        type="radio"
                        value="inbox"
                        name="inbox-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-600 dark:border-gray-500"
                      />
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                      <label
                        htmlFor="starred-radio-5"
                        className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                      >
                        Starred
                      </label>
                      <input
                        checked={selectedOption === "starred"}
                        onChange={handleOptionChange}
                        id="starred-radio-5"
                        type="radio"
                        value="starred"
                        name="inbox-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-600 dark:border-gray-500"
                      />
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                      <label
                        htmlFor="archive-radio-6"
                        className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                      >
                        Archive
                      </label>
                      <input
                        checked={selectedOption === "archive"}
                        onChange={handleOptionChange}
                        id="archive-radio-6"
                        type="radio"
                        value="archive"
                        name="inbox-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-600 dark:border-gray-500"
                      />
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                      <label
                        htmlFor="report-radio-7"
                        className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                      >
                        Report
                      </label>
                      <input
                        checked={selectedOption === "report"}
                        onChange={handleOptionChange}
                        id="report-radio-7"
                        type="radio"
                        value="report"
                        name="inbox-radio"
                        className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-600 dark:border-gray-500"
                      />
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        <div className="w-full overflow-x-auto ml-2">
          <Box sx={{ width: "100%", typography: "body1" }}>
            <TabContext value={value}>
              <Box>
                <TabList
                  onChange={handleChange}
                  aria-label="lab API tabs example"
                  variant="scrollable"
                  scrollButtons="auto"
                >
                  <Tab label="View All" value="1" />
                  <Tab label="Inquiries" value="2" />
                  <Tab label="Tours" value="3" />
                  <Tab label="Applications" value="4" />
                  <Tab label="Tenants" value="5" />
                </TabList>
              </Box>
            </TabContext>
          </Box>
        </div>

        <div className="relative hidden lg:block">
          <button
            id="dropdownAvatarNameButton"
            className="flex items-center text-sm pe-1 font-medium text-gray-900 rounded-full hover:text-blue-600 dark:hover:text-blue-500"
            type="button"
            onClick={toggleDropdown}
          >
            <BsInbox color="blue" size={25} className="mr-2" />
            Inbox
            <IoChevronDown className="w-2.5 h-2.5 ms-3" />
          </button>
          {isOpen && (
            <div
              id="dropdownAvatarName"
              className="absolute z-10 bg-white divide-y right-8 divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
            >
              <ul className="p-3 space-y-1 text-sm text-gray-700 dark:text-gray-200">
                <li>
                  <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <label
                      htmlFor="inbox-radio-4"
                      className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                    >
                      Inbox
                    </label>
                    <input
                      checked={selectedOption === "inbox"}
                      onChange={handleOptionChange}
                      id="inbox-radio-4"
                      type="radio"
                      value="inbox"
                      name="inbox-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-600 dark:border-gray-500"
                    />
                  </div>
                </li>
                <li>
                  <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <label
                      htmlFor="starred-radio-5"
                      className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                    >
                      Starred
                    </label>
                    <input
                      checked={selectedOption === "starred"}
                      onChange={handleOptionChange}
                      id="starred-radio-5"
                      type="radio"
                      value="starred"
                      name="inbox-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-600 dark:border-gray-500"
                    />
                  </div>
                </li>
                <li>
                  <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <label
                      htmlFor="archive-radio-6"
                      className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                    >
                      Archive
                    </label>
                    <input
                      checked={selectedOption === "archive"}
                      onChange={handleOptionChange}
                      id="archive-radio-6"
                      type="radio"
                      value="archive"
                      name="inbox-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-600 dark:border-gray-500"
                    />
                  </div>
                </li>
                <li>
                  <div className="flex items-center p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-600">
                    <label
                      htmlFor="report-radio-7"
                      className="w-full ms-2 text-sm font-medium text-gray-900 rounded dark:text-gray-300"
                    >
                      Report
                    </label>
                    <input
                      checked={selectedOption === "report"}
                      onChange={handleOptionChange}
                      id="report-radio-7"
                      type="radio"
                      value="report"
                      name="inbox-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 dark:bg-gray-600 dark:border-gray-500"
                    />
                  </div>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
      <MessageList ptext1={ptext1} linktxt={"Go to My Properties"} />
    </div>
  );
};

export default FilterSection;
