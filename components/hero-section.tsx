import Image from "next/image"

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="container mx-auto px-4 text-center">
        <div className="relative w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-purple-500/50">
          <Image src="/112186388.jpg" alt="Pratyush Kumar" fill className="object-cover" priority />
        </div>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white">Hey, I'm Pratyush 👋</h1>

          <h2 className="text-xl md:text-2xl text-gray-300">Bachelor's in Information Technology</h2>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Passionate about developing innovative solutions that merge cutting-edge technology with practical
            applications.
          </p>
        </div>
      </div>
    </section>
  )
}
