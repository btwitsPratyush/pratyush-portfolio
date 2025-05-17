"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Award, ExternalLink } from "lucide-react"
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
    <section id="certifications" className="section">
      <div className="container mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gradient">Certifications</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">Professional certifications and courses</p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="max-w-3xl mx-auto"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              variants={itemVariants}
              className="card-gradient rounded-xl p-6 mb-8 flex flex-col md:flex-row items-start md:items-center gap-6"
            >
              <div className="bg-neon-purple/20 p-4 rounded-full">
                <Award size={32} className="text-neon-purple" />
              </div>

              <div className="flex-1">
                <h3 className="text-xl font-bold mb-1">{cert.title}</h3>
                <p className="text-gray-300 mb-2">
                  {cert.issuer} • {cert.date}
                </p>

                <Button variant="link" className="p-0 h-auto text-neon-blue flex items-center gap-2" asChild>
                  <a href={cert.link} target="_blank" rel="noopener noreferrer">
                    View Certificate <ExternalLink size={14} />
                  </a>
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
