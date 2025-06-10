"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section id="home" className="section pt-16 sm:pt-20">
      <div className="elegant-container h-screen flex flex-col justify-center items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 lg:w-56 lg:h-56 mb-6 sm:mb-8 rounded-full overflow-hidden glow-effect profile-stable"
        >
          <Image src="/profile-pic.jpg" alt="Pratyush Kumar" fill className="object-cover" priority />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center px-4"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 flex items-center justify-center flex-wrap elegant-spacing">
            Hey, I'm Pratyush <span className="ml-2 inline-block wave-hand">👋</span>
          </h1>
          <h2 className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-4 sm:mb-6 elegant-spacing">
            Bachelor's in Information Technology
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed elegant-spacing">
            Passionate about developing innovative solutions that merge cutting-edge technology with practical
            applications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="scroll-indicator"
        >
          <ChevronDown className="animate-bounce" size={20} />
        </motion.div>
      </div>
    </section>
  )
}
