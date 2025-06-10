"use client"

import { useRef, useMemo, useEffect, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import type * as THREE from "three"

function OptimizedParticles({ count = 150 }) {
  const mesh = useRef<THREE.Points>(null)

  // Highly optimized particle generation
  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      positions[i3] = (Math.random() - 0.5) * 6
      positions[i3 + 1] = (Math.random() - 0.5) * 6
      positions[i3 + 2] = (Math.random() - 0.5) * 6

      // Simplified color palette for better performance
      const colorVariant = Math.random()
      if (colorVariant < 0.5) {
        // Pink
        colors[i3] = 1.0
        colors[i3 + 1] = 0.3
        colors[i3 + 2] = 0.8
      } else {
        // Purple
        colors[i3] = 0.8
        colors[i3 + 1] = 0.2
        colors[i3 + 2] = 1.0
      }
    }

    return { positions, colors }
  }, [count])

  useFrame((state) => {
    if (mesh.current) {
      // Very slow, smooth rotation for minimal CPU usage
      mesh.current.rotation.x = state.clock.getElapsedTime() * 0.01
      mesh.current.rotation.y = state.clock.getElapsedTime() * 0.015
    }
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.04} vertexColors transparent opacity={0.8} sizeAttenuation={false} />
    </points>
  )
}

export default function BackgroundScene() {
  const [isMobile, setIsMobile] = useState(false)
  const [isLowEnd, setIsLowEnd] = useState(false)

  useEffect(() => {
    const checkDevice = () => {
      const mobile = window.innerWidth < 768
      setIsMobile(mobile)

      // Detect low-end devices
      const isLowEndDevice =
        mobile &&
        (navigator.hardwareConcurrency <= 4 ||
          navigator.deviceMemory <= 4 ||
          /Android.*Chrome\/[0-6]/.test(navigator.userAgent))
      setIsLowEnd(isLowEndDevice)
    }

    checkDevice()
    window.addEventListener("resize", checkDevice)
    return () => window.removeEventListener("resize", checkDevice)
  }, [])

  // Aggressive optimization for mobile
  const particleCount = isLowEnd ? 80 : isMobile ? 120 : 200

  // Don't render 3D on very low-end devices
  if (isLowEnd && navigator.hardwareConcurrency <= 2) {
    return (
      <div className="canvas-container">
        <div className="fallback-bg"></div>
      </div>
    )
  }

  return (
    <div className="canvas-container">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        performance={{ min: 0.8 }}
        dpr={isMobile ? [0.5, 0.8] : [0.8, 1.2]}
        frameloop="always"
        gl={{
          antialias: false,
          powerPreference: "high-performance",
          alpha: false,
          premultipliedAlpha: false,
          stencil: false,
          depth: false,
        }}
      >
        <color attach="background" args={["#000000"]} />
        <ambientLight intensity={0.2} />
        <pointLight position={[5, 5, 5]} intensity={0.3} color="#ff44cc" />

        <OptimizedParticles count={particleCount} />
      </Canvas>
    </div>
  )
}
