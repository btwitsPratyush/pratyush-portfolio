"use client"

import { useRef, useMemo, useEffect, useState } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import type * as THREE from "three"

function PinkParticles({ count = 600 }) {
  const mesh = useRef<THREE.Points>(null)

  // Generate pink/purple particles like in the screenshot
  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      positions[i3] = (Math.random() - 0.5) * 10
      positions[i3 + 1] = (Math.random() - 0.5) * 10
      positions[i3 + 2] = (Math.random() - 0.5) * 10

      // Pink/Purple/Magenta color palette like in screenshot
      const colorVariant = Math.random()
      if (colorVariant < 0.4) {
        // Bright pink
        colors[i3] = 1.0 // R
        colors[i3 + 1] = 0.2 // G
        colors[i3 + 2] = 0.8 // B
      } else if (colorVariant < 0.7) {
        // Purple
        colors[i3] = 0.7 // R
        colors[i3 + 1] = 0.1 // G
        colors[i3 + 2] = 1.0 // B
      } else {
        // Magenta
        colors[i3] = 1.0 // R
        colors[i3 + 1] = 0.0 // G
        colors[i3 + 2] = 1.0 // B
      }
    }

    return { positions, colors }
  }, [count])

  useFrame((state) => {
    if (mesh.current) {
      // Smooth floating movement like in the screenshot
      mesh.current.rotation.x = state.clock.getElapsedTime() * 0.02
      mesh.current.rotation.y = state.clock.getElapsedTime() * 0.03
      mesh.current.rotation.z = state.clock.getElapsedTime() * 0.01
    }
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.06} vertexColors transparent opacity={0.9} sizeAttenuation />
    </points>
  )
}

function FloatingSquares({ count = 100 }) {
  const meshes = useRef<THREE.Group>(null)

  const squares = useMemo(() => {
    const squareData = []
    for (let i = 0; i < count; i++) {
      squareData.push({
        position: [(Math.random() - 0.5) * 12, (Math.random() - 0.5) * 12, (Math.random() - 0.5) * 12],
        rotation: [Math.random() * Math.PI, Math.random() * Math.PI, Math.random() * Math.PI],
        scale: Math.random() * 0.1 + 0.05,
        color: Math.random() < 0.5 ? "#ff44cc" : "#b026ff",
      })
    }
    return squareData
  }, [count])

  useFrame((state) => {
    if (meshes.current) {
      meshes.current.rotation.x = state.clock.getElapsedTime() * 0.01
      meshes.current.rotation.y = state.clock.getElapsedTime() * 0.015
    }
  })

  return (
    <group ref={meshes}>
      {squares.map((square, index) => (
        <mesh
          key={index}
          position={square.position as [number, number, number]}
          rotation={square.rotation as [number, number, number]}
          scale={square.scale}
        >
          <boxGeometry args={[1, 1, 0.1]} />
          <meshBasicMaterial color={square.color} transparent opacity={0.7} />
        </mesh>
      ))}
    </group>
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

  // Keep particle count high even on mobile for visual consistency
  const particleCount = isMobile ? 300 : 400
  const squareCount = isMobile ? 60 : 80

  return (
    <div className="canvas-container">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 75 }}
        performance={{ min: 0.1 }}
        dpr={[1, 2]} // Higher resolution for all devices
        frameloop="always"
        gl={{
          antialias: false,
          powerPreference: "high-performance",
          alpha: true,
          premultipliedAlpha: false,
        }}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={0.4} color="#ff44cc" />
        <pointLight position={[-10, -10, -10]} intensity={0.3} color="#b026ff" />

        <PinkParticles count={particleCount} />
        <FloatingSquares count={squareCount} />
      </Canvas>
    </div>
  )
}
