import { CallHistory } from "@/components/calls/call-history"
import { InitiateCall } from "@/components/calls/initiate-call"
import { ActiveCalls } from "@/components/calls/active-calls"

export function DashboardPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Call Center Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-8">
          <InitiateCall />
          <ActiveCalls />
        </div>
        <CallHistory />
      </div>
    </div>
  )
}

