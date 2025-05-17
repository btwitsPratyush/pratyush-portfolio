"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { FileText, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const blogPosts = [
  {
    title: "How Frontend Devs Can Enter Web3 (Even Without Solidity)",
    link: "https://medium.com/@pratyushk537/how-frontend-devs-can-enter-web3-even-without-solidity-6eef997ce90c",
  },
  {
    title: "Why Great Frontend Developers Outshine Most Full-Stack Developers",
    link: "https://medium.com/@pratyushk537/why-great-frontend-developers-outshine-most-full-stack-developers-21ba65202280",
  },
]

export default function BlogsSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <section id="blogs" className="section">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Blogs</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Sharing my thoughts and insights on technology</p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto"
        >
          <motion.div variants={itemVariants} className="card-gradient rounded-xl p-8">
            <div className="flex justify-center mb-6">
              <div className="bg-neon-purple/20 p-4 rounded-full">
                <FileText size={40} className="text-neon-purple" />
              </div>
            </div>

            <h3 className="text-2xl font-bold mb-4 text-center">Featured Articles</h3>

            <div className="space-y-4 mb-6">
              {blogPosts.map((post, index) => (
                <a
                  key={index}
                  href={post.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 rounded-lg bg-black/30 hover:bg-neon-purple/20 transition-colors"
                >
                  <div className="flex justify-between items-center">
                    <span className="text-white font-medium">{post.title}</span>
                    <ExternalLink size={16} className="text-neon-teal flex-shrink-0 ml-2" />
                  </div>
                </a>
              ))}
            </div>

            <div className="text-center">
              <Button
                variant="outline"
                size="lg"
                className="border-neon-purple hover:bg-neon-purple/20 mx-auto"
                asChild
              >
                <a
                  href="https://medium.com/@pratyushk537"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <span>Read More on Medium</span>
                  <ExternalLink size={16} />
                </a>
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
