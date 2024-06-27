import React from "react";
import { PieChart } from "@mui/x-charts/PieChart";
import { Tabs, Tab } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";

const MortPriceTab = ({ mortgageAmount, monthlyPayment }) => {
  const [activeTab, setActiveTab] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const principalAndInterest = monthlyPayment
    ? parseFloat(monthlyPayment) * 0.8
    : 0;
  const taxes = monthlyPayment ? parseFloat(monthlyPayment) * 0.1 : 0;
  const insurance = monthlyPayment ? parseFloat(monthlyPayment) * 0.1 : 0;

  const pieChartData = [
    { id: 0, value: principalAndInterest, label: "P & I" },
    { id: 1, value: taxes, label: "Taxes" },
    { id: 2, value: insurance, label: "Insurance" },
  ];

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
      {activeTab === 0 && (
        <>
          <PieChart
            series={[
              {
                data: pieChartData,
              },
            ]}
            width={400}
            height={200}
          />
          <div className="mt-4">
            <h3 className="text-xl font-bold">Monthly Payment Breakdown</h3>
            <p>P & I: ${principalAndInterest.toFixed(2)}</p>
            <p>Taxes: ${taxes.toFixed(2)}</p>
            <p>Insurance: ${insurance.toFixed(2)}</p>
            <p className="mt-2 font-bold">
              Total Monthly Payment: ${monthlyPayment}
            </p>
          </div>
        </>
      )}
      {activeTab === 1 && (
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
};

export default MortPriceTab;
