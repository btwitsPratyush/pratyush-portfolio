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
    side: "left",
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
    side: "right",
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
          className="max-w-6xl mx-auto relative"
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

          {/* Vertical timeline line - hidden on mobile, visible on larger screens */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-neon-purple via-neon-blue to-neon-teal"></div>

          {/* Experience items */}
          <div className="space-y-8 md:space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title + exp.company}
                variants={itemVariants}
                className={`relative flex items-center justify-center md:${
                  exp.side === "left" ? "justify-start pr-8" : "justify-end pl-8"
                }`}
              >
                {/* Content */}
                <div
                  className={`w-full md:w-[45%] bg-black/50 backdrop-blur-sm border border-neon-purple/30 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-2xl ${
                    exp.side === "left" ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="bg-neon-purple/20 p-2 sm:p-3 rounded-full">{exp.icon}</div>
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-bold">{exp.title}</h3>
                      <p className="text-neon-teal text-xs sm:text-sm md:text-base flex items-center gap-1 sm:gap-2 flex-wrap">
                        {exp.company} • {exp.period}
                        {exp.location && (
                          <span className="flex items-center gap-1">
                            <MapPin size={12} className="text-purple-400 sm:w-3.5 sm:h-3.5" />
                            <span className="text-purple-400 font-semibold">
                              {exp.location}
                              {exp.remote && <span className="text-purple-400"> (Remote)</span>}
                            </span>
                          </span>
                        )}
                      </p>
                    </div>
                  </div>

                  {Array.isArray(exp.description) ? (
                    <ul className="list-disc space-y-1 sm:space-y-2 text-gray-300 text-xs sm:text-sm md:text-base pl-4 sm:pl-6">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-300 text-xs sm:text-sm md:text-base">{exp.description}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
