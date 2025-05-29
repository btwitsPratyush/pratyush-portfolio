"use client"

import { useRef, useMemo, useEffect, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Stars } from "@react-three/drei"
import type * as THREE from "three"

function Particles({ count = 600 }) {
  const mesh = useRef<THREE.Points>(null)

  // Generate particles once and memoize
  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      positions[i3] = (Math.random() - 0.5) * 6
      positions[i3 + 1] = (Math.random() - 0.5) * 6
      positions[i3 + 2] = (Math.random() - 0.5) * 6

      colors[i3] = Math.random() * 0.5 + 0.5
      colors[i3 + 1] = Math.random() * 0.2
      colors[i3 + 2] = Math.random() * 0.5 + 0.5
    }

    return { positions, colors }
  }, [count])

  useFrame((state) => {
    if (mesh.current) {
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
      <pointsMaterial size={0.02} vertexColors transparent opacity={0.4} sizeAttenuation />
    </points>
  )
}

export default function BackgroundScene() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Reduce complexity on mobile
  const particleCount = isMobile ? 400 : 400
  const starCount = isMobile ? 400 : 300

  return (
    <div className="canvas-container">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 75 }}
        performance={{ min: 0.3 }}
        dpr={isMobile ? [0.5, 1] : [1, 1.5]}
        frameloop="demand"
      >
        <ambientLight intensity={0.08} />
        <pointLight position={[10, 10, 10]} intensity={0.2} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.15} color="#b026ff" />

        <Particles count={particleCount} />
        <Stars radius={60} depth={30} count={starCount} factor={2} fade speed={0.3} />
      </Canvas>
    </div>
  )
}
