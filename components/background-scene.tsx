"use client"

import { useRef, useMemo } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Stars } from "@react-three/drei"
import type * as THREE from "three"

function Particles({ count = 800 }) {
  const mesh = useRef<THREE.Points>(null)

  // Generate particles once and memoize
  const { positions, colors } = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      positions[i3] = (Math.random() - 0.5) * 8
      positions[i3 + 1] = (Math.random() - 0.5) * 8
      positions[i3 + 2] = (Math.random() - 0.5) * 8

      colors[i3] = Math.random() * 0.5 + 0.5
      colors[i3 + 1] = Math.random() * 0.2
      colors[i3 + 2] = Math.random() * 0.5 + 0.5
    }

    return { positions, colors }
  }, [count])

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.getElapsedTime() * 0.02
      mesh.current.rotation.y = state.clock.getElapsedTime() * 0.03
    }
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={positions} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={count} array={colors} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.03} vertexColors transparent opacity={0.6} sizeAttenuation />
    </points>
  )
}

export default function BackgroundScene() {
  return (
    <div className="canvas-container">
      <Canvas 
        camera={{ position: [0, 0, 5], fov: 75 }}
        performance={{ min: 0.5 }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.1} />
        <pointLight position={[10, 10, 10]} intensity={0.3} color="#ffffff" />
        <pointLight position={[-10, -10, -10]} intensity={0.2} color="#b026ff" />

        <Particles count={600} />
        <Stars radius={80} depth={40} count={500} factor={3} fade speed={0.5} />
      </Canvas>
    </div>
  )
}
