import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { Slider, Tabs, Tab } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";

export default function MortPriceTab() {
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
        <Tab label="BreakDown" />
        <Tab label="Schedule" />
      </Tabs>
      {activeTab === 0 && ( // Render content for Home Price tab
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
      {activeTab === 1 && ( // Render content for Payment tab
        <LineChart
          xAxis={[{ data: [1, 2, 3, 5, 8, 10, 12, 15, 16] }]}
          series={[
            {
              data: [2, 5.5, 2, 8.5, 1.5, 5],
              valueFormatter: (value) =>
                value == null ? "NaN" : value.toString(),
            },
            {
              data: [null, null, null, null, 5.5, 2, 8.5, 1.5, 5],
            },
            {
              data: [7, 8, 5, 4, null, null, 2, 5.5, 1],
              valueFormatter: (value) =>
                value == null ? "?" : value.toString(),
            },
          ]}
          height={200}
          margin={{ top: 10, bottom: 20 }}
        />
      )}
    </div>
  );
}
