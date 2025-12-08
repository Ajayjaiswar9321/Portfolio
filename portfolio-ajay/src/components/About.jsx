import './About.css'

const About = () => {
  const highlights = [
    { icon: '🎯', title: 'Experience', value: '2+ Years' },
    { icon: '📍', title: 'Location', value: 'Mumbai, India' },
    { icon: '💻', title: 'Focus', value: 'QA & Frontend' }
  ]

  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">About Me</h2>
        
        <div className="about-content">
          <div className="about-text" data-aos="fade-right">
            <p>
              I'm a passionate <strong>QA Analyst and Frontend Developer</strong> based in Mumbai, India. 
              With a keen eye for detail and a love for clean code, I bridge the gap between quality 
              assurance and development.
            </p>
            <p>
              My approach combines rigorous testing methodologies with modern development practices, 
              ensuring every product I work on is both functional and user-friendly. I believe in 
              creating digital experiences that not only work flawlessly but also delight users.
            </p>
          </div>

          <div className="about-highlights">
            {highlights.map((item, index) => (
              <div 
                key={index} 
                className="highlight-card" 
                data-aos="fade-up" 
                data-aos-delay={index * 100}
              >
                <div className="highlight-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
