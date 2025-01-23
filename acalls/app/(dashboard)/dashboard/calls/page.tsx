"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Phone, Mic, MicOff, PhoneOff } from "lucide-react"

const activeCalls = [
  {
    id: "1",
    customerName: "John Doe",
    phoneNumber: "+1 (555) 123-4567",
    duration: "5:23",
    status: "active",
  },
  {
    id: "2",
    customerName: "Jane Smith",
    phoneNumber: "+1 (555) 987-6543",
    duration: "2:45",
    status: "active",
  },
]

export default function ActiveCallsPage() {
  const [calls, setCalls] = useState(activeCalls)

  const handleMute = (id: string) => {
    setCalls(calls.map((call) => (call.id === id ? { ...call, isMuted: !call.isMuted } : call)))
  }

  const handleEndCall = (id: string) => {
    setCalls(calls.filter((call) => call.id !== id))
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Active Calls</h1>
        <p className="text-gray-400">Monitor and manage ongoing calls</p>
      </div>

      <div className="grid gap-4">
        {calls.map((call) => (
          <Card key={call.id} className="p-6 border-cyan-500/20 bg-black/50">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="font-medium">{call.customerName}</h3>
                <p className="text-sm text-gray-400">{call.phoneNumber}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-cyan-500 animate-pulse" />
                  <span className="text-sm text-gray-400">{call.duration}</span>
                </div>
                <div className="flex gap-2">
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-cyan-500/20 hover:bg-cyan-500/10"
                    onClick={() => handleMute(call.id)}
                  >
                    {call.isMuted ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-red-500/20 hover:bg-red-500/10 text-red-500"
                    onClick={() => handleEndCall(call.id)}
                  >
                    <PhoneOff className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {calls.length === 0 && (
        <div className="text-center py-12">
          <Phone className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium">No active calls</h3>
          <p className="text-gray-400">Active calls will appear here</p>
        </div>
      )}
    </div>
  )
}

