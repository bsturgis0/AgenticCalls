"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Phone } from "lucide-react"

export default function SignupPage() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Add registration logic here
    setTimeout(() => setIsLoading(false), 1000)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-4">
      <Card className="w-full max-w-md border-cyan-500/20 bg-black/50 backdrop-blur">
        <CardHeader className="space-y-4 text-center">
          <div className="flex justify-center mb-4">
            <div className="relative">
              <div className="absolute -inset-1 bg-cyan-500 rounded-full blur opacity-40"></div>
              <Phone className="w-8 h-8 text-cyan-500 relative" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold">Create an account</CardTitle>
          <CardDescription>Get started with Agentic Calls</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">First name</label>
                <Input
                  placeholder="Enter your first name"
                  className="bg-white/5 border-cyan-500/20 text-white placeholder:text-gray-500"
                  required
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Last name</label>
                <Input
                  placeholder="Enter your last name"
                  className="bg-white/5 border-cyan-500/20 text-white placeholder:text-gray-500"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Email</label>
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-white/5 border-cyan-500/20 text-white placeholder:text-gray-500"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Password</label>
              <Input
                type="password"
                placeholder="Create a password"
                className="bg-white/5 border-cyan-500/20 text-white placeholder:text-gray-500"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Confirm Password</label>
              <Input
                type="password"
                placeholder="Confirm your password"
                className="bg-white/5 border-cyan-500/20 text-white placeholder:text-gray-500"
                required
              />
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" className="form-checkbox text-cyan-500" required />
              <label className="text-sm text-gray-400">
                I agree to the{" "}
                <Link href="/terms" className="text-cyan-500 hover:text-cyan-400">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="text-cyan-500 hover:text-cyan-400">
                  Privacy Policy
                </Link>
              </label>
            </div>
            <Button type="submit" className="w-full bg-cyan-500 text-black hover:bg-cyan-400" disabled={isLoading}>
              {isLoading ? "Creating account..." : "Create account"}
            </Button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-400">
              Already have an account?{" "}
              <Link href="/login" className="text-cyan-500 hover:text-cyan-400">
                Sign in
              </Link>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

