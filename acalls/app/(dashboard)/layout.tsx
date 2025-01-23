//calls/app/(dasboard)/layout.tsx
"use client"

import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import { DashboardSidebar } from "@/components/dashboard/sidebar"

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen pt-16">
      <SidebarProvider defaultOpen={true}>
        <div className="flex min-h-[calc(100vh-4rem)]">
          <DashboardSidebar />
          <SidebarInset>
            <main className="flex-1 overflow-y-auto">
              <div className="container mx-auto p-6">{children}</div>
            </main>
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  )
}

