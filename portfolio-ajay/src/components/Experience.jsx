import './Experience.css'

const Experience = () => {
  const experiences = [
    {
      title: 'QA Analyst',
      company: 'AI NEXT STUDIO',
      location: 'Mumbai, India',
      duration: '2025 - Present',
      points: [
        'Conducted comprehensive manual and automated testing across web applications',
        'Developed detailed test cases and documentation for multiple projects',
        'Collaborated with developers to identify and resolve bugs efficiently',
        'Implemented testing best practices and improved QA processes'
      ]
    },
    {
      title: 'Software Developer',
      company: 'Bahar Infocons Pvt Ltd',
      location: 'Mumbai, India',
      duration: '2024 - 2025',
      points: [
        'Built responsive frontend interfaces using HTML, CSS, and JavaScript',
        'Performed end-to-end testing and quality assurance',
        'Maintained code quality standards and documentation',
        'Worked in Agile environment with cross-functional teams'
      ]
    }
  ]

  return (
    <section id="experience" className="experience section">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Work Experience</h2>
        
        <div className="timeline">
          <div className="timeline-line"></div>
          
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
              data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'}
              data-aos-delay={index * 200}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-card">
                <div className="timeline-header">
                  <h3>{exp.title}</h3>
                  <span className="company">{exp.company}</span>
                  <div className="timeline-meta">
                    <span className="location">📍 {exp.location}</span>
                    <span className="duration">📅 {exp.duration}</span>
                  </div>
                </div>
                <ul className="timeline-points">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
