import { useEffect, useRef } from 'react'
import './BackgroundAnimations.css'

const BackgroundAnimations = () => {
  const canvasRef = useRef(null)
  const mouseGlowRef = useRef(null)

  useEffect(() => {
    // Particle Animation
    const canvas = canvasRef.current
    if (!canvas) return
    
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles = []
    const particleCount = window.innerWidth > 768 ? 80 : 30

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 4 + 2
        this.speedY = Math.random() * 1 + 0.5
        this.opacity = Math.random() * 0.5 + 0.3
        this.color = Math.random() > 0.5 ? '#00d4ff' : '#00ffcc'
      }

      update() {
        this.y -= this.speedY
        if (this.y < 0) {
          this.y = canvas.height
          this.x = Math.random() * canvas.width
        }
      }

      draw() {
        ctx.fillStyle = this.color
        ctx.globalAlpha = this.opacity
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fill()
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach(particle => {
        particle.update()
        particle.draw()
      })
      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    // Mouse Glow Effect
    const handleMouseMove = (e) => {
      if (mouseGlowRef.current && window.innerWidth > 768) {
        mouseGlowRef.current.style.left = e.clientX + 'px'
        mouseGlowRef.current.style.top = e.clientY + 'px'
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="background-animations">
      {/* Floating Particles */}
      <canvas ref={canvasRef} className="particles-canvas" />
      
      {/* Gradient Mesh Blobs */}
      <div className="gradient-blob blob-1"></div>
      <div className="gradient-blob blob-2"></div>
      <div className="gradient-blob blob-3"></div>
      
      {/* Mouse Glow */}
      <div ref={mouseGlowRef} className="mouse-glow"></div>
      
      {/* Grid Pattern */}
      <div className="grid-pattern"></div>
      
      {/* Noise Texture */}
      <div className="noise-texture"></div>
    </div>
  )
}

export default BackgroundAnimations
