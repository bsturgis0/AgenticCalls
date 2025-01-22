import { Card } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { Phone, Clock, Users, BarChart } from "lucide-react"

const stats = [
  {
    title: "Active Calls",
    value: "12",
    icon: Phone,
    change: "+2.5%",
    trend: "up",
  },
  {
    title: "Total Call Duration",
    value: "1,234h",
    icon: Clock,
    change: "+12%",
    trend: "up",
  },
  {
    title: "Active Agents",
    value: "25",
    icon: Users,
    change: "0%",
    trend: "neutral",
  },
  {
    title: "Conversion Rate",
    value: "35%",
    icon: BarChart,
    change: "+4.3%",
    trend: "up",
  },
]

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-gray-400">Overview of your AI call center performance</p>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => (
          <Card key={stat.title} className="p-6 border-cyan-500/20 bg-black/50 backdrop-blur">
            <div className="flex items-center space-x-4">
              <div className="p-2 bg-cyan-500/10 rounded-lg">
                <stat.icon className="h-6 w-6 text-cyan-500" />
              </div>
              <div>
                <p className="text-sm font-medium text-gray-400">{stat.title}</p>
                <h2 className="text-2xl font-bold text-white">{stat.value}</h2>
              </div>
            </div>
            <div className="mt-4 flex items-center space-x-2">
              <span
                className={cn(
                  "text-sm",
                  stat.trend === "up" && "text-cyan-500",
                  stat.trend === "down" && "text-red-500",
                  stat.trend === "neutral" && "text-gray-500",
                )}
              >
                {stat.change}
              </span>
              <span className="text-sm text-gray-400">vs last month</span>
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}

