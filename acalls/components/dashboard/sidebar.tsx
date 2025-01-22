"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { BarChart, Phone, History, Settings, Users, MessageSquare, LogOut } from "lucide-react"

const sidebarLinks = [
  {
    title: "Overview",
    href: "/dashboard",
    icon: BarChart,
  },
  {
    title: "Active Calls",
    href: "/dashboard/calls",
    icon: Phone,
  },
  {
    title: "Call History",
    href: "/dashboard/history",
    icon: History,
  },
  {
    title: "AI Agents",
    href: "/dashboard/agents",
    icon: Users,
  },
  {
    title: "Chat Scripts",
    href: "/dashboard/scripts",
    icon: MessageSquare,
  },
  {
    title: "Settings",
    href: "/dashboard/settings",
    icon: Settings,
  },
]

export function DashboardSidebar() {
  const pathname = usePathname()

  return (
    <div className="flex flex-col w-64 border-r border-cyan-500/20 bg-black/80">
      <div className="p-6">
        <Link href="/" className="flex items-center space-x-2">
          <div className="relative">
            <div className="absolute -inset-1 bg-cyan-500 rounded-full blur opacity-40"></div>
            <Phone className="h-6 w-6 text-cyan-500 relative" />
          </div>
          <span className="font-bold text-white">Agentic Calls</span>
        </Link>
      </div>
      <nav className="flex-1 px-4 pb-4">
        {sidebarLinks.map((link) => {
          const isActive = pathname === link.href
          return (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center space-x-2 px-3 py-2 rounded-lg mb-1 transition-colors",
                isActive ? "bg-cyan-500/10 text-cyan-500" : "text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/5",
              )}
            >
              <link.icon className="h-5 w-5" />
              <span>{link.title}</span>
            </Link>
          )
        })}
      </nav>
      <div className="p-4 border-t border-cyan-500/20">
        <button className="flex items-center space-x-2 px-3 py-2 w-full rounded-lg text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/5 transition-colors">
          <LogOut className="h-5 w-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  )
}

