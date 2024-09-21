import React from "react";
import { motion } from "framer-motion";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlassCard({
  children,
  className = "",
}: GlassCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`bg-gray-800 bg-opacity-30 backdrop-filter backdrop-blur-lg rounded-xl p-6 shadow-lg border border-gray-700 ${className}`}
      style={{
        boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
      }}
    >
      {children}
    </motion.div>
  );
}
