"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Award, Code, MapPin } from 'lucide-react'

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
    triggerOnce: true,
    threshold: 0.2,
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
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="experience" className="section">
      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
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
          className="max-w-5xl mx-auto"
        >
          {/* Experience items - Equal height grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title + exp.company}
                variants={itemVariants}
                className="group relative"
              >
                {/* Main content container with equal height */}
                <div className="relative bg-black/60 backdrop-blur-sm border border-neon-purple/30 rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl min-h-[280px] sm:min-h-[320px] md:min-h-[350px] flex flex-col transition-all duration-300 hover:border-neon-purple/60 hover:bg-black/70">
                  <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
                    <div className="bg-neon-purple/20 p-2 sm:p-3 rounded-full border border-neon-purple/40">
                      {exp.icon}
                    </div>
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
                  <div className="flex-grow">
                    {Array.isArray(exp.description) ? (
                      <ul className="list-disc space-y-2 text-gray-300 text-xs sm:text-sm md:text-base pl-4 sm:pl-6 leading-relaxed">
                        {exp.description.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    ) : (
                      <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed">{exp.description}</p>
                    )}
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
