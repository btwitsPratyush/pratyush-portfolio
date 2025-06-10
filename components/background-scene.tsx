"use client"

import type React from "react"

import { useRef, useMemo, useEffect, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

function BeautifulParticles({ count = 200 }) {
  const mesh = useRef<THREE.Points>(null)

  const { positions, colors, sizes } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)
    const sizes = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      // Wider spread for more coverage
      positions[i3] = (Math.random() - 0.5) * 12
      positions[i3 + 1] = (Math.random() - 0.5) * 12
      positions[i3 + 2] = (Math.random() - 0.5) * 8

      // Enhanced color palette with more variations
      const colorVariant = Math.random()
      if (colorVariant < 0.25) {
        // Hot pink
        colors[i3] = 1.0
        colors[i3 + 1] = 0.27
        colors[i3 + 2] = 0.8
      } else if (colorVariant < 0.5) {
        // Deep purple
        colors[i3] = 0.69
        colors[i3 + 1] = 0.15
        colors[i3 + 2] = 1.0
      } else if (colorVariant < 0.75) {
        // Light purple/magenta
        colors[i3] = 0.85
        colors[i3 + 1] = 0.4
        colors[i3 + 2] = 0.95
      } else {
        // Cyan accent
        colors[i3] = 0.3
        colors[i3 + 1] = 0.9
        colors[i3 + 2] = 0.9
      }

      // Varied particle sizes for depth
      sizes[i] = Math.random() * 0.8 + 0.2
    }

    return { positions, colors, sizes }
  }, [count])

  useFrame((state) => {
    if (mesh.current) {
      // Smooth, elegant rotation
      mesh.current.rotation.x = state.clock.getElapsedTime() * 0.01
      mesh.current.rotation.y = state.clock.getElapsedTime() * 0.015
      mesh.current.rotation.z = state.clock.getElapsedTime() * 0.005

      // Gentle floating animation
      mesh.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.1
    }
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
        <bufferAttribute attach="attributes-size" count={count} array={sizes} itemSize={1} />
      </bufferGeometry>
      <pointsMaterial
        size={0.04}
        vertexColors
        transparent
        opacity={0.85}
        sizeAttenuation={true}
        blending={THREE.AdditiveBlending}
      />
    </points>
  )
}

function FloatingOrbs({ count = 8 }) {
  const groupRef = useRef<THREE.Group>(null)

  const orbs = useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      position: [(Math.random() - 0.5) * 15, (Math.random() - 0.5) * 10, (Math.random() - 0.5) * 8] as [
        number,
        number,
        number,
      ],
      scale: Math.random() * 0.3 + 0.1,
      speed: Math.random() * 0.02 + 0.01,
      color: i % 3 === 0 ? "#ff44cc" : i % 3 === 1 ? "#b026ff" : "#00e5e5",
    }))
  }, [count])

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((child, i) => {
        const orb = orbs[i]
        child.rotation.x += orb.speed
        child.rotation.y += orb.speed * 0.7
        child.position.y += Math.sin(state.clock.getElapsedTime() + i) * 0.001
      })
    }
  })

  return (
    <group ref={groupRef}>
      {orbs.map((orb, index) => (
        <mesh key={index} position={orb.position} scale={orb.scale}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshBasicMaterial color={orb.color} transparent opacity={0.3} blending={THREE.AdditiveBlending} />
        </mesh>
      ))}
    </group>
  )
}

// Client-only wrapper component
function ClientOnlyCanvas({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="enhanced-fallback-bg" />
  }

  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 65 }}
      dpr={[0.5, 1.5]}
      frameloop="always"
      gl={{
        antialias: false,
        powerPreference: "high-performance",
        alpha: true,
        premultipliedAlpha: false,
      }}
    >
      {children}
    </Canvas>
  )
}

export default function BackgroundScene() {
  return (
    <div className="fixed inset-0 -z-10">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/20 to-black"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(255,68,204,0.3)_0%,transparent_50%)] animate-pulse"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(176,38,255,0.3)_0%,transparent_50%)] animate-pulse delay-1000"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,rgba(0,229,229,0.2)_0%,transparent_50%)] animate-pulse delay-2000"></div>
      <ClientOnlyCanvas>
        <BeautifulParticles />
        <FloatingOrbs />
      </ClientOnlyCanvas>
    </div>
  )
}
