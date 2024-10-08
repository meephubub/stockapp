"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation"; // Change this to next/navigation
import GlassCard from "../components/GlassCard"; // Ensure this path is correct
import Input from "../components/ui/input"; // Ensure this path is correct
import Button from "../components/ui/button"; // Ensure this path is correct
import { LockIcon, UserIcon } from "lucide-react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login attempted with:", email, password);

    try {
      // Handle login logic here (e.g., API call)
      // For now, we'll just redirect to the home page
      await router.push("/");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <GlassCard className="w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Login to StockVision
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
              Email
            </label>
            <div className="relative">
              <UserIcon
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 bg-white bg-opacity-10 border-none text-white placeholder-gray-400"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
              Password
            </label>
            <div className="relative">
              <LockIcon
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pl-10 bg-white bg-opacity-10 border-none text-white placeholder-gray-400"
                placeholder="Enter your password"
                required
              />
            </div>
          </div>
          <Button type="submit" className="w-full">
            Log In
          </Button>
        </form>
      </GlassCard>
    </div>
  );
}
