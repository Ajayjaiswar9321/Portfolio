import './Skills.css'

const Skills = () => {
  const skillCategories = [
    {
      title: 'QA & Testing',
      skills: [
        'Manual Testing',
        'Automation Testing',
        'API Testing',
        'Regression Testing',
        'Test Case Design',
        'Bug Tracking',
        'Performance Testing'
      ]
    },
    {
      title: 'Tools & Platforms',
      skills: [
        'Selenium',
        'JIRA',
        'Postman',
        'Git & GitHub',
        'VS Code',
        'Chrome DevTools',
        'Figma'
      ]
    },
    {
      title: 'Development',
      skills: [
        'HTML5',
        'CSS3 / SASS',
        'JavaScript (ES6+)',
        'React.js',
        'Responsive Design',
        'REST APIs',
        'SQL Basics'
      ]
    }
  ]

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Skills & Expertise</h2>
        
        <div className="skills-grid">
          {skillCategories.map((category, catIndex) => (
            <div 
              key={catIndex} 
              className="skill-category" 
              data-aos="fade-up" 
              data-aos-delay={catIndex * 100}
            >
              <h3 className="category-title">{category.title}</h3>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="skill-pill"
                    data-aos="zoom-in"
                    data-aos-delay={catIndex * 100 + skillIndex * 50}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
