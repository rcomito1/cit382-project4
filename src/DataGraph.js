import React, { Component } from "react";
import {
  BarChart,
  Bar,
  Brush,
  Cell,
  CartesianGrid,
  ReferenceLine,
  ReferenceArea,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ErrorBar,
  LabelList,
  Rectangle
} from "recharts";

const data = [
  { name: "1", age: "15-25", male: 14, female: 24, other: 4 },
  { name: "2", age: "26-35", male: 20, female: 2, other: 5 },
  { name: "3", age: "36-45", male: 14, female: 13, other: 3 },
  { name: "4", age: "46-55", male: 10, female: 26, other: 7 },
  { name: "5", age: "56-65", male: 27, female: 30, other: 4 }
];

export function DataGraph(props) {
  console.log(props.data);
  return (
    <div className="area-chart-wrapper">
      <BarChart
        width={1000}
        height={400}
        data={data}
        margin={{ top: 20, right: 20, bottom: 20, left: 20 }}
        layout="horizontal"
      >
        <YAxis type="number" />
        <XAxis dataKey="age" type="category" />
        <Tooltip />
        <ReferenceArea x1="food" x2="cosmetic" />
        <Bar dataKey="uv" fill="#8884d8" label />
        <Bar dataKey="male" fill="#82ca9d">
          <LabelList position="top" />
        </Bar>
        <Bar dataKey="female" fill="#683a98">
          <LabelList position="top" />
        </Bar>
        <Bar dataKey="other" fill="#183a91">
          <LabelList position="insideTop" fill="#ffffff" />
        </Bar>
      </BarChart>
    </div>
  );
}
