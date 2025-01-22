"use client"

import { Button } from "@/components/ui/button"
import { DemoCall } from "@/components/demo-call"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-16 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-cyan-900/20 via-black to-black" />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(6,182,212,0.1) 0%, transparent 50%)",
        }}
      />

      <div className="container relative px-4 mx-auto">
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-bold tracking-tight sm:text-6xl mb-6 bg-gradient-to-br from-white to-gray-400 bg-clip-text text-transparent">
            Voice AI tech is ready to handle phone calls and behave like{" "}
            <span className="text-cyan-500 inline-block animate-pulse">real people</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            Be among the first to take advantage of our revolutionary AI voice agents
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Button
              size="lg"
              className="bg-cyan-500 text-black hover:bg-cyan-400 hover:scale-105 transition-all hover:shadow-[0_0_30px_rgba(6,182,212,0.5)]"
            >
              Try Demo
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-cyan-500 text-cyan-500 hover:bg-cyan-500/10 hover:text-cyan-400"
            >
              Watch Video
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-md mx-auto"
        >
          <DemoCall />
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-20" />
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        <div className="w-1 h-1 rounded-full bg-cyan-500 animate-pulse" />
        <div className="w-1 h-1 rounded-full bg-cyan-500 animate-pulse delay-75" />
        <div className="w-1 h-1 rounded-full bg-cyan-500 animate-pulse delay-150" />
      </div>
    </section>
  )
}

