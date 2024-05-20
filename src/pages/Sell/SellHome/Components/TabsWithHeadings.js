import React from "react";
import TabsSection from "./TabsSection";
import { Button } from "@mui/material";
import { IoIosArrowRoundForward } from "react-icons/io";

const TabsWithHeadings = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 px-10 bg-white">
      <div className="flex flex-col items-center  gap-4">
        <h1 className="text-xl font-bold">Get acquainted with the process</h1>
        <p className="pb-10">
          As you begin the steps to selling, learn what to expect with our{" "}
          <a href="#" className="underline text-blue-500">
            {" "}
            Sellers Guide
          </a>
        </p>
      </div>
      <TabsSection />
      <Button variant="contained">
        View all Articles <IoIosArrowRoundForward size={30} />
      </Button>
    </div>
  );
};

export default TabsWithHeadings;
