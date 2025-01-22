import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

const blogPosts = [
  {
    title: "The Future of AI Voice Agents in Business",
    excerpt: "Explore how AI voice agents are transforming business communication and customer service.",
    image: "/placeholder.svg",
    date: "January 22, 2024",
    category: "Technology",
  },
  {
    title: "5 Ways AI is Revolutionizing Call Centers",
    excerpt: "Discover the latest innovations in AI-powered call center solutions.",
    image: "/placeholder.svg",
    date: "January 20, 2024",
    category: "Industry",
  },
  {
    title: "Understanding Voice AI Technology",
    excerpt: "A deep dive into the technology behind modern voice AI systems.",
    image: "/placeholder.svg",
    date: "January 18, 2024",
    category: "Technology",
  },
]

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-24 bg-black">
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
            Latest Updates & Insights
          </h1>
          <p className="text-gray-400 text-lg">
            Stay up to date with the latest news, updates, and insights about AI voice technology and business
            communication.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post, index) => (
            <Card
              key={index}
              className="bg-black/50 border-cyan-500/20 overflow-hidden hover:border-cyan-500/40 transition-colors"
            >
              <Image
                src={post.image || "/placeholder.svg"}
                alt={post.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover"
              />
              <CardContent className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-cyan-500 text-sm">{post.category}</span>
                  <span className="text-gray-500 text-sm">{post.date}</span>
                </div>
                <h2 className="text-xl font-bold mb-2 text-white">{post.title}</h2>
                <p className="text-gray-400 mb-4">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.title.toLowerCase().replace(/ /g, "-")}`}
                  className="text-cyan-500 hover:text-cyan-400"
                >
                  Read more →
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}

