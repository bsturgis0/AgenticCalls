export interface Call {
  id: string
  type: "inbound" | "outbound"
  status: "active" | "completed" | "failed"
  phoneNumber: string
  startTime: Date
  endTime?: Date
  duration?: number
  prompt?: string
  agentName?: string
}

