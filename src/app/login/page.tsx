'use client'

import React, { useState } from 'react'
import StockInfo from './components/StockInfo'
import Chart from './components/Chart'
import TradingSignal from './components/TradingSignal'
import GlassCard from './components/GlassCard'
import Input from './components/ui/Input' // Changed to relative path
import Button from './components/ui/Button' // Changed to relative path
import axios from 'axios'
import useSWR from 'swr'
import { motion } from 'framer-motion'
import { LockIcon, UserIcon } from 'lucide-react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically handle the login logic
    console.log('Login attempted with:', email, password)
    // For now, we'll just redirect to the home page
    router.push('/')
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <GlassCard className="w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Login to StockVision</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
              Email
            </label>
            <div className="relative">
              <UserIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
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
              <LockIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
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
  )
}