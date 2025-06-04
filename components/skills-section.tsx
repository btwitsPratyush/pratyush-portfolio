"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const skillCategories = [
  {
    title: "Languages:",
    skills: [
      { name: "C", color: "bg-gray-800/80 border border-purple-400/40 text-white" },
      { name: "C++", color: "bg-gray-800/80 border border-purple-400/40 text-white" },
      { name: "JAVA", color: "bg-gray-800/80 border border-purple-400/40 text-white" },
      { name: "PYTHON", color: "bg-gray-800/80 border border-purple-400/40 text-white" },
    ],
  },
  {
    title: "Frameworks and Libraries:",
    skills: [
      { name: "TENSORFLOW", color: "bg-gray-800/80 border border-purple-400/40 text-white" },
      { name: "REACT", color: "bg-gray-800/80 border border-purple-400/40 text-white" },
      { name: "NEXT.JS", color: "bg-gray-800/80 border border-purple-400/40 text-white" },
      { name: "NODE.JS", color: "bg-gray-800/80 border border-purple-400/40 text-white" },
      { name: "EXPRESS.JS", color: "bg-gray-800/80 border border-purple-400/40 text-white" },
      { name: "TAILWIND CSS", color: "bg-gray-800/80 border border-purple-400/40 text-white" },
    ],
  },
  {
    title: "Web Development:",
    skills: [
      { name: "HTML5", color: "bg-gray-800/80 border border-purple-400/40 text-white" },
      { name: "CSS3", color: "bg-gray-800/80 border border-purple-400/40 text-white" },
      { name: "JAVASCRIPT", color: "bg-gray-800/80 border border-purple-400/40 text-white" },
      { name: "TYPESCRIPT", color: "bg-gray-800/80 border border-purple-400/40 text-white" },
    ],
  },
  {
    title: "Backend Development:",
    skills: [
      { name: "NODE.JS", color: "bg-gray-800/80 border border-purple-400/40 text-white" },
      { name: "EXPRESS.JS", color: "bg-gray-800/80 border border-purple-400/40 text-white" },
      { name: "POSTGRESQL", color: "bg-gray-800/80 border border-purple-400/40 text-white" },
      { name: "MONGODB", color: "bg-gray-800/80 border border-purple-400/40 text-white" },
    ],
  },
  {
    title: "Other Tools:",
    skills: [
      { name: "GIT", color: "bg-gray-800/80 border border-purple-400/40 text-white" },
      { name: "DOCKER", color: "bg-gray-800/80 border border-purple-400/40 text-white" },
      { name: "SOLIDITY", color: "bg-gray-800/80 border border-purple-400/40 text-white" },
      { name: "MACHINE LEARNING", color: "bg-gray-800/80 border border-purple-400/40 text-white" },
    ],
  },
  {
    title: "IDEs:",
    skills: [
      { name: "VS CODE", color: "bg-gray-800/80 border border-purple-400/40 text-white" },
      { name: "PYCHARM", color: "bg-gray-800/80 border border-purple-400/40 text-white" },
    ],
  },
]

export default function SkillsSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="skills" className="section">
      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 text-gradient">
            My Skills
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Technologies and tools I work with
          </p>
        </motion.div>

        <div ref={ref} className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-4 sm:space-y-6 md:space-y-8"
          >
            {skillCategories.map((category, categoryIndex) => (
              <motion.div key={category.title} variants={itemVariants} className="space-y-2 sm:space-y-3 md:space-y-4">
                <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white flex items-center">
                  <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-neon-purple rounded-full mr-2 sm:mr-3"></span>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3 ml-3 sm:ml-4 md:ml-5">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ y: -2, transition: { duration: 0.2 } }}
                      className={`${skill.color} px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 rounded-md sm:rounded-lg font-medium text-xs sm:text-sm cursor-pointer transition-all duration-200 hover:border-neon-purple/70 hover:bg-gray-700/80`}
                    >
                      {skill.name}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
