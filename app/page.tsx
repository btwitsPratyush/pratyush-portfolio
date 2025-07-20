import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import SkillsSection from "@/components/skills-section"
import ExperienceSection from "@/components/experience-section"
import ProjectsSection from "@/components/projects-section"
import CertificationsSection from "@/components/certifications-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import CSSParticleBackground from "@/components/css-particle-background" // New import

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <CSSParticleBackground /> {/* New background component */}
      <Navbar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
