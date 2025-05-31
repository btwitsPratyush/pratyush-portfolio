"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Mail, Github, Linkedin, ExternalLink } from "lucide-react"

// Custom X (formerly Twitter) icon component
const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const socialLinks = [
  {
    name: "Email",
    icon: <Mail className="h-6 w-6 sm:h-8 sm:w-8" />,
    href: "mailto:pratyushk537@gmail.com",
    label: "pratyushk537@gmail.com",
    color: "text-pink-400",
    hoverColor: "hover:text-pink-300",
  },
  {
    name: "X",
    icon: <XIcon className="h-6 w-6 sm:h-8 sm:w-8" />,
    href: "https://X.com/btwitsPratyush",
    label: "@btwitPratyush",
    color: "text-purple-400",
    hoverColor: "hover:text-purple-300",
  },
  {
    name: "GitHub",
    icon: <Github className="h-6 w-6 sm:h-8 sm:w-8" />,
    href: "https://github.com/btwitsPratyush",
    label: "btwitsPratyush",
    color: "text-blue-400",
    hoverColor: "hover:text-blue-300",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="h-6 w-6 sm:h-8 sm:w-8" />,
    href: "https://www.linkedin.com/in/pratyush-kumar-3302b0229",
    label: "Pratyush Kumar",
    color: "text-cyan-400",
    hoverColor: "hover:text-cyan-300",
  },
]

export default function ContactSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
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
          className="text-center mb-12 sm:mb-16 md:mb-20"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-gradient">
            Let's Connect
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto px-4">
            Get in touch with me through these platforms
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Clean grid layout without boxes - same on mobile and desktop */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-12">
            {socialLinks.map((link, index) => (
              <motion.div key={link.name} variants={itemVariants} className="text-center group">
                <motion.a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {/* Icon with glow effect */}
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-sm border border-white/10 ${link.color} ${link.hoverColor} transition-all duration-300 group-hover:border-white/30 group-hover:shadow-lg group-hover:shadow-current/20 mb-3 sm:mb-4`}
                  >
                    {link.icon}
                  </div>

                  {/* Platform name */}
                  <h3
                    className={`text-base sm:text-lg md:text-xl font-bold mb-1 sm:mb-2 ${link.color} ${link.hoverColor} transition-colors duration-300`}
                  >
                    {link.name}
                  </h3>

                  {/* Handle/Email */}
                  <p className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-300 break-all">
                    {link.label}
                  </p>

                  {/* Subtle external link indicator */}
                  <div className="flex items-center justify-center mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ExternalLink size={14} className="text-gray-500" />
                  </div>
                </motion.a>
              </motion.div>
            ))}
          </div>

          {/* Removed the pink line at the bottom as requested */}
        </motion.div>
      </div>
    </section>
  )
}
