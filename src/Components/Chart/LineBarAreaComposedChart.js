import React from "react";
import {
  Area,
  Bar,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  ResponsiveContainer,
  Scatter,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const LineBarAreaComposedChart = () => {
  const data = [
    {
      month: "Mar",
      investment: 900000,
      sell: 541000,
      revenue: 104010,
      cnt: 14000,
    },
    {
      month: "Apr",
      investment: 200000,
      sell: 112300,
      revenue: 100000,
      cnt: 20000,
    },
    {
      month: "May",
      investment: 500000,
      sell: 300000,
      revenue: 207010,
      cnt: 30000,
    },
    {
      month: "Jun",
      investment: 500000,
      sell: 430000,
      revenue: 404050,
      cnt: 50000,
    },
    {
      month: "Jul",
      investment: 600000,
      sell: 501000,
      revenue: 499000,
      cnt: 60000,
    },
    {
      month: "Aug",
      investment: 700000,
      sell: 600000,
      revenue: 510000,
      cnt: 500000,
    },
  ];
  return (
    <ResponsiveContainer width='100%' height='100%'>
      <ComposedChart
        width={500}
        height={400}
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20,
        }}>
        <CartesianGrid stroke='#f5f5f5' />
        <XAxis dataKey='month' scale='band' />
        <YAxis />
        <Tooltip />
        <Legend />
        <Area type='monotone' dataKey='investment' fill='#8884d8' stroke='#8884d8' />
        <Bar dataKey='sell' barSize={20} fill='#413ea0' />
        <Line type='monotone' dataKey='revenue' stroke='#ff7300' />
        <Scatter dataKey='cnt' fill='red' />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default LineBarAreaComposedChart;
