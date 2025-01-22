import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-24 bg-black">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            About Agentic Calls
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            We're revolutionizing business communication through advanced AI technology, making human-like voice
            interactions accessible to businesses of all sizes.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Our Mission</h2>
            <p className="text-gray-400">
              To transform customer interactions by providing intelligent, scalable, and human-like voice AI solutions
              that enhance business communication while reducing operational costs.
            </p>
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Our Vision</h2>
            <p className="text-gray-400">
              To lead the future of business communication where AI voice agents seamlessly collaborate with humans,
              creating more efficient and engaging customer experiences.
            </p>
          </div>
        </div>

        <div className="border border-cyan-500/20 rounded-2xl p-8 mb-16 bg-black/50 backdrop-blur">
          <h2 className="text-2xl font-bold text-white mb-6">Company Timeline</h2>
          <div className="space-y-8">
            {[
              {
                year: "2023",
                title: "Company Founded",
                description: "Agentic Calls was established with a vision to revolutionize voice AI.",
              },
              { year: "2023", title: "First Major Release", description: "Launched our core AI voice agent platform." },
              {
                year: "2024",
                title: "Global Expansion",
                description: "Expanded operations to serve clients worldwide.",
              },
            ].map((event, index) => (
              <div key={index} className="flex gap-6">
                <div className="text-cyan-500 font-bold w-20">{event.year}</div>
                <div>
                  <h3 className="font-bold text-white mb-2">{event.title}</h3>
                  <p className="text-gray-400">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Join Our Team</h2>
          <p className="text-gray-400 mb-8">We're always looking for talented individuals to join our mission.</p>
          <Link href="/careers">
            <Button className="bg-cyan-500 text-black hover:bg-cyan-400">View Open Positions</Button>
          </Link>
        </div>
      </div>
    </main>
  )
}

