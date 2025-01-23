"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Users, Plus, Settings, Trash2 } from "lucide-react"

const agents = [
  {
    id: "1",
    name: "Customer Service Agent",
    description: "Handles general customer inquiries and support",
    status: "active",
    calls: 150,
    avgRating: 4.8,
  },
  {
    id: "2",
    name: "Sales Representative",
    description: "Specializes in product information and sales",
    status: "active",
    calls: 120,
    avgRating: 4.6,
  },
]

export default function AgentsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredAgents = agents.filter((agent) => agent.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">AI Agents</h1>
          <p className="text-gray-400">Manage your AI voice agents</p>
        </div>
        <Button className="bg-cyan-500 text-black hover:bg-cyan-400">
          <Plus className="h-4 w-4 mr-2" />
          New Agent
        </Button>
      </div>

      <div className="relative">
        <Input
          placeholder="Search agents..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm bg-black/50 border-cyan-500/20"
        />
      </div>

      <div className="grid gap-4">
        {filteredAgents.map((agent) => (
          <Card key={agent.id} className="p-6 border-cyan-500/20 bg-black/50">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="text-lg font-medium">{agent.name}</h3>
                <p className="text-sm text-gray-400">{agent.description}</p>
                <div className="flex items-center gap-4 mt-2">
                  <span className="text-sm text-gray-400">{agent.calls} calls handled</span>
                  <span className="text-sm text-gray-400">{agent.avgRating} avg. rating</span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="border-cyan-500/20 hover:bg-cyan-500/10">
                  <Settings className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" className="border-red-500/20 hover:bg-red-500/10 text-red-500">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {filteredAgents.length === 0 && (
        <div className="text-center py-12">
          <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium">No agents found</h3>
          <p className="text-gray-400">Try adjusting your search or create a new agent</p>
        </div>
      )}
    </div>
  )
}

