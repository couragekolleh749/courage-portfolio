"use client";
import { useState } from "react";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-b from-red-600 via-white to-blue-600 text-white scroll-smooth">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-gray-800/80 shadow-md z-50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto flex justify-between items-center px-4 py-3">
          <h1 className="text-xl font-bold">Courage Kolleh</h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="hover:text-blue-300">Home</a>
            <a href="#about" className="hover:text-blue-300">About</a>
            <a href="#education" className="hover:text-blue-300">Education</a>
            <a href="#projects" className="hover:text-blue-300">Projects</a>
            <a href="#gallery" className="hover:text-blue-300">Gallery</a>
            <a href="#resume" className="hover:text-blue-300">Resume</a>
            <a href="#contact" className="hover:text-blue-300">Contact</a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col bg-gray-700 text-center">
            {[
              ["home","Home"],["about","About"],["education","Education"],
              ["projects","Projects"],["gallery","Gallery"],
              ["resume","Resume"],["contact","Contact"]
            ].map(([id,label])=>(
              <a key={id} href={`#${id}`} className="py-2 hover:text-blue-300"
                 onClick={()=>setMenuOpen(false)}>{label}</a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section id="home" className="h-screen flex flex-col justify-center items-center text-center px-4">
        <img src="/hero.jpg" alt="Courage M. Kolleh Jr" className="w-40 h-40 rounded-full shadow-lg mb-4" />
        <h2 className="text-4xl font-bold">Hi, I’m Courage M. Kolleh Jr</h2>
        <p className="mt-2 text-lg text-gray-200">
          Aspiring Developer | Creative Thinker | Tech Enthusiast
        </p>
      </section>

      {/* About Me */}
      <section id="about" className="max-w-3xl mx-auto py-16 px-6 text-black">
        <h2 className="text-3xl font-bold mb-4">👤 About Me</h2>
        <p className="leading-relaxed mb-4">
          My name is Courage M. Kolleh, born on October 17, 2007 in Liberia.
          I was raised in the Police Academy community by my grandmother Tawah
          Songu, alongside my mother Diana Songu and father Melvin Kolleh.
        </p>
        <p className="leading-relaxed mb-4">
          I come from a close-knit family with 5 siblings and over 10 cousins.
          Family, faith, and resilience have shaped who I am today. Currently,
          I live in the United States of America, where I am pursuing
          Cybersecurity and Software Engineering while preparing to join the
          U.S. Army to serve and give back to my country.
        </p>
        <p className="leading-relaxed mb-4">
          I’m a Freedomite and a proud Christian, active in the National Freedom
          Pentecostal Church. My faith in God and the values I learned from my
          church community guide every step of my journey.
        </p>
        <p className="leading-relaxed">
          Family inspires me daily:
          <br/>• My mother, Diana Songu, is a strong woman who never gave up.
          <br/>• My father, Melvin Kolleh, is a hustler and my king.
          <br/>• My grandmother, Tawah Songu, is my rock and my jewel — everything I do is to make her proud.
        </p>
      </section>

      {/* Education & Experience */}
      <section id="education" className="max-w-3xl mx-auto py-16 px-6 text-black">
        <h2 className="text-3xl font-bold mb-4">🎓 Education & Experience</h2>
        <ul className="space-y-4">
          <li>
            <strong>Effort Baptist Church School</strong> – Graduated on October 10, 2024 (Liberia).
          </li>
          <li>
            <strong>Bluecrest University College, Liberia</strong> – Attended briefly, but did not complete after relocating to the USA.
          </li>
          <li>
            <strong>Portfolio & Web Development</strong> – Built and deployed multiple personal and community-based projects.
          </li>
        </ul>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-3xl mx-auto py-16 px-6 text-black">
        <h2 className="text-3xl font-bold mb-4">💻 Projects</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>
            <a href="#" className="text-blue-700 hover:underline" target="_blank">
              National Freedom Pentecostal Church
            </a>
          </li>
          <li>
            <a href="https://my-artist-portfolio.vercel.app"
               className="text-blue-700 hover:underline" target="_blank">
               Jzyno Artist Portfolio
            </a>
          </li>
          <li>
            <a href="#" className="text-blue-700 hover:underline" target="_blank">
              Courage Portfolio (this site)
            </a>
          </li>
        </ul>
      </section>

      {/* Photo Gallery */}
      <section id="gallery" className="max-w-5xl mx-auto py-16 px-6 text-black">
        <h2 className="text-3xl font-bold mb-8 text-center">📸 Family & Memories</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {[
            "family.jpg",
            "church1.jpg",
            "gradaute1.jpt",
            "courage.jpg",
            "graduate.jpg",
            "gradma.jpg",
            "hero.jpg",
            "lover.jpg",
            "mother1.jpg"
          ].map((img) => (
            <div key={img} className="overflow-hidden rounded-xl shadow-lg">
              <img src={`/${img}`} alt={img} className="w-full h-56 object-cover hover:scale-105 transition-transform" />
            </div>
          ))}
        </div>
      </section>

      {/* Resume */}
      <section id="resume" className="max-w-3xl mx-auto py-16 px-6 text-center text-black">
        <h2 className="text-3xl font-bold mb-4">Resume</h2>
        <a href="/resume.pdf" download
           className="bg-blue-500 px-4 py-2 rounded shadow hover:bg-blue-600 transition">
          Download My Resume
        </a>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-3xl mx-auto py-16 px-6 text-center text-black">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="mb-4">
          Feel free to reach out for collaborations or just to say hi!
        </p>
        <p>Email: <a href="mailto:kollehmelvin62@gmail.com" className="text-blue-700 hover:underline">
          kollehmelnin62@gmail.com
        </a></p>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 text-gray-800 bg-white/50">
        © {new Date().getFullYear()} Courage M. Kolleh Jr. All Rights Reserved.  
        <br/>
        📞 Phone: <span className="font-semibold">+7012001293</span>
      </footer>
    </main>
  );
}



