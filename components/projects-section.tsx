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
        ease: "easeOut",
      },
    },
  }

  const itemVariants = {
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 20,
      },
    },
  }

  return (
    <section id="projects" className="section">
      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
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
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-7xl mx-auto"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              whileHover={{
                y: -12,
                scale: 1.02,
                transition: { duration: 0.4, ease: "easeOut" },
              }}
              className="group relative"
            >
              {/* Smooth gradient background with texture */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black/60 to-blue-900/20 rounded-2xl blur-sm"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-gray-900/60 to-black/80 rounded-2xl"></div>

              <div className="relative bg-gradient-to-br from-black/60 to-black/80 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden shadow-2xl hover:border-neon-purple/50 transition-all duration-500 ease-out group-hover:shadow-purple-500/20">
                {/* Category Badge */}
                <div className="absolute top-2 left-2 sm:top-4 sm:left-4 z-20">
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    className={`px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs font-semibold backdrop-blur-sm ${
                      project.category === "Major Project"
                        ? "bg-gradient-to-r from-orange-500/30 to-red-500/30 text-orange-300 border border-orange-400/40"
                        : "bg-gradient-to-r from-teal-500/30 to-cyan-500/30 text-teal-300 border border-teal-400/40"
                    }`}
                  >
                    {project.category}
                  </motion.span>
                </div>

                {/* Enhanced Image Container for Mobile */}
                <div className="relative h-40 sm:h-48 md:h-56 lg:h-64 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
                  <Image
                    src={project.image || "/placeholder.svg?height=300&width=400"}
                    alt={project.title}
                    fill
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    priority={index === 0}
                    quality={90}
                    style={{
                      objectFit: "cover",
                      objectPosition: "center",
                    }}
                  />

                  {/* Overlay gradient for better text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
                </div>

                {/* Content with smooth texture */}
                <div className="relative p-3 sm:p-4 md:p-6 bg-gradient-to-br from-black/70 to-black/90">
                  {/* Animated glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/0 via-neon-blue/0 to-neon-teal/0 opacity-0 group-hover:opacity-10 transition-all duration-500"></div>

                  <div className="relative z-10">
                    <h3 className="text-base sm:text-lg md:text-xl font-bold mb-2 sm:mb-3 group-hover:text-neon-purple transition-colors duration-400 leading-tight">
                      {project.title}
                    </h3>

                    <p className="text-gray-300 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1 sm:gap-2 mb-4 sm:mb-6">
                      {project.tags.map((tag, tagIndex) => (
                        <motion.span
                          key={tag}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: tagIndex * 0.1, duration: 0.3 }}
                          whileHover={{ scale: 1.05 }}
                          className="bg-black/60 text-neon-teal px-2 py-1 rounded-full text-xs border border-neon-teal/30 backdrop-blur-sm hover:border-neon-teal/50 transition-all duration-300"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    <div className="flex gap-2 sm:gap-3 flex-wrap">
                      {project.link && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex items-center gap-1 sm:gap-2 border-neon-purple/50 hover:bg-neon-purple/20 text-xs backdrop-blur-sm transition-all duration-300 hover:scale-105"
                          asChild
                        >
                          <a href={project.link} target="_blank" rel="noopener noreferrer">
                            <ExternalLink size={12} className="sm:w-3.5 sm:h-3.5" />
                            <span className="hidden xs:inline">Live Demo</span>
                            <span className="xs:hidden">Demo</span>
                          </a>
                        </Button>
                      )}

                      {project.github && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex items-center gap-1 sm:gap-2 border-neon-blue/50 hover:bg-neon-blue/20 text-xs backdrop-blur-sm transition-all duration-300 hover:scale-105"
                          asChild
                        >
                          <a href={project.github} target="_blank" rel="noopener noreferrer">
                            <Github size={12} className="sm:w-3.5 sm:h-3.5" />
                            <span className="hidden xs:inline">GitHub</span>
                            <span className="xs:hidden">Code</span>
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Enhanced glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/0 via-neon-blue/0 to-neon-teal/0 opacity-0 group-hover:opacity-15 transition-opacity duration-500 pointer-events-none rounded-2xl"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
