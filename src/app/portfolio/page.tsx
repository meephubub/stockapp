"use client";

import React from 'react';
import useSWR from 'swr';
import axios from 'axios';
import StockInfo from '../components/StockInfo'; // Adjust path if necessary
import Chart from '../components/Chart'; // Adjust path if necessary
import TradingSignal from '../components/TradingSignal'; // Adjust path if necessary
import GlassCard from '../components/GlassCard'; // Adjust path if necessary
import Input from '../components/ui/Input'; // Adjust path if necessary
import Button from '../components/ui/Button'; // Adjust path if necessary

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

export default function Portfolio() {
  const { data: portfolioData, error } = useSWR(
    `${API_BASE_URL}/api/v1/portfolio`,
    fetcher,
    { refreshInterval: 60000 },
  );

  if (error) return <div className="text-red-400">Failed to load portfolio data</div>;
  if (!portfolioData) return <div className="text-blue-400">Loading...</div>;

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Portfolio Performance</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <GlassCard>
          <h3 className="text-xl font-semibold mb-2">Total Value</h3>
          <p className="text-3xl font-bold">${portfolioData.total_value.toFixed(2)}</p>
        </GlassCard>
        <GlassCard>
          <h3 className="text-xl font-semibold mb-2">Profit/Loss</h3>
          <p className={`text-3xl font-bold ${portfolioData.profit_loss >= 0 ? "text-green-400" : "text-red-400"}`}>
            {portfolioData.profit_loss >= 0 ? "+" : "-"}${Math.abs(portfolioData.profit_loss).toFixed(2)}
          </p>
        </GlassCard>
        <GlassCard>
          <h3 className="text-xl font-semibold mb-2">Total Shares</h3>
          <p className="text-3xl font-bold">{portfolioData.total_shares}</p>
        </GlassCard>
      </div>
      <Chart data={portfolioData.value_history} title="Portfolio Value History" />
      <div className="mt-6">
        <GlassCard>
          <h3 className="text-xl font-semibold mb-4">Holdings</h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left">
                  <th className="pb-2">Ticker</th>
                  <th className="pb-2">Shares</th>
                  <th className="pb-2">Avg Price</th>
                  <th className="pb-2">Current Price</th>
                  <th className="pb-2">Profit/Loss</th>
                </tr>
              </thead>
              <tbody>
                {portfolioData.holdings.map((holding: any) => (
                  <tr key={holding.ticker}>
                    <td className="py-2">{holding.ticker}</td>
                    <td>{holding.shares}</td>
                    <td>${holding.avg_price.toFixed(2)}</td>
                    <td>${holding.current_price.toFixed(2)}</td>
                    <td className={holding.profit_loss >= 0 ? "text-green-400" : "text-red-400"}>
                      {holding.profit_loss >= 0 ? "+" : "-"}${Math.abs(holding.profit_loss).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlassCard>
      </div>
    </div>
  );
}
