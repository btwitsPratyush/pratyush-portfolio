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
    icon: <Mail className="h-5 w-5 sm:h-6 sm:w-6" />,
    href: "mailto:pratyushk537@gmail.com",
    label: "pratyushk537@gmail.com",
    color: "text-pink-400",
    hoverColor: "hover:text-pink-300",
  },
  {
    name: "X",
    icon: <XIcon className="h-5 w-5 sm:h-6 sm:w-6" />,
    href: "https://X.com/btwitsPratyush",
    label: "@btwitPratyush",
    color: "text-purple-400",
    hoverColor: "hover:text-purple-300",
  },
  {
    name: "GitHub",
    icon: <Github className="h-5 w-5 sm:h-6 sm:w-6" />,
    href: "https://github.com/btwitsPratyush",
    label: "btwitsPratyush",
    color: "text-blue-400",
    hoverColor: "hover:text-blue-300",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />,
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
        staggerChildren: isMobile ? 0.05 : 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: isMobile ? 0.2 : 0.4,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="contact" className="section performance-optimized">
      <div className="container mx-auto px-4 py-8 sm:py-12 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-gradient elegant-spacing">
            Let's Connect
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-2xl mx-auto px-4 elegant-spacing">
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
          {/* Optimized grid layout */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {socialLinks.map((link, index) => (
              <motion.div key={link.name} variants={itemVariants} className="text-center group">
                <motion.a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                  whileHover={isMobile ? {} : { scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {/* Optimized icon container */}
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-black/50 border border-white/10 ${link.color} ${link.hoverColor} transition-colors duration-200 mb-2 sm:mb-3`}
                  >
                    {link.icon}
                  </div>

                  {/* Optimized text */}
                  <h3
                    className={`text-sm sm:text-base md:text-lg font-semibold mb-1 ${link.color} ${link.hoverColor} transition-colors duration-200 elegant-spacing`}
                  >
                    {link.name}
                  </h3>

                  {/* Compact handle/email */}
                  <p className="text-xs sm:text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-200 break-all elegant-spacing">
                    {link.label}
                  </p>

                  {/* Subtle external link indicator */}
                  <div className="flex items-center justify-center mt-1 sm:mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                    <ExternalLink size={12} className="text-gray-500" />
                  </div>
                </motion.a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
