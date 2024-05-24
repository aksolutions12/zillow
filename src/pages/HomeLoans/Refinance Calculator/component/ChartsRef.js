import * as React from "react";
import { BarChart } from "@mui/x-charts/BarChart";
import { LineChart } from "@mui/x-charts/LineChart";

const chartSetting = {
  width: 700,
  height: 400,
};
const dataset = [
  {
    year: 2010,
    loan: 1000000,
  },
  {
    year: 2011,
    loan: 900000,
  },
  {
    year: 2012,
    loan: 1100000,
  },
  {
    year: 2013,
    loan: 950000,
  },
  {
    year: 2014,
    loan: 1200000,
  },
  {
    year: 2015,
    loan: 1050000,
  },
  {
    year: 2016,
    loan: 1150000,
  },
  {
    year: 2017,
    loan: 1250000,
  },
  {
    year: 2018,
    loan: 1180000,
  },
  {
    year: 2019,
    loan: 1300000,
  },
  {
    year: 2020,
    loan: 1120000,
  },
  {
    year: 2021,
    loan: 1050000,
  },
];

const linechartSetting = {
  width: 500,
  height: 300,
};
const linedataset = [
  { month: "Jan", amount: 2 },
  { month: "Feb", amount: 5.5 },
  { month: "Mar", amount: 2 },
  { month: "Apr", amount: 8.5 },
  { month: "May", amount: 1.5 },
  { month: "Jun", amount: 5 },
];
const valueFormatter = (value) => `$${value}`;
const ChartsRef = () => {
  return (
    <div>
      <div>
        <BarChart
          dataset={dataset}
          yAxis={[{ scaleType: "band", dataKey: "year" }]}
          series={[{ dataKey: "loan", label: "Loan Amount", valueFormatter }]}
          layout="horizontal"
          barGap={10}
          {...chartSetting}
        />
      </div>
      <div>
        <LineChart
          dataset={linedataset}
          yAxis={[{ scaleType: "band", dataKey: "amount" }]}
          xAxis={[{ scaleType: "band", dataKey: "month" }]}
          series={[{ dataKey: "amount", label: "Amount" }]}
          layout="horizontal"
          {...linechartSetting}
        />
      </div>
    </div>
  );
};

export default ChartsRef;
