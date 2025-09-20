"use client";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gray-900 text-white scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-800 shadow-md z-50">
        <div className="max-w-4xl mx-auto flex justify-between items-center px-4 py-3">
          <h1 className="text-xl font-bold">Courage Kolleh</h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-blue-400">Home</a>
            <a href="#about" className="hover:text-blue-400">About</a>
            <a href="#projects" className="hover:text-blue-400">Projects</a>
            <a href="#resume" className="hover:text-blue-400">Resume</a>
            <a href="#contact" className="hover:text-blue-400">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col bg-gray-700 text-center">
            <a href="#home" className="py-2 hover:text-blue-400" onClick={() => setMenuOpen(false)}>Home</a>
            <a href="#about" className="py-2 hover:text-blue-400" onClick={() => setMenuOpen(false)}>About</a>
            <a href="#projects" className="py-2 hover:text-blue-400" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#resume" className="py-2 hover:text-blue-400" onClick={() => setMenuOpen(false)}>Resume</a>
            <a href="#contact" className="py-2 hover:text-blue-400" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="h-screen flex flex-col justify-center items-center text-center px-4">
        <img src="/hero.jpg" alt="Courage M. Kolleh Jr" className="w-40 h-40 rounded-full shadow-lg mb-4" />
        <h2 className="text-4xl font-bold">Hi, I’m Courage M. Kolleh Jr</h2>
        <p className="mt-2 text-lg text-gray-300">
          Aspiring Developer | Creative Thinker | Tech Enthusiast
        </p>
      </section>

      {/* About Section */}
      <section id="about" className="max-w-3xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-gray-300 leading-relaxed">
          I am passionate about technology, creativity, and building impactful digital
          solutions. I enjoy working with tools like Next.js, Tailwind CSS, and React to create
          clean and modern websites. I’m always learning and improving my skills.
        </p>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-3xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold mb-4">Projects</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <a href="https://my-artist-portfolio.vercel.app"
               className="text-blue-400 hover:underline" target="_blank">
               Jzyno Artist Portfolio
            </a>
          </li>
          <li>
            <span className="text-gray-400">More projects coming soon...</span>
          </li>
        </ul>
      </section>

      {/* Resume Section */}
      <section id="resume" className="max-w-3xl mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Resume</h2>
        <a href="/resume.pdf" download
           className="bg-blue-500 px-4 py-2 rounded shadow hover:bg-blue-600 transition">
          Download My Resume
        </a>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-3xl mx-auto py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="mb-4 text-gray-300">
          Feel free to reach out for collaborations or just to say hi!
        </p>
        <p>Email: <a href="mailto:kollehmelvin62@gmail.com" className="text-blue-400 hover:underline">
          kollehmelnin62@gmail.com
        </a></p>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-500">
        © {new Date().getFullYear()} Courage M. Kolleh Jr. All Rights Reserved.
      </footer>
    </main>
  );
}

