//calls/components/dashboard/sidebar.tsx
"use client"

import { useRouter } from "next/navigation"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { BarChart, Phone, History, Settings, Users, MessageSquare, LogOut, ChevronLeft } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"

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
  const router = useRouter()

  const handleLogout = async () => {
    // Add your logout logic here
    // For example:
    // await signOut()
    router.push("/login")
  }

  return (
    <Sidebar>
      <SidebarHeader className="border-b border-cyan-500/20 p-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative">
              <div className="absolute -inset-1 bg-cyan-500 rounded-full blur opacity-40"></div>
              <Phone className="h-6 w-6 text-cyan-500 relative" />
            </div>
            <span className="font-bold">Agentic Calls</span>
          </Link>
          <SidebarTrigger />
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {sidebarLinks.map((link) => (
            <SidebarMenuItem key={link.href}>
              <SidebarMenuButton asChild isActive={pathname === link.href} tooltip={link.title}>
                <Link href={link.href} className="flex items-center gap-2">
                  <link.icon className="h-5 w-5" />
                  <span>{link.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter className="border-t border-cyan-500/20 p-4">
        <Button
          variant="ghost"
          className="w-full justify-start gap-2 text-red-500 hover:text-red-600 hover:bg-red-500/10"
          onClick={handleLogout}
        >
          <LogOut className="h-5 w-5" />
          <span>Logout</span>
        </Button>
      </SidebarFooter>
    </Sidebar>
  )
}

