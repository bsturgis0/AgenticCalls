import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, MessageSquare, MapPin } from "lucide-react"

export default function ContactPage() {
  return (
    <main className="min-h-screen pt-24 bg-black">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            Get in Touch
          </h1>
          <p className="text-gray-400 text-lg">Have questions about our AI voice agents? We're here to help.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="bg-black/50 border-cyan-500/20">
            <CardContent className="p-6">
              <form className="space-y-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Name</label>
                  <Input
                    className="bg-white/5 border-cyan-500/20 text-white placeholder:text-gray-500"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Email</label>
                  <Input
                    className="bg-white/5 border-cyan-500/20 text-white placeholder:text-gray-500"
                    type="email"
                    placeholder="your@email.com"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Message</label>
                  <Textarea
                    className="bg-white/5 border-cyan-500/20 text-white placeholder:text-gray-500"
                    placeholder="How can we help?"
                    rows={6}
                  />
                </div>
                <Button className="w-full bg-cyan-500 text-black hover:bg-cyan-400">Send Message</Button>
              </form>
            </CardContent>
          </Card>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-cyan-500" />
                  <div>
                    <p className="text-gray-300">Email</p>
                    <p className="text-white">contact@agenticcalls.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MessageSquare className="w-5 h-5 text-cyan-500" />
                  <div>
                    <p className="text-gray-300">Live Chat</p>
                    <p className="text-white">Available 24/7</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-5 h-5 text-cyan-500" />
                  <div>
                    <p className="text-gray-300">Location</p>
                    <p className="text-white">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="border border-cyan-500/20 rounded-lg p-6">
              <h3 className="text-xl font-bold text-white mb-4">FAQ</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium text-white mb-2">How quickly can I get started?</h4>
                  <p className="text-gray-400">You can start using our AI voice agents within minutes of signing up.</p>
                </div>
                <div>
                  <h4 className="font-medium text-white mb-2">Do you offer custom solutions?</h4>
                  <p className="text-gray-400">Yes, we provide customized solutions tailored to your business needs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

