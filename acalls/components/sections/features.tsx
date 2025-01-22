import { Bot, Phone, Brain, Zap, BarChart, Lock } from "lucide-react"

const features = [
  {
    icon: Bot,
    title: "AI Voice Agents",
    description: "Natural-sounding AI agents that handle calls with human-like understanding",
  },
  {
    icon: Phone,
    title: "24/7 Availability",
    description: "Never miss a call with round-the-clock automated response system",
  },
  {
    icon: Brain,
    title: "Smart Learning",
    description: "AI agents learn and improve from each interaction",
  },
  {
    icon: Zap,
    title: "Instant Setup",
    description: "Quick no-code setup process to get your AI agents running",
  },
  {
    icon: BarChart,
    title: "Analytics Dashboard",
    description: "Comprehensive insights into call performance and metrics",
  },
  {
    icon: Lock,
    title: "Secure & Compliant",
    description: "Enterprise-grade security and regulatory compliance",
  },
]

export function Features() {
  return (
    <section className="py-24 bg-muted/50">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Complete AI Call Center Solution</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transform your business communications with our comprehensive AI-powered call center platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-background rounded-xl border">
              <div className="w-12 h-12 rounded-lg bg-[#00FF8C]/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-[#00FF8C]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

