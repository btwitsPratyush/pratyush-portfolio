"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

const skillCategories = [
  {
    title: "Languages:",
    skills: [
      { name: "C", color: "bg-blue-600/40 border border-blue-400/50 text-white" },
      { name: "C++", color: "bg-blue-700/40 border border-blue-500/50 text-white" },
      { name: "JAVA", color: "bg-orange-600/40 border border-orange-400/50 text-white" },
      { name: "PYTHON", color: "bg-yellow-600/40 border border-yellow-400/50 text-white" },
    ],
  },
  {
    title: "Frameworks and Libraries:",
    skills: [
      { name: "TENSORFLOW", color: "bg-orange-600/40 border border-orange-400/50 text-white" },
      { name: "REACT", color: "bg-cyan-600/40 border border-cyan-400/50 text-white" },
      { name: "NEXT.JS", color: "bg-gray-700/40 border border-gray-500/50 text-white" },
      { name: "NODE.JS", color: "bg-green-600/40 border border-green-400/50 text-white" },
      { name: "EXPRESS.JS", color: "bg-gray-800/40 border border-gray-600/50 text-white" },
      { name: "TAILWIND CSS", color: "bg-teal-600/40 border border-teal-400/50 text-white" },
    ],
  },
  {
    title: "Web Development:",
    skills: [
      { name: "HTML5", color: "bg-orange-700/40 border border-orange-500/50 text-white" },
      { name: "CSS3", color: "bg-blue-600/40 border border-blue-400/50 text-white" },
      { name: "JAVASCRIPT", color: "bg-yellow-600/40 border border-yellow-400/50 text-white" },
      { name: "TYPESCRIPT", color: "bg-blue-800/40 border border-blue-600/50 text-white" },
    ],
  },
  {
    title: "Backend Development:",
    skills: [
      { name: "NODE.JS", color: "bg-green-600/40 border border-green-400/50 text-white" },
      { name: "EXPRESS.JS", color: "bg-gray-800/40 border border-gray-600/50 text-white" },
      { name: "POSTGRESQL", color: "bg-blue-900/40 border border-blue-700/50 text-white" },
      { name: "MONGODB", color: "bg-green-800/40 border border-green-600/50 text-white" },
    ],
  },
  {
    title: "Other Tools:",
    skills: [
      { name: "GIT", color: "bg-red-600/40 border border-red-400/50 text-white" },
      { name: "DOCKER", color: "bg-blue-600/40 border border-blue-400/50 text-white" },
      { name: "SOLIDITY", color: "bg-gray-700/40 border border-gray-500/50 text-white" },
      { name: "MACHINE LEARNING", color: "bg-purple-600/40 border border-purple-400/50 text-white" },
    ],
  },
  {
    title: "IDEs:",
    skills: [
      { name: "VS CODE", color: "bg-blue-700/40 border border-blue-500/50 text-white" },
      { name: "PYCHARM", color: "bg-green-700/40 border border-green-500/50 text-white" },
    ],
  },
]

export default function SkillsSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
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
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (
    <section id="skills" className="section">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">My Skills</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Technologies and tools I work with</p>
        </motion.div>

        <div ref={ref} className="max-w-4xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="space-y-8"
          >
            {skillCategories.map((category, categoryIndex) => (
              <motion.div key={category.title} variants={itemVariants} className="space-y-4">
                <h3 className="text-xl font-semibold text-white flex items-center">
                  <span className="w-2 h-2 bg-neon-purple rounded-full mr-3"></span>
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-3 ml-5">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      whileHover={{ scale: 1.05, y: -2, transition: { duration: 0.2 } }}
                      className={`${skill.color} px-4 py-2 rounded-lg font-medium text-sm cursor-pointer transition-all duration-300 hover:shadow-lg hover:border-neon-purple/70 hover:bg-neon-purple/20`}
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
