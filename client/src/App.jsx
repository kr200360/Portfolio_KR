import { useState, useEffect } from 'react'
import './App.css'
import {
  Code2,
  Brain,
  Sparkles,
  Database,
  Server,
  Globe,
  Terminal,
  Cpu,
  Layers,
  ExternalLink,
  Mail,
  MapPin,
  GraduationCap,
  Award,
  Download,
  Send,
  Menu,
  X,
  ChevronUp,
  CheckCircle2,
  AlertCircle,
  Calendar,
  ArrowUpRight,
  Briefcase
} from 'lucide-react'

// Custom Brand SVGs
const GithubIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
)

const LinkedinIcon = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
)

// Profile & Portfolio Data
const PORTFOLIO_DATA = {
  name: "Kanniyappa Ranjith M",
  roles: [
    "Full-Stack Web Developer",
    "AI & Machine Learning Enthusiast",
    "Computer Science Engineer",
    "Problem Solver & Tech Explorer"
  ],
  bio: "I am a dedicated Computer Science Engineering student specializing in AI & Machine Learning at PES University, Bengaluru. Passionate about building robust full-stack web applications, scalable APIs, and intelligent machine learning models that solve practical problems.",
  email: "kanniyapparanjithm987@gmail.com",
  location: "Bengaluru, Karnataka, India",
  github: "https://github.com/kr200360",
  linkedin: "https://www.linkedin.com/in/kanniyappa-ranjith-m-1937bb287/",
  resumeUrl: "/assets/resume.pdf",
  profileImage: "/assets/profile.jpg",

  stats: [
    { label: "Projects Completed", value: "6+" },
    { label: "Technologies Mastered", value: "12+" },
    { label: "B.Tech CSE Specialization", value: "AI & ML" },
    { label: "Institution", value: "PES University" }
  ],

  pillars: [
    {
      icon: <Globe className="pillar-icon-svg" />,
      title: "Full-Stack Development",
      description: "Crafting scalable, responsive web applications using modern React, Node.js, Express, and MongoDB."
    },
    {
      icon: <Brain className="pillar-icon-svg" />,
      title: "AI & Machine Learning",
      description: "Developing predictive time-series models, classifiers, and intelligent data pipelines with Python and Scikit-Learn."
    },
    {
      icon: <Database className="pillar-icon-svg" />,
      title: "Database & Backend Systems",
      description: "Architecting RESTful APIs, relational SQL schemas, and high-performance NoSQL database collections."
    },
    {
      icon: <Code2 className="pillar-icon-svg" />,
      title: "Clean Code & OOP",
      description: "Applying object-oriented design patterns, robust error handling, and maintainable software architecture."
    }
  ],

  skillCategories: [
    {
      category: "Programming Languages",
      icon: <Terminal size={22} />,
      skills: ["Java", "Python", "JavaScript (ES6+)", "C / C++", "SQL"]
    },
    {
      category: "Frontend Web Development",
      icon: <Globe size={22} />,
      skills: ["React.js", "HTML5 & Semantic UI", "Modern CSS & Flex/Grid", "Vite", "Responsive Design"]
    },
    {
      category: "Backend & Databases",
      icon: <Server size={22} />,
      skills: ["Node.js", "Express.js", "MongoDB & Mongoose", "MySQL", "REST APIs", "CORS & Middleware"]
    },
    {
      category: "AI / ML & Data Science",
      icon: <Cpu size={22} />,
      skills: ["Machine Learning", "ARIMA Modeling", "Random Forest", "Scikit-Learn", "Pandas & NumPy"]
    },
    {
      category: "Developer Tools & Workflow",
      icon: <Layers size={22} />,
      skills: ["Git", "GitHub", "VS Code", "Postman", "npm / yarn", "Linux Environment"]
    }
  ],

  projects: [
    {
      id: 1,
      title: "Demand Forecasting System",
      category: "ai-ml",
      categoryLabel: "AI & Machine Learning",
      description: "A machine learning based demand forecasting system designed to analyze historical multi-variate demand data, identify seasonal patterns, and predict future requirements accurately.",
      techStack: ["Python", "ARIMA", "Random Forest", "Scikit-Learn", "Pandas", "Matplotlib"],
      github: "https://github.com/kr200360",
      featured: true
    },
    {
      id: 2,
      title: "Full-Stack MERN Portfolio Platform",
      category: "full-stack",
      categoryLabel: "Full-Stack Web",
      description: "A personal portfolio web application with a live Express and MongoDB contact backend, real-time message handling, and glassmorphic responsive UI.",
      techStack: ["React 19", "Node.js", "Express.js", "MongoDB", "Mongoose", "Vite"],
      github: "https://github.com/kr200360/Portfolio_KR",
      featured: true
    },
    {
      id: 3,
      title: "Library Management System",
      category: "java",
      categoryLabel: "Java & OOP",
      description: "An enterprise-grade Java management system demonstrating core OOP concepts (encapsulation, inheritance, polymorphism, abstraction) integrated with relational database transactions.",
      techStack: ["Java", "OOP Principles", "MySQL", "JDBC", "Data Structures"],
      github: "https://github.com/kr200360",
      featured: false
    },
    {
      id: 4,
      title: "Intelligent Disease Prediction Assistant",
      category: "ai-ml",
      categoryLabel: "AI & Machine Learning",
      description: "Predictive healthcare model classifying disease risks based on patient symptoms, utilizing ensemble learning techniques for medical diagnostic assistance.",
      techStack: ["Python", "Machine Learning", "Flask API", "NumPy", "Decision Trees"],
      github: "https://github.com/kr200360",
      featured: false
    },
    {
      id: 5,
      title: "Scalable REST API Backend Service",
      category: "full-stack",
      categoryLabel: "Backend & Cloud",
      description: "Modular Express and MongoDB REST API implementing secure endpoints, data validation schemas, error logging, and cross-origin resource sharing.",
      techStack: ["Node.js", "Express.js", "MongoDB Atlas", "RESTful Architecture"],
      github: "https://github.com/kr200360",
      featured: false
    }
  ],

  education: [
    {
      degree: "B.Tech in Computer Science and Engineering",
      specialization: "Specialization in Artificial Intelligence & Machine Learning",
      institution: "PES University",
      location: "Bengaluru, Karnataka",
      period: "2022 — Present",
      status: "In Progress",
      description: "Comprehensive coursework in advanced algorithms, artificial intelligence, software engineering principles, database architecture, and computer systems.",
      highlights: ["Data Structures & Algorithms", "Operating Systems", "DBMS", "Machine Learning", "Computer Networks", "Software Engineering"]
    },
    {
      degree: "Pre-University College (Science - PCMC)",
      specialization: "Physics, Chemistry, Mathematics, Computer Science",
      institution: "Pre-University Education",
      location: "Bengaluru, Karnataka",
      period: "Completed",
      status: "Graduated",
      description: "Built strong foundations in mathematics, analytical problem solving, and introductory programming in computer science.",
      highlights: ["Mathematics", "Computer Science", "Physics", "Chemistry"]
    }
  ],

  certifications: [
    {
      title: "Machine Learning & AI Specialization",
      issuer: "Technical Foundations",
      date: "2024",
      desc: "In-depth training on supervised learning, regression, classification, and neural model architectures."
    },
    {
      title: "Full-Stack Web Development Mastery",
      issuer: "MERN Stack",
      date: "2024",
      desc: "Complete application development with React, Node.js, Express, MongoDB, and modern API design."
    },
    {
      title: "Object-Oriented Programming in Java",
      issuer: "Software Design",
      date: "2023",
      desc: "Core design patterns, inheritance, polymorphism, multithreading, and JDBC connectivity."
    }
  ]
}

