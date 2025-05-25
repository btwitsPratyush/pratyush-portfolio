"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Mail, Github, Twitter, Linkedin, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

const socialLinks = [
  {
    name: "Email",
    icon: <Mail className="h-6 w-6" />,
    href: "mailto:pratyushk537@gmail.com",
    label: "pratyushk537@gmail.com",
    description: "Send me an email",
  },
  {
    name: "Twitter",
    icon: <Twitter className="h-6 w-6" />,
    href: "https://twitter.com/btwitPratyush",
    label: "@btwitPratyush",
    description: "Follow me on Twitter",
  },
  {
    name: "GitHub",
    icon: <Github className="h-6 w-6" />,
    href: "https://github.com/btwitsPratyush",
    label: "btwitsPratyush",
    description: "Check out my repositories",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="h-6 w-6" />,
    href: "https://www.linkedin.com/in/pratyush-kumar-3302b0229",
    label: "Pratyush Kumar",
    description: "Connect professionally",
  },
]

export default function ContactSection() {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <section id="contact" className="section">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Let's Connect</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Get in touch with me through these platforms</p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {socialLinks.map((link, index) => (
              <motion.div
                key={link.name}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="relative bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-sm border border-neon-purple/20 rounded-xl overflow-hidden shadow-lg group"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/0 via-neon-blue/0 to-neon-teal/0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-neon-purple/20 p-3 rounded-full mt-1">{link.icon}</div>

                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-1 group-hover:text-neon-purple transition-colors">
                        {link.name}
                      </h3>

                      <div className="text-gray-300 mb-3">
                        <span className="text-neon-teal">{link.label}</span>
                      </div>

                      <p className="text-gray-400 text-sm mb-3">{link.description}</p>

                      <Button
                        variant="ghost"
                        className="p-0 h-auto text-neon-blue hover:text-neon-purple flex items-center gap-2 group-hover:translate-x-1 transition-transform"
                        asChild
                      >
                        <a href={link.href} target="_blank" rel="noopener noreferrer">
                          Connect <ExternalLink size={14} />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
                  <div className="absolute transform rotate-45 bg-neon-purple/20 text-neon-purple w-24 h-5 -right-6 top-6"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
