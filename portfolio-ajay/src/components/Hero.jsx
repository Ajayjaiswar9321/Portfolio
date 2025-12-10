import { useEffect, useRef, useState } from 'react'
import './Hero.css'

const Hero = () => {
  const cardRef = useRef(null)
  const containerRef = useRef(null)
  const [animationActive, setAnimationActive] = useState(false)

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  // Toggle animation on mobile tap
  const handleCardTap = () => {
    if (window.innerWidth <= 768) {
      setAnimationActive(!animationActive)
    }
  }

  // 3D tilt effect following mouse cursor
  useEffect(() => {
    const card = cardRef.current
    const container = containerRef.current
    if (!card || !container) return

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const centerX = rect.width / 2
      const centerY = rect.height / 2

      const rotateX = (y - centerY) / 12
      const rotateY = (centerX - x) / 12

      card.style.transform = `rotateX(${-rotateX}deg) rotateY(${rotateY}deg) translateZ(50px)`

      // Parallax for background particles
      const particles = container.querySelectorAll('.cyber-particle')
      particles.forEach((particle, i) => {
        const speed = (i + 1) * 0.03
        const baseX = parseFloat(particle.dataset.x) || 0
        const baseY = parseFloat(particle.dataset.y) || 0
        particle.style.transform = `translate(${baseX + (x - centerX) * speed}px, ${baseY + (y - centerY) * speed}px)`
      })
    }

    const handleMouseLeave = () => {
      card.style.transform = 'rotateX(0) rotateY(0) translateZ(0)'
    }

    card.addEventListener('mousemove', handleMouseMove)
    card.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      card.removeEventListener('mousemove', handleMouseMove)
      card.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <section id="hero" className="hero section">
      <div className="container hero-container">
        <div className="hero-content">
          <p className="hero-greeting">Hello, I'm</p>
          <h1 className="hero-name gradient-text">Ajay Jaiswar</h1>
          <div className="hero-role">
            <span className="typing-text">QA Analyst & Frontend Developer</span>
          </div>
          <p className="hero-description">
            I combine quality assurance and development to build reliable, user-focused digital experiences.
          </p>

          <div className="hero-buttons">
            <button className="btn-primary" onClick={scrollToProjects}>
              View My Projects
            </button>
            <a href="/assets/cv/Ajay_Jaiswar_CV.pdf" download className="btn-secondary">
              Download CV
            </a>
          </div>

          <div className="social-links">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/ajay-jaiswar-053968256" target="_blank" rel="noopener noreferrer" className="social-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="mailto:ajayjaiswar6340@gmail.com" className="social-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="cyber-card-wrapper" ref={containerRef}>
          {/* 3D Layered Frames */}
          <div
            className={`cyber-card ${animationActive ? 'animation-active' : ''}`}
            ref={cardRef}
            onClick={handleCardTap}
          >
            <div className="card-frame frame-1"></div>
            <div className="card-frame frame-2"></div>
            <div className="card-frame frame-3"></div>

            {/* Rotating border glow */}
            <div className="rotating-border-glow"></div>

            {/* Corner accents (L-shaped) */}
            <div className="cyber-corner corner-tl"></div>
            <div className="cyber-corner corner-tr"></div>
            <div className="cyber-corner corner-bl"></div>
            <div className="cyber-corner corner-br"></div>

            {/* Main card content */}
            <div className="card-content">
              {/* Profile image */}
              <img
                src="/assets/images/profile.jpg"
                alt="Ajay Jaiswar"
                className="cyber-profile-image"
              />

              {/* Holographic shine */}
              <div className="holo-shine"></div>

              {/* Scanlines overlay */}
              <div className="scanlines-overlay"></div>

              {/* Scan beam */}
              <div className="scan-beam"></div>

              {/* HUD corner brackets */}
              <div className="hud-bracket hud-tl"></div>
              <div className="hud-bracket hud-tr"></div>
              <div className="hud-bracket hud-bl"></div>
              <div className="hud-bracket hud-br"></div>

              {/* Floating neon orbs */}
              <div className="neon-orbs">
                <span></span><span></span><span></span><span></span>
              </div>

              {/* Cyan tint overlay */}
              <div className="cyan-overlay"></div>

              {/* Bottom gradient for text */}
              <div className="bottom-gradient"></div>

              {/* Info panel - Only name */}
              <div className="info-panel">
                <h3 className="cyber-name">AJAY JAISWAR</h3>
              </div>
            </div>

            {/* Card glow */}
            <div className="cyber-glow"></div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  )
}

export default Hero
