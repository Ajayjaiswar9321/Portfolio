import { useState, useRef, useEffect } from 'react'
import './Skills.css'

const Skills = () => {
  const [cards, setCards] = useState([0, 1, 2, 3])
  const [swiping, setSwiping] = useState(false)
  const [swipeDirection, setSwipeDirection] = useState(null)
  const [dragOffset, setDragOffset] = useState(0)
  const containerRef = useRef(null)
  const startX = useRef(0)

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
    },
    {
      title: 'AI & Innovation',
      skills: [
        'Vibe Coder',
        'AI Research Analyst',
        'Prompt Engineering',
        'AI Tools Integration',
        'ChatGPT / Claude',
        'AI-Assisted Development'
      ]
    }
  ]

  const getClientX = (e) => {
    if (e.touches && e.touches.length > 0) {
      return e.touches[0].clientX
    }
    return e.clientX
  }

  const handleStart = (e) => {
    startX.current = getClientX(e)
    setSwiping(true)
  }

  const handleMove = (e) => {
    if (!swiping) return

    const currentX = getClientX(e)
    const diff = currentX - startX.current

    setDragOffset(diff)

    if (diff > 50) {
      setSwipeDirection('right')
    } else if (diff < -50) {
      setSwipeDirection('left')
    } else {
      setSwipeDirection(null)
    }
  }

  const handleEnd = () => {
    if (!swiping) return

    const threshold = 80

    if (Math.abs(dragOffset) > threshold) {
      const direction = dragOffset > 0 ? 1 : -1
      setDragOffset(direction * 1000)

      setTimeout(() => {
        setCards(prev => {
          const newCards = [...prev]
          const removed = newCards.shift()
          newCards.push(removed)
          return newCards
        })
        setDragOffset(0)
        setSwipeDirection(null)
      }, 300)
    } else {
      setDragOffset(0)
      setSwipeDirection(null)
    }

    setSwiping(false)
  }

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const preventScroll = (e) => {
      if (swiping) {
        e.preventDefault()
      }
    }

    container.addEventListener('touchmove', preventScroll, { passive: false })
    return () => {
      container.removeEventListener('touchmove', preventScroll)
    }
  }, [swiping])

  const getCardStyle = (stackIndex) => {
    const isTop = stackIndex === 0

    if (isTop) {
      const rotation = dragOffset * 0.08
      return {
        zIndex: 10,
        transform: `translateX(${dragOffset}px) rotate(${rotation}deg)`,
        transition: swiping ? 'none' : 'transform 0.3s ease',
      }
    }

    return {
      zIndex: 10 - stackIndex,
      transform: `scale(${1 - stackIndex * 0.05}) translateY(${stackIndex * 12}px)`,
      opacity: 1 - stackIndex * 0.2,
    }
  }

  return (
    <section id="skills" className="skills section">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">Skills & Expertise</h2>

        {/* Desktop Grid View */}
        <div className="skills-grid desktop-only">
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

        {/* Mobile Tinder Swipe View */}
        <div
          ref={containerRef}
          className="tinder-cards-container mobile-only"
          onTouchMove={handleMove}
          onTouchEnd={handleEnd}
          onTouchCancel={handleEnd}
        >
          <div className="cards-stack">
            {cards.slice(0, 3).map((cardIndex, stackIndex) => {
              const category = skillCategories[cardIndex]
              const isTop = stackIndex === 0

              return (
                <div
                  key={`card-${cardIndex}`}
                  className={`skill-card ${isTop ? 'top-card' : ''} ${swipeDirection && isTop ? `swipe-${swipeDirection}` : ''}`}
                  style={getCardStyle(stackIndex)}
                  onTouchStart={isTop ? handleStart : undefined}
                >
                  <div className="card-content">
                    <h3 className="category-title">{category.title}</h3>
                    <div className="skills-list">
                      {category.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="skill-pill">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {isTop && (
                    <>
                      <div className={`swipe-indicator like ${swipeDirection === 'right' ? 'visible' : ''}`}>
                        NEXT
                      </div>
                      <div className={`swipe-indicator nope ${swipeDirection === 'left' ? 'visible' : ''}`}>
                        PREV
                      </div>
                    </>
                  )}
                </div>
              )
            })}
          </div>

          <div className="card-counter">
            {cards[0] + 1} / {skillCategories.length}
          </div>

          <p className="swipe-hint">
            <span className="swipe-icon">👆</span> Swipe cards to explore skills
          </p>
        </div>
      </div>
    </section>
  )
}

export default Skills
