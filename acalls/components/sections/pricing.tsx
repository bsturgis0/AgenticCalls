"use client"

import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

const plans = [
  {
    name: "Starter",
    price: "49",
    description: "Perfect for small businesses",
    features: [
      "Up to 100 calls per month",
      "1 AI voice agent",
      "Basic analytics",
      "Email support",
      "Standard voice quality",
    ],
  },
  {
    name: "Professional",
    price: "149",
    description: "Ideal for growing companies",
    features: [
      "Up to 500 calls per month",
      "3 AI voice agents",
      "Advanced analytics",
      "Priority support",
      "HD voice quality",
      "Custom voice training",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations",
    features: [
      "Unlimited calls",
      "Unlimited AI agents",
      "Enterprise analytics",
      "24/7 dedicated support",
      "Ultra HD voice quality",
      "Custom integration",
      "SLA guarantee",
    ],
  },
]

export function Pricing() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-black to-black" />

      <div className="container relative px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Simple, Transparent Pricing</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">Choose the perfect plan for your business needs</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="relative"
            >
              {plan.popular && (
                <>
                  <div className="absolute -inset-[1px] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur-lg opacity-50" />
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-3 py-1 bg-cyan-500 text-black text-sm font-medium rounded-full">
                    Most Popular
                  </div>
                </>
              )}
              <div
                className={`relative h-full p-8 rounded-xl border bg-black/50 backdrop-blur ${plan.popular ? "border-cyan-500" : "border-cyan-500/20"}`}
              >
                <div className="mb-6">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="mb-4">
                    <span className="text-4xl font-bold">{plan.price === "Custom" ? "Custom" : `$${plan.price}`}</span>
                    {plan.price !== "Custom" && <span className="text-gray-400">/month</span>}
                  </div>
                  <p className="text-gray-400">{plan.description}</p>
                </div>

                <Button
                  className={`w-full mb-6 ${
                    plan.popular
                      ? "bg-cyan-500 text-black hover:bg-cyan-400"
                      : "bg-transparent border border-cyan-500 text-cyan-500 hover:bg-cyan-500/10"
                  }`}
                >
                  Get Started
                </Button>

                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded-full bg-cyan-500/10 flex items-center justify-center">
                        <Check className="w-3 h-3 text-cyan-500" />
                      </div>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-4">All plans include:</p>
          <div className="flex flex-wrap justify-center gap-4">
            {["24/7 Support", "99.9% Uptime", "SSL Security", "API Access"].map((feature, index) => (
              <span key={index} className="px-3 py-1 rounded-full border border-cyan-500/20 text-sm text-gray-300">
                {feature}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

