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
  },
  {
    title: "FLEX Gym Landing Page",
    description:
      "Modern, high-converting landing page for FLEX GYM, featuring dynamic 3D animations and a responsive design",
    image: "/flex-gym-screenshot.jpg",
    link: "https://fastidious-granita-2717ad.netlify.app/",
    github: "https://github.com/btwitsPratyush/Flex-gym",
    tags: ["React", "Three.js", "Framer Motion", "Tailwind CSS"],
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
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">My Projects</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Some of my recent work</p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              className="card-gradient rounded-xl overflow-hidden shadow-xl"
            >
              <div className="relative h-60 w-full">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span key={tag} className="bg-black/30 text-neon-teal px-3 py-1 rounded-full text-sm">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {project.link && (
                    <Button
                      variant="outline"
                      className="flex items-center gap-2 border-neon-purple hover:bg-neon-purple/20"
                      asChild
                    >
                      <a href={project.link} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} />
                        View Project
                      </a>
                    </Button>
                  )}

                  {project.github && (
                    <Button
                      variant="outline"
                      className="flex items-center gap-2 border-neon-blue hover:bg-neon-blue/20"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github size={16} />
                        GitHub
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
