"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Code2, Database, Globe, Server, Cpu, GitBranch } from "lucide-react"

const skills = [
  { name: "HTML/CSS", icon: <Globe className="w-8 h-8 mb-4 text-neon-blue" /> },
  { name: "TypeScript", icon: <Code2 className="w-8 h-8 mb-4 text-neon-blue" /> },
  { name: "React", icon: <Code2 className="w-8 h-8 mb-4 text-neon-pink" /> },
  { name: "Java", icon: <Cpu className="w-8 h-8 mb-4 text-neon-teal" /> },
  { name: "Python", icon: <Code2 className="w-8 h-8 mb-4 text-neon-green" /> },
  { name: "SQL", icon: <Database className="w-8 h-8 mb-4 text-neon-purple" /> },
  { name: "Git", icon: <GitBranch className="w-8 h-8 mb-4 text-neon-pink" /> },
  { name: "AWS", icon: <Server className="w-8 h-8 mb-4 text-neon-teal" /> },
  { name: "Blockchain", icon: <Database className="w-8 h-8 mb-4 text-neon-purple" /> },
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

        <div ref={ref}>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-2 md:grid-cols-3 gap-6"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                variants={itemVariants}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="skill-card card-gradient rounded-xl p-6 flex flex-col items-center text-center"
              >
                {skill.icon}
                <h4 className="text-xl font-semibold">{skill.name}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
