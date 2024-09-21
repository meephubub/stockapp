import React from "react";
import GlassCard from "./GlassCard";
import { ArrowUpIcon, ArrowDownIcon, MinusIcon } from "lucide-react";

interface TradingSignalProps {
  signal: "Buy" | "Sell" | "Hold";
}

export default function TradingSignal({ signal }: TradingSignalProps) {
  const signalColor =
    signal === "Buy"
      ? "text-green-400"
      : signal === "Sell"
        ? "text-red-400"
        : "text-yellow-400";

  const SignalIcon =
    signal === "Buy"
      ? ArrowUpIcon
      : signal === "Sell"
        ? ArrowDownIcon
        : MinusIcon;

  return (
    <GlassCard className="text-center">
      <h3 className="text-xl font-semibold mb-2 text-blue-400">
        Trading Signal
      </h3>
      <div className={`flex items-center justify-center ${signalColor}`}>
        <SignalIcon className="w-8 h-8 mr-2" />
        <p className="text-3xl font-bold">{signal}</p>
      </div>
    </GlassCard>
  );
}
