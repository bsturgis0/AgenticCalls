import { Hero } from "@/components/sections/hero"
import { Technology } from "@/components/sections/technology"
import { UseCases } from "@/components/sections/use-cases"
import { Features } from "@/components/sections/features"
import { Industries } from "@/components/sections/industries"

export default function Home() {
  return (
    <main className="bg-black text-white">
      <Hero />
      <Technology />
      <UseCases />
      <Features />
      <Industries />
    </main>
  )
}

