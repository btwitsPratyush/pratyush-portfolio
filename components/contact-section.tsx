"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Mail, Github, Linkedin, ExternalLink } from "lucide-react"
import { useEffect, useState } from "react"

// Custom X (formerly Twitter) icon component
const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const socialLinks = [
  {
    name: "Email",
    icon: <Mail size={20} className="text-pink-400 sm:w-6 sm:h-6" />,
    href: "mailto:pratyushk537@gmail.com",
    label: "pratyushk537@gmail.com",
    color: "text-pink-400",
    hoverColor: "hover:text-pink-300",
  },
  {
    name: "X",
    icon: <XIcon className="h-5 w-5 sm:h-6 sm:w-6 text-purple-400" />,
    href: "https://X.com/btwitsPratyush",
    label: "@btwitPratyush",
    color: "text-purple-400",
    hoverColor: "hover:text-purple-300",
  },
  {
    name: "GitHub",
    icon: <Github size={20} className="text-blue-400 sm:w-6 sm:h-6" />,
    href: "https://github.com/btwitsPratyush",
    label: "btwitsPratyush",
    color: "text-blue-400",
    hoverColor: "hover:text-blue-300",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin size={20} className="text-cyan-400 sm:w-6 sm:h-6" />,
    href: "https://www.linkedin.com/in/pratyush-kumar-3302b0229",
    label: "Pratyush Kumar",
    color: "text-cyan-400",
    hoverColor: "hover:text-cyan-300",
  },
]

export default function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

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
      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 text-gradient">
            Let's Connect
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Get in touch with me through these platforms
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {socialLinks.map((link, index) => (
              <motion.div
                key={link.name}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="relative bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-sm border border-neon-purple/20 rounded-xl overflow-hidden shadow-lg group"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/0 via-neon-blue/0 to-neon-teal/0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

                <div className="p-4 sm:p-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="bg-neon-purple/20 p-2 sm:p-3 rounded-full mt-1">{link.icon}</div>

                    <div className="flex-1">
                      <h3
                        className={`text-base sm:text-lg md:text-xl font-bold mb-1 ${link.color} ${link.hoverColor} transition-colors`}
                      >
                        {link.name}
                      </h3>

                      <p className="text-gray-300 mb-2 sm:mb-3 text-xs sm:text-sm break-all">{link.label}</p>

                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1 sm:gap-2 text-xs sm:text-sm ${link.color} ${link.hoverColor} group-hover:translate-x-1 transition-all duration-200`}
                      >
                        Connect <ExternalLink size={12} className="sm:w-3.5 sm:h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 overflow-hidden">
                  <div className="absolute transform rotate-45 bg-neon-purple/20 text-neon-purple w-16 h-4 sm:w-24 sm:h-5 -right-4 top-4 sm:-right-6 sm:top-6"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
