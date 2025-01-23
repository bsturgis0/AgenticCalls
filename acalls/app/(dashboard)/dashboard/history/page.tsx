"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Phone, ArrowUpDown } from "lucide-react"

const callHistory = [
  {
    id: "1",
    customerName: "John Doe",
    phoneNumber: "+1 (555) 123-4567",
    date: "2024-01-22",
    time: "14:30",
    duration: "5:23",
    status: "completed",
    type: "inbound",
  },
  {
    id: "2",
    customerName: "Jane Smith",
    phoneNumber: "+1 (555) 987-6543",
    date: "2024-01-22",
    time: "13:15",
    duration: "3:45",
    status: "completed",
    type: "outbound",
  },
]

export default function CallHistoryPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc")

  const filteredCalls = callHistory
    .filter(
      (call) =>
        call.customerName.toLowerCase().includes(searchTerm.toLowerCase()) || call.phoneNumber.includes(searchTerm),
    )
    .sort((a, b) => {
      const dateA = new Date(`${a.date} ${a.time}`).getTime()
      const dateB = new Date(`${b.date} ${b.time}`).getTime()
      return sortOrder === "asc" ? dateA - dateB : dateB - dateA
    })

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Call History</h1>
        <p className="text-gray-400">View and analyze past calls</p>
      </div>

      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
          <Input
            placeholder="Search by name or phone number..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 bg-black/50 border-cyan-500/20"
          />
        </div>
        <Button
          variant="outline"
          className="border-cyan-500/20"
          onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
        >
          <ArrowUpDown className="h-4 w-4 mr-2" />
          Sort by Date
        </Button>
      </div>

      <div className="grid gap-4">
        {filteredCalls.map((call) => (
          <Card key={call.id} className="p-6 border-cyan-500/20 bg-black/50">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium">{call.customerName}</h3>
                  <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-500">{call.type}</span>
                </div>
                <p className="text-sm text-gray-400">{call.phoneNumber}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-400">
                  {call.date} at {call.time}
                </p>
                <p className="text-sm font-medium">{call.duration}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {filteredCalls.length === 0 && (
        <div className="text-center py-12">
          <Phone className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium">No calls found</h3>
          <p className="text-gray-400">Try adjusting your search</p>
        </div>
      )}
    </div>
  )
}

