import { ExternalLink } from "lucide-react"

export default function Footer() {
  return (
    <footer className="py-8 text-center text-gray-400 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <p className="mb-4">
          Read my articles on{" "}
          <a
            href="https://medium.com/@pratyushk537"
            target="_blank"
            rel="noopener noreferrer"
            className="text-neon-purple hover:underline inline-flex items-center"
          >
            Medium <ExternalLink size={14} className="ml-1" />
          </a>
        </p>
        <p>© {new Date().getFullYear()} Pratyush. All rights reserved.</p>
      </div>
    </footer>
  )
}
