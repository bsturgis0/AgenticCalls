"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold tracking-tight">Settings</h1>
        <p className="text-gray-400">Manage your account and preferences</p>
      </div>

      <Tabs defaultValue="general" className="space-y-6">
        <TabsList className="bg-black/50 border border-cyan-500/20">
          <TabsTrigger value="general">General</TabsTrigger>
          <TabsTrigger value="notifications">Notifications</TabsTrigger>
          <TabsTrigger value="billing">Billing</TabsTrigger>
          <TabsTrigger value="api">API</TabsTrigger>
        </TabsList>

        <TabsContent value="general">
          <Card className="p-6 border-cyan-500/20 bg-black/50">
            <h2 className="text-lg font-medium mb-4">Account Information</h2>
            <div className="space-y-4">
              <div className="grid gap-2">
                <label className="text-sm font-medium">Company Name</label>
                <Input placeholder="Enter company name" className="bg-black/50 border-cyan-500/20" />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium">Email Address</label>
                <Input type="email" placeholder="Enter email" className="bg-black/50 border-cyan-500/20" />
              </div>
              <div className="grid gap-2">
                <label className="text-sm font-medium">Phone Number</label>
                <Input type="tel" placeholder="Enter phone number" className="bg-black/50 border-cyan-500/20" />
              </div>
              <Button className="bg-cyan-500 text-black hover:bg-cyan-400">Save Changes</Button>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card className="p-6 border-cyan-500/20 bg-black/50">
            <h2 className="text-lg font-medium mb-4">Notification Preferences</h2>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Email Notifications</p>
                  <p className="text-sm text-gray-400">Receive updates via email</p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Call Alerts</p>
                  <p className="text-sm text-gray-400">Get notified about new calls</p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Weekly Reports</p>
                  <p className="text-sm text-gray-400">Receive weekly performance reports</p>
                </div>
                <Switch />
              </div>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="billing">
          <Card className="p-6 border-cyan-500/20 bg-black/50">
            <h2 className="text-lg font-medium mb-4">Billing Information</h2>
            <div className="space-y-4">
              <div className="grid gap-2">
                <label className="text-sm font-medium">Card Number</label>
                <Input type="text" placeholder="**** **** **** ****" className="bg-black/50 border-cyan-500/20" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <label className="text-sm font-medium">Expiry Date</label>
                  <Input type="text" placeholder="MM/YY" className="bg-black/50 border-cyan-500/20" />
                </div>
                <div className="grid gap-2">
                  <label className="text-sm font-medium">CVC</label>
                  <Input type="text" placeholder="***" className="bg-black/50 border-cyan-500/20" />
                </div>
              </div>
              <Button className="bg-cyan-500 text-black hover:bg-cyan-400">Update Billing</Button>
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="api">
          <Card className="p-6 border-cyan-500/20 bg-black/50">
            <h2 className="text-lg font-medium mb-4">API Settings</h2>
            <div className="space-y-4">
              <div className="grid gap-2">
                <label className="text-sm font-medium">API Key</label>
                <div className="flex gap-2">
                  <Input
                    type="password"
                    value="************************"
                    readOnly
                    className="bg-black/50 border-cyan-500/20"
                  />
                  <Button variant="outline" className="border-cyan-500/20">
                    Copy
                  </Button>
                </div>
              </div>
              <Button className="bg-cyan-500 text-black hover:bg-cyan-400">Generate New Key</Button>
            </div>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

