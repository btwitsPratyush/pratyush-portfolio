"use client"

import { useRef } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { OrbitControls, Stars } from "@react-three/drei"
import type * as THREE from "three"
import { useSpring, animated } from "@react-spring/three"

function Particles({ count = 1000 }) {
  const mesh = useRef<THREE.Points>(null)
  const { viewport } = useThree()

  const particles = useRef<Float32Array>()
  const colors = useRef<Float32Array>()

  if (!particles.current) {
    particles.current = new Float32Array(count * 3)
    colors.current = new Float32Array(count * 3)

    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      particles.current[i3] = (Math.random() - 0.5) * 10
      particles.current[i3 + 1] = (Math.random() - 0.5) * 10
      particles.current[i3 + 2] = (Math.random() - 0.5) * 10

      colors.current[i3] = Math.random() * 0.5 + 0.5
      colors.current[i3 + 1] = Math.random() * 0.2
      colors.current[i3 + 2] = Math.random() * 0.5 + 0.5
    }
  }

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.getElapsedTime() * 0.05
      mesh.current.rotation.y = state.clock.getElapsedTime() * 0.075
    }
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" count={count} array={particles.current} itemSize={3} />
        <bufferAttribute attach="attributes-color" count={count} array={colors.current} itemSize={3} />
      </bufferGeometry>
      <pointsMaterial size={0.05} vertexColors transparent opacity={0.8} sizeAttenuation />
    </points>
  )
}

function FloatingOrbs() {
  const orb1 = useRef<THREE.Mesh>(null)
  const orb2 = useRef<THREE.Mesh>(null)
  const orb3 = useRef<THREE.Mesh>(null)

  const springs1 = useSpring({
    scale: [1, 1, 1],
    position: [3, 1, -2],
    rotation: [0, Math.PI, 0],
    config: { mass: 2, tension: 20, friction: 10 },
    loop: { reverse: true },
  })

  const springs2 = useSpring({
    scale: [1.2, 1.2, 1.2],
    position: [-3, -1, -1],
    rotation: [Math.PI, 0, Math.PI],
    config: { mass: 1, tension: 10, friction: 15 },
    loop: { reverse: true },
  })

  const springs3 = useSpring({
    scale: [0.8, 0.8, 0.8],
    position: [0, 2, -3],
    rotation: [0, Math.PI, Math.PI],
    config: { mass: 3, tension: 5, friction: 5 },
    loop: { reverse: true },
  })

  return (
    <>
      <animated.mesh ref={orb1} {...springs1}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial
          color="#b026ff"
          emissive="#4d00b3"
          emissiveIntensity={0.5}
          roughness={0.2}
          metalness={0.8}
        />
      </animated.mesh>

      <animated.mesh ref={orb2} {...springs2}>
        <sphereGeometry args={[0.7, 32, 32]} />
        <meshStandardMaterial
          color="#4d4dff"
          emissive="#0000cc"
          emissiveIntensity={0.5}
          roughness={0.2}
          metalness={0.8}
        />
      </animated.mesh>

      <animated.mesh ref={orb3} {...springs3}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial
          color="#00e5e5"
          emissive="#00b3b3"
          emissiveIntensity={0.5}
          roughness={0.2}
          metalness={0.8}
        />
      </animated.mesh>
    </>
  )
}

export default function BackgroundScene() {
  return (
    <div className="relative w-full h-full">
      {/* Canvas Background */}
      <div className="canvas-container fixed inset-0 -z-10">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.2} />
          <pointLight position={[10, 10, 10]} intensity={0.8} color="#ffffff" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#b026ff" />

          <Particles count={2000} />
          <FloatingOrbs />
          <Stars radius={100} depth={50} count={1000} factor={4} fade speed={1} />

          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={true}
            rotateSpeed={0.1}
            autoRotate
            autoRotateSpeed={0.1}
          />
        </Canvas>
      </div>

      {/* Subtle blur overlay */}
      <div className="absolute inset-0 backdrop-blur-sm bg-black/20 z-10 pointer-events-none" />
    </div>
  )
}
