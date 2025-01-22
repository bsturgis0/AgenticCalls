import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const positions = [
  {
    title: "AI Research Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Join our team to develop cutting-edge voice AI technologies.",
  },
  {
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description: "Build and maintain our core platform and infrastructure.",
  },
  {
    title: "Product Manager",
    department: "Product",
    location: "Remote",
    type: "Full-time",
    description: "Shape the future of our AI voice agent platform.",
  },
]

export default function CareersPage() {
  return (
    <main className="min-h-screen pt-24 bg-black">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            Join Our Team
          </h1>
          <p className="text-gray-400 text-lg mb-8">
            Help us shape the future of business communication with AI voice technology.
          </p>
        </div>

        <div className="grid gap-8 mb-16">
          {positions.map((position, index) => (
            <Card key={index} className="bg-black/50 border-cyan-500/20">
              <CardContent className="p-6">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h2 className="text-xl font-bold mb-2 text-white">{position.title}</h2>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline" className="border-cyan-500 text-cyan-500">
                        {position.department}
                      </Badge>
                      <Badge variant="outline" className="border-cyan-500 text-cyan-500">
                        {position.location}
                      </Badge>
                      <Badge variant="outline" className="border-cyan-500 text-cyan-500">
                        {position.type}
                      </Badge>
                    </div>
                    <p className="text-gray-400 mb-6">{position.description}</p>
                  </div>
                  <Button className="bg-cyan-500 text-black hover:bg-cyan-400">Apply Now</Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Don't see the right position?</h2>
          <p className="text-gray-400 mb-8">
            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future
            opportunities.
          </p>
          <Button className="bg-cyan-500 text-black hover:bg-cyan-400">Submit Resume</Button>
        </div>
      </div>
    </main>
  )
}

