"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Award, ExternalLink, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"

const certifications = [
  {
    title: "Introduction to Blockchain Technology",
    issuer: "LearnTube.ai",
    date: "2025",
    link: "https://learntube.ai/verify/certificate/74bd9f6c-9f3d-4ab8-ac82-03c6910c4c7f",
  },
  {
    title: "AWS Cloud Practitioner",
    issuer: "Udemy",
    date: "2025",
    link: "https://www.udemy.com/course/awscertified/",
  },
  {
    title: "DevOps Certification",
    issuer: "OneRoadmap",
    date: "2025",
    link: "https://oneroadmap.io/skills/devops/certificate/CERT-4FF83248",
  },
  {
    title: "Cybersecurity Analyst Job Simulation",
    issuer: "Tata Group - Forage",
    date: "2025",
    link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/ifobHAoMjQs9s6bKS/gmf3ypEXBj2wvfQWC_ifobHAoMjQs9s6bKS_tEkB7mtgvWiKdNfj9_1745182166607_completion_certificate.pdf",
  },
]

export default function CertificationsSection() {
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

  return (
    <section id="certifications" className="section">
      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 sm:mb-12 md:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-2 sm:mb-4 text-gradient">
            Certifications
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400 max-w-2xl mx-auto px-4">
            Professional certifications and courses
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                variants={itemVariants}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                className="relative bg-gradient-to-br from-black/60 to-black/40 backdrop-blur-sm border border-neon-purple/20 rounded-xl overflow-hidden shadow-lg group"
              >
                {/* Glow effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-neon-purple/0 via-neon-blue/0 to-neon-teal/0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>

                <div className="p-4 sm:p-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div className="bg-neon-purple/20 p-2 sm:p-3 rounded-full mt-1">
                      <Award size={20} className="text-neon-purple sm:w-6 sm:h-6" />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold mb-1 group-hover:text-neon-purple transition-colors">
                        {cert.title}
                      </h3>

                      <div className="flex items-center text-gray-300 mb-2 sm:mb-3 text-xs sm:text-sm">
                        <span className="mr-2 sm:mr-3">{cert.issuer}</span>
                        <span className="flex items-center text-neon-teal">
                          <Calendar size={12} className="mr-1 sm:w-3.5 sm:h-3.5" />
                          {cert.date}
                        </span>
                      </div>

                      <Button
                        variant="ghost"
                        className="p-0 h-auto text-neon-blue hover:text-neon-purple flex items-center gap-1 sm:gap-2 group-hover:translate-x-1 transition-transform text-xs sm:text-sm"
                        asChild
                      >
                        <a href={cert.link} target="_blank" rel="noopener noreferrer">
                          View Certificate <ExternalLink size={12} className="sm:w-3.5 sm:h-3.5" />
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-12 h-12 sm:w-16 sm:h-16 overflow-hidden">
                  <div className="absolute transform rotate-45 bg-neon-purple/20 text-neon-purple w-16 h-4 sm:w-24 sm:h-5 -right-4 top-4 sm:-right-6 sm:top-6"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