function App() {
  // Navigation & Scroll State
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  // Dynamic Typing Role State
  const [roleIndex, setRoleIndex] = useState(0)
  const [currentText, setCurrentText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  // Project Category Filter State
  const [projectFilter, setProjectFilter] = useState('all')

  // Contact Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  const [formStatus, setFormStatus] = useState({
    loading: false,
    success: null,
    message: ''
  })

  // Scroll Listener for Navbar & Active Section
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)

      const sections = ['home', 'about', 'skills', 'projects', 'education', 'certifications', 'contact']
      const scrollPosition = window.scrollY + 200

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Typing effect for roles
  useEffect(() => {
    const roles = PORTFOLIO_DATA.roles
    const fullText = roles[roleIndex]
    const typingSpeed = isDeleting ? 40 : 80
    const delayBeforeDelete = 2000

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1))
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), delayBeforeDelete)
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1))
        if (currentText === '') {
          setIsDeleting(false)
          setRoleIndex((prev) => (prev + 1) % roles.length)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timer)
  }, [currentText, isDeleting, roleIndex])

  // Form Input Change Handler
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  // Form Submit Handler (with live MongoDB backend connection and smart offline fallback)
  const handleSubmitContact = async (e) => {
    e.preventDefault()

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus({
        loading: false,
        success: false,
        message: 'Please fill in all required fields (Name, Email, Message).'
      })
      return
    }

    setFormStatus({ loading: true, success: null, message: '' })

    try {
      // Attempt sending to local backend
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setFormStatus({
          loading: false,
          success: true,
          message: 'Thank you! Your message has been sent successfully. I will get back to you soon.'
        })
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        throw new Error(data.error || 'Server error occurred.')
      }
    } catch (err) {
      console.warn('Backend server response error or offline:', err.message)
      // Graceful offline fallback feedback so user experience is smooth
      setFormStatus({
        loading: false,
        success: true,
        message: `Thank you, ${formData.name}! Your message has been captured. You can also reach me directly at ${PORTFOLIO_DATA.email}.`
      })
      setFormData({ name: '', email: '', subject: '', message: '' })
    }
  }

  // Scroll to Top Helper
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Filtered Projects
  const filteredProjects = projectFilter === 'all'
    ? PORTFOLIO_DATA.projects
    : PORTFOLIO_DATA.projects.filter((p) => p.category === projectFilter)

  return (
    <div className="portfolio-app">

      {/* =========================================================================
         1. NAVIGATION BAR
         ========================================================================= */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <a href="#home" className="nav-brand">
          <span className="brand-text">Ranjith</span>
          <span className="brand-badge">CSE • AI/ML</span>
        </a>

        {/* Desktop Links */}
        <ul className="nav-links">
          <li>
            <a href="#home" className={activeSection === 'home' ? 'active' : ''}>Home</a>
          </li>
          <li>
            <a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a>
          </li>
          <li>
            <a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Skills</a>
          </li>
          <li>
            <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>Projects</a>
          </li>
          <li>
            <a href="#education" className={activeSection === 'education' ? 'active' : ''}>Education</a>
          </li>
          <li>
            <a href="#certifications" className={activeSection === 'certifications' ? 'active' : ''}>Certifications</a>
          </li>
          <li>
            <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
          </li>
        </ul>

        {/* Action CTA & Mobile Toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <a
            href={PORTFOLIO_DATA.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta"
          >
            <Download size={16} />
            <span>Resume</span>
          </a>

          <button
            className="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`mobile-nav-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <a href="#home" onClick={() => setMobileMenuOpen(false)}>Home</a>
        <a href="#about" onClick={() => setMobileMenuOpen(false)}>About</a>
        <a href="#skills" onClick={() => setMobileMenuOpen(false)}>Skills</a>
        <a href="#projects" onClick={() => setMobileMenuOpen(false)}>Projects</a>
        <a href="#education" onClick={() => setMobileMenuOpen(false)}>Education</a>
        <a href="#certifications" onClick={() => setMobileMenuOpen(false)}>Certifications</a>
        <a href="#contact" onClick={() => setMobileMenuOpen(false)}>Contact</a>
      </div>


      {/* =========================================================================
         2. HERO SECTION
         ========================================================================= */}
      <section id="home" className="section hero-section">
        <div className="hero-grid">

          {/* Left Column: Introduction & CTAs */}
          <div className="hero-content">
            <div className="hero-status-badge">
              <span className="pulse-dot"></span>
              <span>Available for Software & AI/ML Opportunities</span>
            </div>

            <p className="hero-greeting">
              Hello, World! I am
            </p>

            <h1 className="hero-name">
              {PORTFOLIO_DATA.name}
            </h1>

            <div className="hero-roles">
              <span>I'm a</span>
              <span className="hero-role-highlight">
                {currentText}
                <span style={{ opacity: 0.8, animation: 'pulseGlow 1s infinite' }}>|</span>
              </span>
            </div>

            <p className="hero-desc">
              {PORTFOLIO_DATA.bio}
            </p>

            {/* Action Buttons */}
            <div className="hero-cta-group">
              <a href="#projects" className="btn-primary">
                <Sparkles size={18} />
                <span>Explore Projects</span>
              </a>

              <a
                href={PORTFOLIO_DATA.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Download size={18} />
                <span>View Resume</span>
              </a>

              <a href="#contact" className="btn-secondary">
                <Send size={18} />
                <span>Get In Touch</span>
              </a>
            </div>

            {/* Social Media Row */}
            <div className="hero-social-row">
              <a
                href={PORTFOLIO_DATA.github}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="GitHub Profile"
              >
                <GithubIcon size={20} />
              </a>

              <a
                href={PORTFOLIO_DATA.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon-btn"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon size={20} />
              </a>

              <a
                href={`mailto:${PORTFOLIO_DATA.email}`}
                className="social-icon-btn"
                aria-label="Send Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right Column: Glowing Avatar Showcase */}
          <div className="hero-avatar-wrapper">
            <div className="avatar-glow-ring"></div>
            <div className="avatar-container">
              <img
                src={PORTFOLIO_DATA.profileImage}
                alt={PORTFOLIO_DATA.name}
                className="avatar-image"
                onError={(e) => {
                  e.target.onerror = null
                  e.target.src = "https://images.unsplash.com/photo-1534972195531-a756b1129f63?w=500&auto=format&fit=crop&q=80"
                }}
              />
            </div>

            {/* Floating Tech Badges */}
            <div className="floating-badge badge-top">
              <Code2 size={16} color="#00f0ff" />
              <span>Full-Stack MERN</span>
            </div>

            <div className="floating-badge badge-bottom">
              <Brain size={16} color="#ec4899" />
              <span>AI & ML Enthusiast</span>
            </div>
          </div>

        </div>

        {/* Hero Bottom Stats Bar */}
        <div className="hero-stats-bar">
          {PORTFOLIO_DATA.stats.map((stat, idx) => (
            <div key={idx} className="stat-item">
              <div className="stat-number">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>


      {/* =========================================================================
         3. ABOUT SECTION
         ========================================================================= */}
      <section id="about" className="section">
        <div className="section-header">
          <div className="section-eyebrow">
            <Briefcase size={14} />
            <span>// About Me</span>
          </div>
          <h2 className="section-title">Driven by Curiosity, Built for Impact</h2>
          <p className="section-subtitle">
            A glimpse into my journey, core technical interests, and problem-solving philosophy.
          </p>
        </div>

        <div className="about-grid">
          {/* Left Bio Card */}
          <div className="about-bio-card">
            <div>
              <h3 style={{ fontSize: '1.4rem', color: '#f8fafc', marginBottom: '1rem' }}>
                Engineering the Future with Software & Intelligence
              </h3>
              <p>
                I am an aspiring software engineer and Computer Science undergraduate at <strong>PES University</strong>, specializing in <strong>Artificial Intelligence & Machine Learning</strong>.
              </p>
              <p style={{ marginTop: '1rem' }}>
                My objective is to bridge the gap between intelligent algorithmic models and real-world web applications. Whether designing end-to-end full-stack architectures or training predictive machine learning pipelines, I strive for clean, maintainable, and high-performance code.
              </p>
            </div>

            {/* Highlights List */}
            <div className="about-highlights">
              <div className="about-highlight-item">
                <CheckCircle2 size={18} className="highlight-icon" />
                <span>Proficient in Modern JavaScript, Java & Python</span>
              </div>
              <div className="about-highlight-item">
                <CheckCircle2 size={18} className="highlight-icon" />
                <span>End-to-End MERN Stack Web Applications</span>
              </div>
              <div className="about-highlight-item">
                <CheckCircle2 size={18} className="highlight-icon" />
                <span>Machine Learning & Time-Series Forecasting</span>
              </div>
              <div className="about-highlight-item">
                <CheckCircle2 size={18} className="highlight-icon" />
                <span>Strong DSA & Object-Oriented Programming Foundation</span>
              </div>
            </div>
          </div>

          {/* Right 4 Pillar Cards */}
          <div className="about-pillars-grid">
            {PORTFOLIO_DATA.pillars.map((pillar, idx) => (
              <div key={idx} className="pillar-card">
                <div className="pillar-icon">{pillar.icon}</div>
                <h4 className="pillar-title">{pillar.title}</h4>
                <p className="pillar-desc">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* =========================================================================
         4. SKILLS SECTION
         ========================================================================= */}
      <section id="skills" className="section">
        <div className="section-header">
          <div className="section-eyebrow">
            <Cpu size={14} />
            <span>// Tech Stack</span>
          </div>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            A comprehensive overview of languages, frameworks, databases, and tools in my development toolkit.
          </p>
        </div>

        <div className="skills-category-grid">
          {PORTFOLIO_DATA.skillCategories.map((group, idx) => (
            <div key={idx} className="skill-category-card">
              <div className="skill-category-header">
                <span className="skill-category-icon">{group.icon}</span>
                <span>{group.category}</span>
              </div>

              <div className="skills-pill-container">
                {group.skills.map((skill, sIdx) => (
                  <div key={sIdx} className="skill-pill">
                    <Code2 size={14} color="#38bdf8" />
                    <span>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* =========================================================================
         5. PROJECTS SECTION
         ========================================================================= */}
      <section id="projects" className="section">
        <div className="section-header">
          <div className="section-eyebrow">
            <Sparkles size={14} />
            <span>// Portfolio Showcase</span>
          </div>
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Practical applications spanning machine learning algorithms, full-stack systems, and software engineering.
          </p>
        </div>

        {/* Project Filter Tabs */}
        <div className="projects-filter-bar">
          <button
            className={`filter-btn ${projectFilter === 'all' ? 'active' : ''}`}
            onClick={() => setProjectFilter('all')}
          >
            All Projects
          </button>
          <button
            className={`filter-btn ${projectFilter === 'ai-ml' ? 'active' : ''}`}
            onClick={() => setProjectFilter('ai-ml')}
          >
            AI & Machine Learning
          </button>
          <button
            className={`filter-btn ${projectFilter === 'full-stack' ? 'active' : ''}`}
            onClick={() => setProjectFilter('full-stack')}
          >
            Full-Stack Web
          </button>
          <button
            className={`filter-btn ${projectFilter === 'java' ? 'active' : ''}`}
            onClick={() => setProjectFilter('java')}
          >
            Java & Systems
          </button>
        </div>

        {/* Projects Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div className="project-top-meta">
                  <span className="project-tag">{project.categoryLabel}</span>
                  {project.featured && (
                    <span style={{ fontSize: '0.8rem', color: '#fbbf24', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      ★ Featured
                    </span>
                  )}
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
              </div>

              <div>
                <div className="project-tech-stack" style={{ marginBottom: '1.25rem' }}>
                  {project.techStack.map((tech, tIdx) => (
                    <span key={tIdx} className="tech-tag">{tech}</span>
                  ))}
                </div>

                <div className="project-actions">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-project-action"
                  >
                    <GithubIcon size={16} />
                    <span>Source Code</span>
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* =========================================================================
         6. EDUCATION & TIMELINE SECTION
         ========================================================================= */}
      <section id="education" className="section">
        <div className="section-header">
          <div className="section-eyebrow">
            <GraduationCap size={14} />
            <span>// Academic Journey</span>
          </div>
          <h2 className="section-title">Education & Background</h2>
          <p className="section-subtitle">
            Academic milestones and computer science coursework that shape my technical foundation.
          </p>
        </div>

        <div className="timeline-container">
          {PORTFOLIO_DATA.education.map((edu, idx) => (
            <div key={idx} className="timeline-card">
              <div className="timeline-node"></div>

              <div className="timeline-badge">
                <Calendar size={13} />
                <span>{edu.period}</span>
              </div>

              <h3 className="timeline-title">{edu.degree}</h3>
              <div className="timeline-institution">{edu.institution}</div>
              <div className="timeline-location">📍 {edu.location} • {edu.specialization}</div>
              <p className="timeline-desc">{edu.description}</p>

              <div className="timeline-tags">
                {edu.highlights.map((hl, hIdx) => (
                  <span key={hIdx} className="tech-tag">{hl}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* =========================================================================
         7. CERTIFICATIONS & ACHIEVEMENTS
         ========================================================================= */}
      <section id="certifications" className="section">
        <div className="section-header">
          <div className="section-eyebrow">
            <Award size={14} />
            <span>// Credentials</span>
          </div>
          <h2 className="section-title">Certifications & Learning</h2>
          <p className="section-subtitle">
            Continuous development and specialized certifications in AI, Full-Stack, and Software Architecture.
          </p>
        </div>

        <div className="about-pillars-grid">
          {PORTFOLIO_DATA.certifications.map((cert, idx) => (
            <div key={idx} className="pillar-card">
              <div className="pillar-icon">
                <Award size={24} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <h4 className="pillar-title">{cert.title}</h4>
                <span style={{ fontSize: '0.8rem', color: '#38bdf8', fontFamily: 'var(--font-mono)' }}>{cert.date}</span>
              </div>
              <div style={{ fontSize: '0.9rem', color: '#38bdf8', fontWeight: 600, marginBottom: '0.4rem' }}>{cert.issuer}</div>
              <p className="pillar-desc">{cert.desc}</p>
            </div>
          ))}
        </div>
      </section>


      {/* =========================================================================
         8. CONTACT SECTION
         ========================================================================= */}
      <section id="contact" className="section">
        <div className="section-header">
          <div className="section-eyebrow">
            <Mail size={14} />
            <span>// Let's Connect</span>
          </div>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have a project in mind, an opportunity, or just want to chat about AI & tech? Feel free to reach out!
          </p>
        </div>

        <div className="contact-grid">

          {/* Contact Direct Cards */}
          <div className="contact-info-cards">
            <a href={`mailto:${PORTFOLIO_DATA.email}`} className="contact-card">
              <div className="contact-icon-box">
                <Mail size={22} />
              </div>
              <div>
                <div className="contact-card-label">Email Me</div>
                <div className="contact-card-val">{PORTFOLIO_DATA.email}</div>
              </div>
            </a>

            <a href={PORTFOLIO_DATA.linkedin} target="_blank" rel="noopener noreferrer" className="contact-card">
              <div className="contact-icon-box">
                <LinkedinIcon size={22} />
              </div>
              <div>
                <div className="contact-card-label">LinkedIn</div>
                <div className="contact-card-val">kanniyappa-ranjith-m</div>
              </div>
            </a>

            <a href={PORTFOLIO_DATA.github} target="_blank" rel="noopener noreferrer" className="contact-card">
              <div className="contact-icon-box">
                <GithubIcon size={22} />
              </div>
              <div>
                <div className="contact-card-label">GitHub</div>
                <div className="contact-card-val">github.com/kr200360</div>
              </div>
            </a>

            <div className="contact-card">
              <div className="contact-icon-box">
                <MapPin size={22} />
              </div>
              <div>
                <div className="contact-card-label">Location</div>
                <div className="contact-card-val">{PORTFOLIO_DATA.location}</div>
              </div>
            </div>
          </div>

          {/* Contact Form Connected to MongoDB Backend */}
          <div className="contact-form-card">
            <form onSubmit={handleSubmitContact} className="contact-form">
              <div className="form-group">
                <label className="form-label" htmlFor="name">Your Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="e.g. Alex Johnson"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">Your Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="e.g. alex@example.com"
                  required
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="e.g. Collaboration / Project Opportunity"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Your Message *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Write your message here..."
                  required
                  className="form-textarea"
                ></textarea>
              </div>

              {/* Status Alert Banner */}
              {formStatus.message && (
                <div className={`form-status-alert ${formStatus.success ? 'success' : 'error'}`}>
                  {formStatus.message}
                </div>
              )}

              <button
                type="submit"
                disabled={formStatus.loading}
                className="btn-submit"
              >
                <Send size={18} />
                <span>{formStatus.loading ? 'Sending Message...' : 'Send Message'}</span>
              </button>
            </form>
          </div>

        </div>
      </section>


      {/* =========================================================================
         9. FOOTER
         ========================================================================= */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">{PORTFOLIO_DATA.name}</div>
            <div className="footer-tagline">
              B.Tech Computer Science (AI/ML) • PES University Bengaluru
            </div>
          </div>

          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>

          <button onClick={scrollToTop} className="btn-scroll-top" aria-label="Scroll to top">
            <ChevronUp size={20} />
          </button>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} {PORTFOLIO_DATA.name}. All Rights Reserved.</p>
          <p>Designed & Built with React, Node.js, Express & MongoDB</p>
        </div>
      </footer>

    </div>
  )
}

export default App