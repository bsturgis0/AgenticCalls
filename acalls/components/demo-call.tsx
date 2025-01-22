"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Phone } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"

export function DemoCall() {
  const [isSliding, setIsSliding] = useState(false)
  const [slidePosition, setSlidePosition] = useState(0)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsSliding(true)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isSliding) return
    const touch = e.touches[0]
    const slider = e.currentTarget
    const rect = slider.getBoundingClientRect()
    const position = Math.max(0, Math.min(1, (touch.clientX - rect.left) / rect.width))
    setSlidePosition(position)
  }

  const handleTouchEnd = () => {
    setIsSliding(false)
    if (slidePosition > 0.8) {
      initiateCall()
    }
    setSlidePosition(0)
  }

  const initiateCall = () => {
    if (!formData.name || !formData.email || !formData.phone) {
      alert("Please fill in all fields")
      return
    }
    console.log("Initiating call with:", formData)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative"
    >
      <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-[24px] blur opacity-20 animate-pulse"></div>
      <Card className="relative w-full max-w-md bg-black/90 border-cyan-500/20 backdrop-blur-xl text-white p-6 rounded-2xl">
        <div className="flex items-center gap-4 mb-8">
          <div className="relative">
            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 animate-pulse">
              <Image src="/placeholder.svg" alt="AI Agent Avatar" width={48} height={48} className="rounded-full" />
            </div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-cyan-500 rounded-full border-2 border-black"></div>
          </div>
          <div>
            <h3 className="font-heading text-lg">Demo AI agent</h3>
            <p className="text-sm text-cyan-400">Agentic Calls representative</p>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <Image src="/placeholder.svg" alt="English" width={20} height={20} className="rounded-sm" />
            <span className="text-sm">English</span>
          </div>
        </div>

        <div className="space-y-4 mb-8">
          <Input
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your name"
            className="bg-white/10 border-cyan-500/20 text-white placeholder:text-white/50 focus:border-cyan-500"
          />
          <Input
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your e-mail"
            type="email"
            className="bg-white/10 border-cyan-500/20 text-white placeholder:text-white/50 focus:border-cyan-500"
          />
          <Input
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Phone number"
            type="tel"
            className="bg-white/10 border-cyan-500/20 text-white placeholder:text-white/50 focus:border-cyan-500"
          />
        </div>

        <div className="text-sm text-center mb-4">
          The call will automatically end after <span className="text-cyan-400">5 minutes</span>
        </div>

        <motion.div
          className="relative h-14 bg-black/50 rounded-full cursor-pointer overflow-hidden border border-cyan-500/20"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-500 to-blue-500 transition-all duration-200"
            style={{ width: `${slidePosition * 100}%` }}
          />
          <div className="absolute inset-0 flex items-center justify-center gap-2 text-white font-medium">
            <Phone className="w-5 h-5" />
            SLIDE TO CALL
          </div>
        </motion.div>
      </Card>
    </motion.div>
  )
}

