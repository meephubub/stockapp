import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import GlassCard from "./GlassCard";

interface ChartProps {
  data: Array<{ date: string; price: number }>;
  title: string;
}

export default function Chart({ data, title }: ChartProps) {
  return (
    <GlassCard className="w-full h-96">
      <h3 className="text-xl font-semibold mb-4 text-blue-400">{title}</h3>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.1)" />
          <XAxis dataKey="date" stroke="rgba(255,255,255,0.5)" />
          <YAxis stroke="rgba(255,255,255,0.5)" />
          <Tooltip
            contentStyle={{
              backgroundColor: "rgba(26, 32, 44, 0.8)",
              border: "none",
              borderRadius: "8px",
            }}
            labelStyle={{ color: "#fff" }}
            itemStyle={{ color: "#63b3ed" }}
          />
          <Line
            type="monotone"
            dataKey="price"
            stroke="#63b3ed"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </GlassCard>
  );
}
