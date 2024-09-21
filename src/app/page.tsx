'use client'

import React, { useState } from 'react'
import StockInfo from '@/components/StockInfo'
import Chart from '@/components/Chart'
import TradingSignal from '@/components/TradingSignal'
import GlassCard from '@/components/GlassCard'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import axios from 'axios'
import useSWR from 'swr'
import { motion } from 'framer-motion'

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL

const fetcher = (url: string) => axios.get(url).then(res => res.data)

export default function Home() {
  const [ticker, setTicker] = useState('AAPL')
  const { data: signalData, error: signalError } = useSWR(`${API_BASE_URL}/api/v1/signal?ticker=${ticker}`, fetcher, { refreshInterval: 60000 })
  const { data: historicalData, error: historicalError } = useSWR(`${API_BASE_URL}/api/v1/historical?ticker=${ticker}`, fetcher)
  const { data: portfolioData, error: portfolioError } = useSWR(`${API_BASE_URL}/api/v1/portfolio`, fetcher, { refreshInterval: 60000 })

  const [searchTicker, setSearchTicker] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (searchTicker) {
      setTicker(searchTicker.toUpperCase())
      setSearchTicker('')
    }
  }

  if (signalError || historicalError || portfolioError) return <div className="text-red-400">Failed to load data</div>
  if (!signalData || !historicalData || !portfolioData) return <div className="text-blue-400">Loading...</div>

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 lg:grid-cols-4 gap-6"
    >
      <div className="lg:col-span-1">
        <form onSubmit={handleSearch} className="mb-6">
          <div className="flex space-x-2">
            <Input
              type="text"
              value={searchTicker}
              onChange={(e) => setSearchTicker(e.target.value)}
              placeholder="Enter ticker"
              className="bg-gray-800 bg-opacity-50 border-gray-700 text-gray-100 placeholder-gray-400"
            />
            <Button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white">Search</Button>
          </div>
        </form>
        <StockInfo
          ticker={ticker}
          companyName={signalData.company_name}
          currentPrice={signalData.current_price}
          change={signalData.price_change_percent}
          marketCap={signalData.market_cap}
          volume={signalData.volume}
          high52={signalData.high_52week}
          low52={signalData.low_52week}
          peRatio={signalData.pe_ratio}
        />
      </div>
      <div className="lg:col-span-3 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <TradingSignal signal={signalData.signal} />
          <GlassCard>
            <h3 className="text-xl font-semibold mb-2 text-blue-400">Portfolio Value</h3>
            <p className="text-3xl font-bold text-gray-100">${portfolioData.total_value.toFixed(2)}</p>
            <p className={portfolioData.profit_loss >= 0 ? 'text-green-400' : 'text-red-400'}>
              {portfolioData.profit_loss >= 0 ? '+' : '-'}${Math.abs(portfolioData.profit_loss).toFixed(2)}
            </p>
          </GlassCard>
        </div>
        <Chart data={historicalData.price_history} title={`${ticker} Price History`} />
      </div>
    </motion.div>
  )
}