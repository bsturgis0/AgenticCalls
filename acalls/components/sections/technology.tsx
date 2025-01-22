"use client"

import { motion } from "framer-motion"
import { Cpu, AudioWaveformIcon as Waveform, Brain, Network } from "lucide-react"

const features = [
  {
    icon: Cpu,
    title: "Advanced AI Processing",
    description: "State-of-the-art neural networks process conversations in real-time",
  },
  {
    icon: Waveform,
    title: "Natural Voice Synthesis",
    description: "Ultra-realistic voice generation that's indistinguishable from humans",
  },
  {
    icon: Brain,
    title: "Contextual Understanding",
    description: "Deep learning models that understand context and maintain conversation flow",
  },
  {
    icon: Network,
    title: "Adaptive Learning",
    description: "Systems that continuously learn and improve from each interaction",
  },
]

export function Technology() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-background" />

      <div className="container relative px-4 mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Powered by Cutting-Edge Technology</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our AI voice agents leverage the latest advancements in artificial intelligence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/20 to-transparent rounded-3xl blur-xl group-hover:opacity-75 transition-opacity" />
              <div className="relative p-6 rounded-3xl border border-cyan-500/20 bg-black/50 backdrop-blur-xl">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mb-4 group-hover:animate-pulse-glow">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">{feature.title}</h3>
                <p className="text-cyan-200/70">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

