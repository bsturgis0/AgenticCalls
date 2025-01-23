"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MessageSquare, Plus, Edit2, Trash2 } from "lucide-react"

const scripts = [
  {
    id: "1",
    name: "Welcome Script",
    description: "Initial greeting and customer identification",
    lastModified: "2024-01-22",
    status: "active",
  },
  {
    id: "2",
    name: "Product Inquiry",
    description: "Handle product-related questions and information requests",
    lastModified: "2024-01-21",
    status: "active",
  },
]

export default function ScriptsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredScripts = scripts.filter((script) => script.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight">Chat Scripts</h1>
          <p className="text-gray-400">Manage conversation flows for your AI agents</p>
        </div>
        <Button className="bg-cyan-500 text-black hover:bg-cyan-400">
          <Plus className="h-4 w-4 mr-2" />
          New Script
        </Button>
      </div>

      <div className="relative">
        <Input
          placeholder="Search scripts..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm bg-black/50 border-cyan-500/20"
        />
      </div>

      <div className="grid gap-4">
        {filteredScripts.map((script) => (
          <Card key={script.id} className="p-6 border-cyan-500/20 bg-black/50">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h3 className="text-lg font-medium">{script.name}</h3>
                <p className="text-sm text-gray-400">{script.description}</p>
                <p className="text-sm text-gray-400">Last modified: {script.lastModified}</p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="border-cyan-500/20 hover:bg-cyan-500/10">
                  <Edit2 className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" className="border-red-500/20 hover:bg-red-500/10 text-red-500">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {filteredScripts.length === 0 && (
        <div className="text-center py-12">
          <MessageSquare className="h-12 w-12 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium">No scripts found</h3>
          <p className="text-gray-400">Try adjusting your search or create a new script</p>
        </div>
      )}
    </div>
  )
}

