import { Github, Linkedin, Mail } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-black/40 bg-black/30 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 text-white">
          <div className="h-8 w-8 rounded bg-gradient-to-br from-blue-500 via-cyan-400 to-purple-500" />
          <span className="font-semibold tracking-tight">Your Name</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#projects" className="text-white/80 hover:text-white transition">Projects</a>
          <a href="#experience" className="text-white/80 hover:text-white transition">Experience</a>
          <a href="#skills" className="text-white/80 hover:text-white transition">Skills</a>
        </nav>
        <div className="flex items-center gap-3">
          <a aria-label="LinkedIn" href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-white/10 text-white/80 hover:text-white transition">
            <Linkedin size={18} />
          </a>
          <a aria-label="GitHub" href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-md hover:bg-white/10 text-white/80 hover:text-white transition">
            <Github size={18} />
          </a>
          <a aria-label="Email" href="mailto:you@example.com" className="p-2 rounded-md hover:bg-white/10 text-white/80 hover:text-white transition">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </header>
  );
}
