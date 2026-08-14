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

          <h2>
            Computer Science Engineering Student
          </h2>

          <p className="hero-description">
            I am a Computer Science Engineering student interested in
            software development, full-stack development and artificial
            intelligence & machine learning.
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
          I am a Computer Science Engineering student with an interest in
          software development, artificial intelligence and machine learning.
          I enjoy learning new technologies and building practical projects
          that help me improve my programming and problem-solving skills.
        </p>

      </section>


      {/* Skills Section */}
      <section id="skills" className="section">

        <h2>Skills</h2>

        <div className="skills-container">

          <div>Java</div>
          <div>Python</div>
          <div>JavaScript</div>
          <div>React.js</div>
          <div>Node.js</div>
          <div>Express.js</div>
          <div>MongoDB</div>
          <div>SQL</div>
          <div>Git</div>
          <div>GitHub</div>

        </div>

      </section>


      {/* Projects Section */}
      <section id="projects" className="section">

        <h2>Projects</h2>

        <div className="projects-container">

          {/* Project 1 */}
          <div className="project-card">

            <h3>Demand Forecasting System</h3>

            <p>
              A machine learning based demand forecasting system designed
              to analyze historical demand data and generate forecasts.
            </p>

            <p>
              Python • Machine Learning • ARIMA • Random Forest
            </p>

            <button>GitHub</button>

          </div>


          {/* Project 2 */}
          <div className="project-card">

            <h3>Library Management System</h3>

            <p>
              A Java application demonstrating object-oriented programming
              concepts including encapsulation, inheritance, polymorphism
              and abstraction.
            </p>

            <p>
              Java • OOP • SQL
            </p>

            <button>GitHub</button>

          </div>


          {/* Project 3 */}
          <div className="project-card">

            <h3>MERN Portfolio Website</h3>

            <p>
              A full-stack personal portfolio website built using React,
              Node.js, Express.js and MongoDB.
            </p>

            <p>
              React • Node.js • Express • MongoDB
            </p>

            <button>GitHub</button>

          </div>

        </div>

      </section>


      {/* Education Section */}
      <section id="education" className="section">

        <h2>Education</h2>

        <div className="education-card">

          <h3>
            B.Tech — Computer Science Engineering (AI/ML)
          </h3>

          <p>
            PES University
          </p>

          <p>
            Bengaluru
          </p>

        </div>

      </section>


      {/* Contact Section */}
      <section id="contact" className="section contact">

        <h2>Contact Me</h2>

        <p>
          I'm open to opportunities, internships and interesting
          software development projects.
        </p>

        <form>

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <textarea
            placeholder="Your Message"
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </form>

      </section>


      {/* Footer */}
      <footer>

        <p>
          © 2026 Kanniyappa Ranjith M
        </p>

      </footer>

    </div>
  )
}

export default App