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
    icon: <Code size={24} className="text-neon-purple" />,
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
    icon: <Award size={24} className="text-neon-purple" />,
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
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Experience</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">My professional journey</p>
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
            className="absolute left-1/2 transform -translate-x-1/2 top-0 -mt-8 z-10"
            variants={lightningVariants}
            animate="animate"
          >
            <div className="relative">
              <Zap size={32} className="text-neon-purple fill-neon-purple" />
              <div className="absolute inset-0 bg-neon-purple/30 blur-lg rounded-full"></div>
            </div>
          </motion.div>

          {/* Vertical timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-neon-purple via-neon-blue to-neon-teal"></div>

          {/* Experience items */}
          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title + exp.company}
                variants={itemVariants}
                className={`relative flex items-center ${
                  exp.side === "left" ? "justify-start" : "justify-end"
                } md:${exp.side === "left" ? "pr-8" : "pl-8"}`}
              >
                {/* Content */}
                <div
                  className={`w-full md:w-[45%] bg-black/50 backdrop-blur-sm border border-neon-purple/30 rounded-2xl p-8 shadow-2xl ${
                    exp.side === "left" ? "md:mr-auto" : "md:ml-auto"
                  }`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-neon-purple/20 p-3 rounded-full">{exp.icon}</div>
                    <div>
                      <h3 className="text-2xl font-bold">{exp.title}</h3>
                      <p className="text-neon-teal text-base flex items-center gap-2 flex-wrap">
                        {exp.company} • {exp.period}
                        {exp.location && (
                          <span className="flex items-center gap-1">
                            <MapPin size={14} className="text-purple-400" />
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
                    <ul className="list-disc space-y-2 text-gray-300 text-base pl-6">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-300 text-base">{exp.description}</p>
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
