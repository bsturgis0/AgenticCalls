"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Phone } from "lucide-react"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function Navbar() {
  return (
    <header className="fixed top-0 w-full z-50 border-b border-cyan-500/20 bg-black/80 backdrop-blur supports-[backdrop-filter]:bg-black/60">
      <nav className="container flex h-16 max-w-screen-2xl items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2 z-20">
          <div className="relative">
            <div className="absolute -inset-1 bg-cyan-500 rounded-full blur opacity-40"></div>
            <Phone className="h-6 w-6 text-cyan-500 relative" />
          </div>
          <span className="font-bold text-white">Agentic Calls</span>
        </Link>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-gray-300">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] bg-black/95 border-cyan-500/20">
              <div className="flex flex-col space-y-4 mt-8">
                {["Solution", "Industries", "Pricing"].map((item) => (
                  <Link
                    key={item}
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-lg font-medium text-gray-300 hover:text-cyan-400 transition-colors"
                  >
                    {item}
                  </Link>
                ))}
                <div className="pt-4 border-t border-cyan-500/20">
                  <Link href="/login">
                    <Button
                      variant="ghost"
                      className="w-full text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10 mb-2"
                    >
                      Login
                    </Button>
                  </Link>
                  <Link href="/signup">
                    <Button className="w-full bg-cyan-500 text-black hover:bg-cyan-400">Sign up</Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Navigation */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <div className="hidden md:flex items-center justify-center space-x-8">
            {["Solution", "Industries", "Pricing"].map((item) => (
              <Link
                key={item}
                href={`/${item.toLowerCase().replace(" ", "-")}`}
                className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-500 transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Link href="/login">
            <Button variant="ghost" className="text-gray-300 hover:text-cyan-400 hover:bg-cyan-500/10">
              Login
            </Button>
          </Link>
          <Link href="/signup">
            <Button className="bg-cyan-500 text-black hover:bg-cyan-400">Sign up</Button>
          </Link>
        </div>
      </nav>
    </header>
  )
}

