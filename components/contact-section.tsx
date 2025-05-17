"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Mail, Github, Twitter, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"

const socialLinks = [
  {
    name: "Email",
    icon: <Mail className="h-5 w-5" />,
    href: "mailto:pratyushk537@gmail.com",
    label: "pratyushk537@gmail.com",
  },
  {
    name: "Twitter",
    icon: <Twitter className="h-5 w-5" />,
    href: "https://twitter.com/btwitPratyush",
    label: "@btwitPratyush",
  },
  {
    name: "GitHub",
    icon: <Github className="h-5 w-5" />,
    href: "https://github.com/btwitsPratyush",
    label: "btwitsPratyush",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="h-5 w-5" />,
    href: "https://www.linkedin.com/in/pratyush-kumar-3302b0229",
    label: "Pratyush Kumar",
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
    hidden: { y: 20, opacity: 0 },
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
    <section id="contact" className="section">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Get In Touch</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Feel free to reach out to me through any of these platforms
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {socialLinks.map((link) => (
              <motion.div
                key={link.name}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="flex flex-col"
              >
                <Button
                  variant="outline"
                  className="w-full justify-start gap-3 border-neon-purple/50 hover:bg-neon-purple/20 h-auto py-4"
                  asChild
                >
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className="flex flex-col items-start">
                    <div className="flex items-center gap-3 mb-1">
                      {link.icon}
                      <span className="font-semibold">{link.name}</span>
                    </div>
                    <span className="text-gray-400 text-sm">{link.label}</span>
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
