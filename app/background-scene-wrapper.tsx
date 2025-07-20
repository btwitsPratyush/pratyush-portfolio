"use client"

import dynamic from "next/dynamic"
import { useEffect, useState } from "react"

// Dynamically load the heavy Three.js scene only in the browser
const BackgroundScene = dynamic(() => import("@/components/background-scene"), {
  ssr: false, // Crucial: Do not render this component on the server
  loading: () => <div className="enhanced-fallback-bg" />, // Show a fallback while loading
})

export default function BackgroundSceneWrapper() {
  const [mounted, setMounted] = useState(false)

  // Ensure the component is only rendered on the client after mounting
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Render a fallback on the server and during initial client hydration
    return <div className="enhanced-fallback-bg" />
  }

  return (
    <div className="canvas-container">
      <BackgroundScene />
    </div>
  )
}
