"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "NeuroScan AI",
    description: "Brain tumor detection application using MRI images and CNN (Convolutional Neural Networks)",
    image: "/brain-scan.jpg",
    link: "https://symphonious-custard-2ca344.netlify.app",
    github: "https://github.com/btwitsPratyush",
    tags: ["Python", "TensorFlow", "CNN", "Healthcare"],
    category: "Major Project",
  },
  {
    title: "FLEX Gym",
    description: "Modern, high-converting model website for FLEX GYM, featuring dynamic 3D animations and design",
    image: "/flex-gym-screenshot.jpg",
    link: "https://fastidious-granita-2717ad.netlify.app/",
    github: "https://github.com/btwitsPratyush/Flex-gym",
    tags: ["React", "Three.js", "Framer Motion", "Tailwind CSS"],
    category: "Minor Project",
  },
  {
    title: "Bella Italia Restaurant",
    description: "A modern model restaurant website built with React, TypeScript, and Tailwind CSS",
    image: "/bella-italia-screenshot.jpg",
    link: "https://coruscating-mooncake-cde773.netlify.app/",
    github: "https://github.com/btwitsPratyush/Bella-Italia",
    tags: ["React", "TypeScript", "Tailwind CSS", "Design"],
    category: "Minor Project",
  },
]

export default function ProjectsSection() {
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
    hidden: { y: 50, opacity: 0 },
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
    <section id="projects" className="section">
      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 text-gradient">
            My Projects
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Some of my recent work
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-sm border border-white/10 rounded-xl sm:rounded-2xl overflow-hidden shadow-xl hover:border-neon-purple/50 transition-all duration-300"
            >
              {/* Category Badge */}
              <div className="absolute top-2 left-2 sm:top-4 sm:left-4 z-10">
                <span
                  className={`px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-semibold ${
                    project.category === "Major Project"
                      ? "bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-400 border border-orange-400/30"
                      : "bg-neon-teal/20 text-neon-teal border border-neon-teal/30"
                  }`}
                >
                  {project.category}
                </span>
              </div>

              <div className="relative h-32 sm:h-40 md:h-48 lg:h-56 w-full overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover object-top group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>

              <div className="p-3 sm:p-4 md:p-6">
                <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 group-hover:text-neon-purple transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-black/40 text-neon-teal px-2 py-1 rounded-full text-xs border border-neon-teal/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-2 sm:gap-3 flex-wrap">
                  {project.link && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-1 sm:gap-2 border-neon-purple/50 hover:bg-neon-purple/20 text-xs"
                      asChild
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={12} className="sm:w-3.5 sm:h-3.5" />
                        Live Demo
                      </a>
                    </Button>
                  )}

                  {project.github && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center gap-1 sm:gap-2 border-neon-blue/50 hover:bg-neon-blue/20 text-xs"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={12} className="sm:w-3.5 sm:h-3.5" />
                        GitHub
                      </a>
                    </Button>
                  )}
                </div>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/0 via-neon-blue/0 to-neon-teal/0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
