import { Building2, Car, ShoppingBag, Stethoscope, GraduationCap, Home } from "lucide-react"
import { Button } from "@/components/ui/button"

const industries = [
  {
    icon: Building2,
    title: "Real Estate",
    description: "Automate property inquiries and scheduling viewings",
  },
  {
    icon: Car,
    title: "Automotive",
    description: "Handle service appointments and sales inquiries",
  },
  {
    icon: ShoppingBag,
    title: "Retail",
    description: "Manage customer service and order status calls",
  },
  {
    icon: Stethoscope,
    title: "Healthcare",
    description: "Schedule appointments and handle patient inquiries",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description: "Manage enrollment and information requests",
  },
  {
    icon: Home,
    title: "Home Services",
    description: "Book appointments and handle service requests",
  },
]

export function Industries() {
  return (
    <section className="py-24">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">Industries We Serve</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our AI voice agents are customized for various industries to provide the best possible experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {industries.map((industry, index) => (
            <div key={index} className="p-6 rounded-xl border bg-card hover:bg-accent transition-colors">
              <div className="w-12 h-12 rounded-lg bg-[#00FF8C]/10 flex items-center justify-center mb-4">
                <industry.icon className="w-6 h-6 text-[#00FF8C]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{industry.title}</h3>
              <p className="text-muted-foreground">{industry.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-[#00FF8C] text-black hover:bg-[#00FF8C]/90">
            Start Free Trial
          </Button>
        </div>
      </div>
    </section>
  )
}

