"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { motion } from "framer-motion"
import { Phone, MessageSquare, Brain, Zap, BarChart, Shield } from "lucide-react"

const features = [
  {
    icon: Phone,
    title: "Natural Voice Interaction",
    description: "AI agents that sound and respond like real humans, providing natural conversations.",
  },
  {
    icon: MessageSquare,
    title: "Smart Conversation Flow",
    description: "Dynamic dialogue management that adapts to customer needs in real-time.",
  },
  {
    icon: Brain,
    title: "Contextual Understanding",
    description: "Advanced NLP for understanding context and maintaining conversation coherence.",
  },
  {
    icon: Zap,
    title: "Real-time Processing",
    description: "Lightning-fast response times with minimal latency for smooth interactions.",
  },
  {
    icon: BarChart,
    title: "Analytics Dashboard",
    description: "Comprehensive insights into call performance and customer interactions.",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description: "Bank-grade security measures to protect sensitive customer data.",
  },
]

export default function SolutionPage() {
  return (
    <main className="min-h-screen pt-24 bg-black">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-black to-black" />

        <div className="container relative px-4 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center mb-20"
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl mb-6 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Complete AI Voice Solution for Modern Businesses
            </h1>
            <p className="text-xl text-gray-400">
              Transform your customer interactions with our advanced AI voice technology
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
              >
                <Card className="p-6 bg-black/50 border-cyan-500/20 hover:border-cyan-500/40 transition-colors">
                  <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-cyan-500" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                  <p className="text-gray-400">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <h2 className="text-3xl font-bold mb-6">How It Works</h2>
              <div className="space-y-6">
                {[
                  {
                    title: "1. Initial Setup",
                    description:
                      "Quick integration with your existing phone system or start fresh with our cloud solution.",
                  },
                  {
                    title: "2. AI Training",
                    description: "Customize your AI agents with your brand voice and business rules.",
                  },
                  {
                    title: "3. Go Live",
                    description: "Deploy your AI agents and start handling calls immediately.",
                  },
                  {
                    title: "4. Continuous Improvement",
                    description: "AI agents learn and improve from each interaction.",
                  },
                ].map((step, index) => (
                  <div key={index} className="relative pl-8">
                    <div className="absolute left-0 top-2 w-2 h-2 rounded-full bg-cyan-500" />
                    <h3 className="text-xl font-semibold mb-2 text-white">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-cyan-500/20 rounded-lg blur-xl" />
              <Card className="relative bg-black/90 border-cyan-500/20">
                <video className="w-full rounded-lg" autoPlay loop muted playsInline poster="/placeholder.svg">
                  <source src="/placeholder.mp4" type="video/mp4" />
                </video>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-b from-black to-cyan-950/20">
        <div className="container px-4 mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-400 mb-8">Start your journey with Agentic Calls today</p>
            <Button className="bg-cyan-500 text-black hover:bg-cyan-400">Get Started</Button>
          </motion.div>
        </div>
      </section>
    </main>
  )
}

