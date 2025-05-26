"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export default function AboutSection() {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  })

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="about" className="section">
      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-20">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={variants}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 sm:mb-8 text-center text-gradient"
          >
            About Me
          </motion.h2>

          <motion.div
            variants={itemVariants}
            className="card-gradient rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 shadow-xl"
          >
            <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4">
              I'm currently pursuing my Bachelor's degree in Information Technology, passionate about developing
              innovative solutions that merge cutting-edge technology with practical applications.
            </p>

            <p className="text-sm sm:text-base md:text-lg leading-relaxed mb-3 sm:mb-4">
              My journey in tech has led me to explore various domains including web development, artificial
              intelligence, and cloud computing. I'm particularly interested in AI applications in healthcare, which led
              to my brain tumor detection project using CNN.
            </p>

            <p className="text-sm sm:text-base md:text-lg leading-relaxed">
              When I'm not coding, I enjoy writing blogs, exploring new technologies, contributing to open-source
              projects, and expanding my knowledge through online courses and certifications. I find that blogging helps
              me solidify my understanding of complex concepts while sharing knowledge with the wider tech community.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
