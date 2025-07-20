"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

const Particle = ({ style }: { style: React.CSSProperties }) => <div className="particle" style={style} />

export default function CSSParticleBackground() {
  const [particles, setParticles] = useState<React.CSSProperties[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const generateParticles = () => {
      const newParticles: React.CSSProperties[] = []
      const numParticles = window.innerWidth < 768 ? 50 : 100 // Fewer particles on mobile

      for (let i = 0; i < numParticles; i++) {
        const size = Math.random() * 2 + 1 // 1px to 3px
        const duration = Math.random() * 10 + 5 // 5s to 15s
        const delay = Math.random() * 10 // 0s to 10s
        const x = Math.random() * 100 // 0% to 100% width
        const y = Math.random() * 100 // 0% to 100% height
        const opacity = Math.random() * 0.5 + 0.2 // 0.2 to 0.7

        newParticles.push({
          width: `${size}px`,
          height: `${size}px`,
          left: `${x}%`,
          top: `${y}%`,
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
          opacity: opacity,
          backgroundColor: `rgba(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255}, ${opacity})`, // Random color with opacity
          filter: `blur(${Math.random() * 0.5}px)`, // Subtle blur
        })
      }
      setParticles(newParticles)
    }

    generateParticles()
    window.addEventListener("resize", generateParticles) // Regenerate on resize for responsiveness

    return () => {
      window.removeEventListener("resize", generateParticles)
    }
  }, [])

  return (
    <div ref={containerRef} className="css-particle-container">
      {particles.map((style, index) => (
        <Particle key={index} style={style} />
      ))}
    </div>
  )
}
