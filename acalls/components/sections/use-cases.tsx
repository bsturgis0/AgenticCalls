"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const useCases = [
  {
    title: "Customer Service",
    description: "Handle customer inquiries 24/7 with AI agents that provide consistent, helpful responses",
    image: "/placeholder.svg",
  },
  {
    title: "Appointment Scheduling",
    description: "Automate appointment booking and confirmation calls across multiple time zones",
    image: "/appointment.jpg",
  },
  {
    title: "Lead Qualification",
    description: "Pre-qualify leads through natural conversation before routing to sales teams",
    image: "/placeholder.svg",
  },
]

export function UseCases() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container relative px-4 mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Transform Your Business Communications</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how our AI voice agents can revolutionize different aspects of your business
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="group"
            >
              <div className="relative h-64 mb-6 rounded-3xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10" />
                <Image
                  src={useCase.image || "/placeholder.svg"}
                  alt={useCase.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2">{useCase.title}</h3>
              <p className="text-muted-foreground">{useCase.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

