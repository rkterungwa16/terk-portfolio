import { useEffect } from 'react';

export const Portfolio = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const skills = [
    'React.js',
    'Next.js',
    'Node.js',
    'Nest.js',
    'TypeScript',
    'JavaScript',
    'Jotai',
    'Redux',
    'Zustand',
    'Material UI',
    'Tailwind',
    'MongoDB',
    'PostgreSQL',
    'Express.js',
    'Angular',
    'PHP/Laravel',
  ];

  const experiences = [
    {
      date: 'April 2021 - Present',
      title: 'Senior Software Engineer',
      company: 'CauseOfAKind, NY, United States',
      projects: [
        {
          name: 'Lives and Livelihoods Fund',
          role: 'Lead Frontend Engineer',
          tech: [
            'React',
            'Next.js',
            'Strapi CMS',
            'framer-motion',
            'react-transition-group',
          ],
          url: 'https://www.livesandlivelihoodsfund.org/en',
          highlights: [
            'Architected the frontend codebase to achieve the desired UI layout',
            'Implemented a custom grid system for responsive layout',
            'Built custom components: Modal, RadioGroup, Bar Chart, and Circular progress bar',
          ],
        },
        {
          name: 'Peeq Disco (Media Disco)',
          role: 'Software Engineer',
          tech: [
            'React',
            'Next.js',
            'Nest.js',
            'Faunadb',
            'Algolia',
            'Stripe',
            'Jotai',
            'Redux',
          ],
          url: 'https://beta.peeqdisco.com',
          highlights: [
            'Built custom components: Slide out container, OTP form input, Toaster, Modals',
            'Implemented role-based account creation process',
            'Integrated Algolia search and filter (front and backend)',
            'Integrated Subscription service with multiple plans',
          ],
        },
        {
          name: 'Grow Therapy',
          role: 'Lead Frontend Engineer',
          tech: ['React', 'Astro', 'WordPress CMS'],
          url: 'https://growtherapy.com/',
          highlights: [
            'Standardized component layout for consistency with designs',
            'Built custom React filter component for therapist search',
            'Created dynamic custom components configurable from WordPress CMS',
            'Integrated gravity forms',
          ],
        },
        {
          name: 'Civics Academy',
          role: 'Lead Frontend Engineer',
          tech: ['React', 'Next.js', 'Payload CMS', 'Tailwind'],
          url: 'https://civics-academy.vercel.app/',
          highlights: ['Implemented different custom carousel components'],
        },
      ],
    },
    {
      date: 'September 2019 - December 2020',
      title: 'Lead Frontend Developer',
      company: 'Nabimusic Ltd, NY, United States',
      projects: [
        {
          name: 'Nabimusic Platform',
          role: 'Lead Frontend Developer',
          tech: [
            'React',
            'TypeScript',
            'Next.js',
            'Material UI',
            'Jest',
            'Redux',
          ],
          url: 'https://github.com/iamvane/nabiui_next',
          highlights: [
            'Implemented frontend to schedule trials for students',
            'Built feature for students to request lessons',
            'Implemented lesson rescheduling in calendar',
            'Created feature to rate instructors',
          ],
        },
      ],
    },
    {
      date: 'April 2018 - October 2019',
      title: 'Fullstack Software Developer',
      company: 'Fisshbone and Lestr, Victoria Island, Lagos, Nigeria',
      projects: [
        {
          name: "Quickteller's SVA API Integration",
          role: 'Lead Engineer',
          tech: ['Node.js', 'Mocha', 'Chai', 'Quickteller SVA API', 'Nock'],
          url: 'https://github.com/rkterungwa16/quickteller-sva-node',
          highlights: [
            'Built a library in Node.js to consume required APIs',
            'Enabled features like buying Airtime for users',
          ],
        },
        {
          name: 'Wakanow Flight Booking API Integration',
          role: 'Lead Engineer',
          tech: ['TypeScript', 'Node.js'],
          url: 'https://github.com/rkterungwa16/wakanow-node',
          highlights: [
            'Built a library in TypeScript to consume flight booking APIs',
            'Successfully integrated the library to enable customer flight booking',
          ],
        },
        {
          name: 'Admin Dashboard',
          role: 'Lead Engineer Frontend',
          tech: ['React', 'React-Apollo'],
          highlights: ['Created admin dashboard for merchant management'],
        },
      ],
    },
  ];

  const personalProjects = [
    {
      name: 'Custom React Combobox',
      tech: ['React', 'Cypress', 'Jest'],
      url: 'https://github.com/rkterungwa16/terkui-combobox',
      description: 'Reusable combobox component with comprehensive testing',
    },
    {
      name: 'Custom React File Upload',
      tech: ['React', 'XMLHttpRequest'],
      url: 'https://github.com/rkterungwa16/terkui-file-upload',
      description: 'Custom file upload component with progress tracking',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="grid-bg"></div>
        <div className="hero-content">
          <div className="greeting mono">Hello, I'm</div>
          <h1 className="hero-title">
            <span className="bracket">{'<'}</span>
            Richard Terungwa
            <span className="bracket">{' />'}</span>
          </h1>
          <p className="hero-subtitle">Senior Software Engineer</p>
          <p className="hero-description">
            Building scalable, user-centric web applications with modern
            JavaScript frameworks. Specialized in React ecosystem and full-stack
            development.
          </p>
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">
              Get In Touch
            </a>
            <a href="#experience" className="btn btn-secondary">
              View My Work
            </a>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="fade-in">
        <div className="section-header">
          <div className="section-label mono">// Technical Arsenal</div>
          <h2 className="section-title">Skills & Technologies</h2>
        </div>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-tag">
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="fade-in">
        <div className="section-header">
          <div className="section-label mono">// Career Journey</div>
          <h2 className="section-title">Professional Experience</h2>
        </div>
        <div className="experience-list">
          {experiences.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="experience-header">
                <div className="experience-date">{exp.date}</div>
                <h3 className="experience-title">{exp.title}</h3>
                <div className="experience-company">{exp.company}</div>
              </div>
              <div className="projects-grid">
                {exp.projects.map((project, pIndex) => (
                  <div key={pIndex} className="project-card">
                    <div className="project-name">{project.name}</div>
                    <div className="project-role">{project.role}</div>
                    <div className="project-tech">
                      {project.tech.map((tech, tIndex) => (
                        <span key={tIndex} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                    <ul className="project-highlights">
                      {project.highlights.map((highlight, hIndex) => (
                        <li key={hIndex}>{highlight}</li>
                      ))}
                    </ul>
                    {project.url && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                      >
                        View Project →
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Personal Projects */}
      <section id="projects" className="fade-in">
        <div className="section-header">
          <div className="section-label mono">// Side Projects</div>
          <h2 className="section-title">Personal Projects</h2>
        </div>
        <div className="personal-projects-grid">
          {personalProjects.map((project, index) => (
            <div key={index} className="personal-project-card">
              <div className="project-name">{project.name}</div>
              <div className="project-tech">
                {project.tech.map((tech, tIndex) => (
                  <span key={tIndex} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
              <p className="project-description">{project.description}</p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View on GitHub →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section id="education" className="fade-in">
        <div className="section-header">
          <div className="section-label mono">// Academic Background</div>
          <h2 className="section-title">Education</h2>
        </div>
        <div className="education-card">
          <h3 className="education-degree">B.Eng Civil Engineering</h3>
          <div className="education-school">
            Federal University of Agriculture, Makurdi, Nigeria
          </div>
          <div className="education-date">2004 - 2010</div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="fade-in">
        <div className="section-header">
          <div className="section-label mono">// Let's Connect</div>
          <h2 className="section-title">Get In Touch</h2>
        </div>
        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-icon">📧</div>
            <div className="contact-label mono">Email</div>
            <div className="contact-value">
              <a href="mailto:terungwakombol@gmail.com">
                terungwakombol@gmail.com
              </a>
            </div>
          </div>
          <div className="contact-card">
            <div className="contact-icon">📱</div>
            <div className="contact-label mono">Phone</div>
            <div className="contact-value">+234 813 583 3305</div>
          </div>
          <div className="contact-card">
            <div className="contact-icon">📍</div>
            <div className="contact-label mono">Location</div>
            <div className="contact-value">Lagos, Nigeria</div>
          </div>
          <div className="contact-card">
            <div className="contact-icon">💼</div>
            <div className="contact-label mono">GitHub</div>
            <div className="contact-value">
              <a
                href="https://github.com/rkterungwa16"
                target="_blank"
                rel="noopener noreferrer"
              >
                @rkterungwa16
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <p className="footer-text">
          Built with <span>❤️</span> by Richard Terungwa Kombol © 2024
        </p>
      </footer>
    </>
  );
};
