"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section id="home" className="section pt-16 sm:pt-20">
      <div className="container mx-auto px-4 h-screen flex flex-col justify-center items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 mb-6 sm:mb-8 rounded-full overflow-hidden animate-float glow-effect"
        >
          <Image src="/profile-pic.jpg" alt="Pratyush Kumar" fill className="object-cover" priority />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center px-4"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-2 sm:mb-4 flex items-center justify-center flex-wrap">
            Hey, I'm Pratyush <span className="ml-2 inline-block animate-wave origin-[70%_70%]">👋</span>
          </h1>
          <h2 className="text-sm sm:text-base md:text-xl lg:text-2xl text-gray-300 mb-4 sm:mb-6">
            Bachelor's in Information Technology
          </h2>
          <p className="text-xs sm:text-sm md:text-base text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Passionate about developing innovative solutions that merge cutting-edge technology with practical
            applications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="scroll-indicator"
        >
          <ChevronDown className="animate-bounce" size={24} />
        </motion.div>
      </div>
    </section>
  )
}
