import './App.css'

function App() {
  return (
    <div className="portfolio">

      {/* Navigation */}
      <nav className="navbar">
        <h2 className="logo">Ranjith</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <p className="intro">Hello, I'm</p>

          <h1>Kanniyappa Ranjith M</h1>

          <h2>Computer Science Engineering Student</h2>

          <p className="hero-description">
            I am a CSE (AI/ML) student interested in software development,
            full-stack development and machine learning.
          </p>

          <div className="hero-buttons">
            <a href="#projects">View Projects</a>
            <a href="#contact">Contact Me</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <h2>About Me</h2>

        <p>
          I am a Computer Science Engineering student passionate about
          building software applications and learning modern technologies.
          I am currently developing my skills in Java, Python, JavaScript,
          React and backend development.
        </p>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section">
        <h2>Skills</h2>

        <div className="skills-container">
          <div>Java</div>
          <div>Python</div>
          <div>JavaScript</div>
          <div>React</div>
          <div>Node.js</div>
          <div>Express.js</div>
          <div>MongoDB</div>
          <div>SQL</div>
          <div>Git & GitHub</div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section">
        <h2>Projects</h2>

        <div className="projects-container">

          <div className="project-card">
            <h3>Demand Forecasting System</h3>

            <p>
              A machine learning based demand forecasting application
              using forecasting models and data analysis.
            </p>

            <p>Python • Machine Learning • ARIMA • Random Forest</p>

            <button>GitHub</button>
          </div>

          <div className="project-card">
            <h3>Library Management System</h3>

            <p>
              A Java application demonstrating object-oriented programming
              concepts such as encapsulation, inheritance and polymorphism.
            </p>

            <p>Java • OOP • SQL</p>

            <button>GitHub</button>
          </div>

          <div className="project-card">
            <h3>MERN Portfolio</h3>

            <p>
              A full-stack personal portfolio website built using the
              MERN stack.
            </p>

            <p>React • Node.js • Express • MongoDB</p>

            <button>GitHub</button>
          </div>

        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section">
        <h2>Education</h2>

        <div className="education-card">
          <h3>B.Tech — Computer Science Engineering (AI/ML)</h3>
          <p>PES University</p>
          <p>2023 – 2027</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <h2>Contact Me</h2>

        <p>
          Interested in working together or discussing a project?
        </p>

        <form>
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>

          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer>
        <p>© 2026 Kanniyappa Ranjith M</p>
      </footer>

    </div>
  )
}

export default App