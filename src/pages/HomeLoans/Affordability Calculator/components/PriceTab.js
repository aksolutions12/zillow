import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { Slider, Tabs, Tab } from "@mui/material";
import { GiPiggyBank, GiHouse } from "react-icons/gi";

export default function PriceTab() {
  const [value, setValue] = React.useState(50);
  const [activeTab, setActiveTab] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <div className="max-w-lg mx-auto p-4">
      <Tabs
        value={activeTab}
        onChange={handleTabChange}
        textColor="primary"
        indicatorColor="primary"
      >
        <Tab label="Home price" />
        <Tab label="Payment" />
      </Tabs>
      {activeTab === 0 && ( // Render content for Home Price tab
        <>
          <div className="text-center mb-6 mt-4">
            <p className="text-lg font-semibold">
              You can afford a house up to
            </p>
            <p className="text-4xl font-bold text-zinc-800">
              ${(169351 * (value / 100)).toFixed(0)}
            </p>
            <p className="text-zinc-600">
              Based on your income, a house at this price should{" "}
              <span className="text-green-600">fit comfortably</span> within
              your budget.
            </p>
          </div>
          <div className="flex justify-between items-center mb-4">
            <GiPiggyBank
              size={100}
              color="blue"
              style={{ transform: `scale(${1 - value / 100})` }}
            />
            <div className="relative w-full mx-4">
              <Slider
                value={value}
                onChange={handleChange}
                aria-labelledby="continuous-slider"
                sx={{ color: "primary.main" }}
                valueLabelDisplay="off"
              />
              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="bg-white shadow-md px-4 py-2 rounded-full text-center">
                  ${((169351 * (value / 100)) / 10).toFixed(0)}/mo
                </div>
              </div>
            </div>
            <GiHouse
              size={48}
              color="blue"
              style={{ transform: `scale(${1 + value / 100})` }}
            />
          </div>
        </>
      )}
      {activeTab === 1 && ( // Render content for Payment tab
        <PieChart
          series={[
            {
              data: [
                { id: 0, value: 407, label: "P & I" },
                { id: 1, value: 81, label: "Taxes" },
                { id: 2, value: 79, label: "Insurance" },
              ],
            },
          ]}
          width={400}
          height={200}
        />
      )}
    </div>
  );
}
