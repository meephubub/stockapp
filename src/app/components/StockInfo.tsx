import React from "react";
import GlassCard from "./GlassCard";

interface StockInfoProps {
  ticker: string;
  companyName: string;
  currentPrice: number;
  change: number;
  marketCap: string;
  volume: string;
  high52: number;
  low52: number;
  peRatio: number | null;
}

export default function StockInfo({
  ticker,
  companyName,
  currentPrice,
  change,
  marketCap,
  volume,
  high52,
  low52,
  peRatio,
}: StockInfoProps) {
  const changeColor = change >= 0 ? "text-green-400" : "text-red-400";

  return (
    <GlassCard className="w-full">
      <h2 className="text-2xl font-bold mb-4">{ticker}</h2>
      <p className="text-lg mb-2">{companyName}</p>
      <p className="text-3xl font-bold mb-2">${currentPrice.toFixed(2)}</p>
      <p className={`text-lg ${changeColor} mb-4`}>
        {change > 0 ? "+" : ""}
        {change.toFixed(2)}%
      </p>
      <div className="space-y-2">
        <p>Market Cap: {marketCap}</p>
        <p>Volume: {volume}</p>
        <p>52 Week High: ${high52.toFixed(2)}</p>
        <p>52 Week Low: ${low52.toFixed(2)}</p>
        {peRatio && <p>P/E Ratio: {peRatio.toFixed(2)}</p>}
      </div>
    </GlassCard>
  );
}
