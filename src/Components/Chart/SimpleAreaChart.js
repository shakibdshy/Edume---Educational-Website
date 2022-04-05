import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const SimpleAreaChart = () => {
  const data = [
    {
      month: "Mar",
      investment: 900000,
      sell: 24100,
      revenue: 10401,
    },
    {
      month: "Apr",
      investment: 200000,
      sell: 42300,
      revenue: 24500,
    },
    {
      month: "May",
      investment: 500000,
      sell: 30000,
      revenue: 67010,
    },
    {
      month: "Jun",
      investment: 500000,
      sell: 43000,
      revenue: 40405,
    },
    {
      month: "Jul",
      investment: 600000,
      sell: 50100,
      revenue: 50900,
    },
    {
      month: "Aug",
      investment: 700000,
      sell: 60000,
      revenue: 61000,
    },
  ];

  return (
    <AreaChart
      width={500}
      height={400}
      data={data}
      margin={{
        top: 10,
        right: 30,
        left: 0,
        bottom: 0,
      }}>
      <CartesianGrid strokeDasharray='3 3' />
      <XAxis dataKey="month" />
      <YAxis />
      <Tooltip />
      <Area
        type='monotone'
        dataKey="investment"
        stackId='1'
        stroke='#8884d8'
        fill='#8884d8'
      />
      <Area
        type='monotone'
        dataKey="sell"
        stackId='1'
        stroke='#82ca9d'
        fill='#82ca9d'
      />
      <Area
        type='monotone'
        dataKey="revenue"
        stackId='1'
        stroke='#ffc658'
        fill='#ffc658'
      />
    </AreaChart>
  );
};

export default SimpleAreaChart;
