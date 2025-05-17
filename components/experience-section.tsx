"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Award, Code } from "lucide-react"

const experiences = [
  {
    title: "MERN Stack Developer Intern",
    company: "DXT creators.corp",
    period: "2025 - Present",
    description: [
      "Developed full-stack web applications using MongoDB, Express, React, and Node.js",
      "Collaborated with design and product teams to implement responsive user interfaces",
      "Participated in code reviews and implemented best practices for web development",
    ],
    icon: <Code size={32} className="text-neon-blue" />,
  },
  {
    title: "Lead Organizer",
    company: "Ignition Hackathon",
    period: "2025 - Present",
    description: [
      "Lead Member of the Organizing Team for the university's premier hackathon event",
      "Coordinated technical requirements, participant communications, and event logistics",
    ],
    icon: <Award size={32} className="text-neon-teal" />,
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
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
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
          className="max-w-3xl mx-auto"
        >
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.title + exp.company}
              variants={itemVariants}
              className="card-gradient rounded-xl p-6 mb-8 flex flex-col md:flex-row items-start gap-6"
            >
              <div className="bg-neon-purple/20 p-4 rounded-full mt-1">{exp.icon}</div>

              <div className="flex-1">
                <h3 className="text-xl font-bold mb-1">{exp.title}</h3>
                <p className="text-neon-teal mb-3">
                  {exp.company} • {exp.period}
                </p>

                {Array.isArray(exp.description) ? (
                  <ul className="list-disc pl-5 space-y-1 text-gray-300">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-300">{exp.description}</p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
