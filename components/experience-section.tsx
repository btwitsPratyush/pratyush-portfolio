"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Award, Code, MapPin, Zap } from "lucide-react"

const experiences = [
  {
    title: "MERN Stack Developer Intern",
    company: "Dxt Creators",
    location: "Noida",
    period: "May 2025 - Present",
    description: [
      "Developed full-stack web applications using MongoDB, Express, React, and Node.js",
      "Participated in code reviews and implemented best practices for web development",
    ],
    icon: <Code size={20} className="text-neon-purple sm:w-6 sm:h-6" />,
    current: true,
    remote: true,
  },
  {
    title: "Lead Organizer",
    company: "Ignition Hackathon",
    period: "March 2025",
    description: [
      "Lead Member of the Organizing Team for the university's premier hackathon event.",
      "Participated and coordinated technical requirements, participant communications, and event logistics.",
    ],
    icon: <Award size={20} className="text-neon-purple sm:w-6 sm:h-6" />,
    current: false,
    remote: false,
  },
]

export default function ExperienceSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
      },
    },
  }

  const lightningVariants = {
    animate: {
      scale: [1, 1.2, 1],
      rotate: [0, 5, -5, 0],
      opacity: [0.8, 1, 0.8],
      filter: [
        "drop-shadow(0 0 10px rgba(176, 38, 255, 0.7))",
        "drop-shadow(0 0 20px rgba(176, 38, 255, 1))",
        "drop-shadow(0 0 10px rgba(176, 38, 255, 0.7))",
      ],
      transition: {
        duration: 2,
        repeat: Number.POSITIVE_INFINITY,
        repeatType: "loop",
        ease: "easeInOut",
      },
    },
  }

  return (
    <section id="experience" className="section">
      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 text-gradient">
            Experience
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            My professional journey
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-5xl mx-auto relative"
        >
          {/* Lightning bolt indicator at the top */}
          <motion.div
            className="absolute left-1/2 transform -translate-x-1/2 top-0 -mt-6 sm:-mt-8 z-10"
            variants={lightningVariants}
            animate="animate"
          >
            <div className="relative">
              <Zap size={24} className="text-neon-purple fill-neon-purple sm:w-8 sm:h-8" />
              <div className="absolute inset-0 bg-neon-purple/30 blur-lg rounded-full"></div>
            </div>
          </motion.div>

          {/* Experience items - Equal height grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mt-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title + exp.company}
                variants={itemVariants}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="group relative"
              >
                {/* Smooth gradient background with texture */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black/60 to-blue-900/20 rounded-2xl blur-sm"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/60 to-black/80 rounded-2xl"></div>

                {/* Main content container with equal height */}
                <div className="relative bg-gradient-to-br from-black/50 to-black/70 backdrop-blur-sm border border-neon-purple/30 rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl min-h-[280px] sm:min-h-[320px] md:min-h-[350px] flex flex-col transition-all duration-500 ease-out group-hover:border-neon-purple/60 group-hover:shadow-purple-500/20">
                  {/* Animated glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/0 via-neon-blue/0 to-neon-teal/0 opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-2xl"></div>

                  <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6 relative z-10">
                    <motion.div
                      className="bg-gradient-to-br from-neon-purple/30 to-neon-blue/20 p-2 sm:p-3 rounded-full backdrop-blur-sm border border-neon-purple/40"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                    >
                      {exp.icon}
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 group-hover:text-neon-purple transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <p className="text-neon-teal text-xs sm:text-sm md:text-base flex items-center gap-1 sm:gap-2 flex-wrap">
                        <span className="font-semibold">{exp.company}</span>
                        <span className="text-gray-400">•</span>
                        <span>{exp.period}</span>
                        {exp.location && (
                          <>
                            <span className="text-gray-400">•</span>
                            <span className="flex items-center gap-1">
                              <MapPin size={12} className="text-purple-400 sm:w-3.5 sm:h-3.5" />
                              <span className="text-purple-400 font-semibold">
                                {exp.location}
                                {exp.remote && <span className="text-purple-400"> (Remote)</span>}
                              </span>
                            </span>
                          </>
                        )}
                      </p>
                    </div>
                  </div>

                  {/* Description with flex-grow to fill remaining space */}
                  <div className="flex-grow relative z-10">
                    {Array.isArray(exp.description) ? (
                      <ul className="list-disc space-y-2 text-gray-300 text-xs sm:text-sm md:text-base pl-4 sm:pl-6 leading-relaxed">
                        {exp.description.map((item, i) => (
                          <motion.li
                            key={i}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                          >
                            {item}
                          </motion.li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">{exp.description}</p>
                    )}
                  </div>

                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 overflow-hidden">
                    <div className="absolute transform rotate-45 bg-gradient-to-r from-neon-purple/20 to-neon-blue/20 w-24 h-6 -right-6 top-6 group-hover:from-neon-purple/30 group-hover:to-neon-blue/30 transition-all duration-300"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
