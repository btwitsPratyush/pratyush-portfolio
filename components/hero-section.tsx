"use client"

import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section id="home" className="section pt-16 sm:pt-20">
      <div className="elegant-container min-h-screen flex flex-col justify-center items-center relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mb-6 sm:mb-8 rounded-full overflow-hidden glow-effect profile-stable mx-auto"
        >
          <Image
            src="/112186388.jpg"
            alt="Pratyush Kumar"
            fill
            className="object-cover"
            priority
            sizes="(max-width: 640px) 128px, (max-width: 768px) 160px, (max-width: 1024px) 192px, 224px"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center px-4 max-w-4xl mx-auto"
        >
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-4 flex items-center justify-center flex-wrap elegant-spacing">
            Hey, I'm Pratyush <span className="ml-2 inline-block wave-hand">👋</span>
          </h1>
          <h2 className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-300 mb-4 sm:mb-6 elegant-spacing">
            Bachelor's in Information Technology
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed elegant-spacing">
            Passionate about developing innovative solutions that merge cutting-edge technology with practical
            applications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
          className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 scroll-indicator"
        >
          <ChevronDown className="animate-bounce" size={20} />
        </motion.div>
      </div>
    </section>
  )
}
