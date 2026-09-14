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
    'React',
    'React.js',
    'Next.js',
    'Node.js',
    'Nest.js',
    'TypeScript',
    'JavaScript',
    'Jotai',
    'Redux',
    'Material UI',
    'Tailwind CSS',
    'Strapi CMS',
    'Payload CMS',
    'WordPress CMS',
    'Astro',
    'Shopify Liquid',
    'Shopify',
    'Webflow',
    'NitroJS',
    'ParcelJS',
    'CSS-in-JS',
    'CSS',
    'Framer Motion',
    'React Transition Group',
    'FaunaDB',
    'Algolia',
    'Stripe',
    'Mocha',
    'Chai',
    'Nock',
    'React Apollo',
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
          name: 'Sunday Capital',
          role: 'Lead Frontend Engineer',
          tech: ['React', 'Next.js', 'Payload CMS', 'Tailwind CSS'],
          url: 'https://www.sundaycap.com/',
          highlights: [
            'Implemented the full CMS-to-frontend experience',
            'Built smooth, responsive user interfaces with polished animations',
          ],
        },
        {
          name: 'Fin Forecasting',
          role: 'Lead Frontend Engineer',
          tech: ['React', 'Next.js', 'Payload CMS', 'Tailwind CSS'],
          url: 'https://www.finforecasting.com/',
          highlights: [
            'Implemented the full CMS-to-frontend experience',
            'Built smooth, responsive user interfaces with polished animations',
          ],
        },
        {
          name: 'Span.io',
          role: 'Lead React Integration Engineer',
          tech: [
            'React',
            'ReactJS',
            'NitroJS',
            'ParcelJS',
            'CSS-in-JS',
            'CSS',
            'Node.js',
          ],
          urls: [
            'https://span-website.webflow.io/get-started',
            'https://span-website.webflow.io/calculator',
          ],
          highlights: [
            'Built ReactJS project lead forms embedded into Webflow',
            'Built Node.js backend APIs supporting Facebook and Salesforce analytics',
            'Implemented communication between Webflow and embedded iframes using the browser PostMessage API',
          ],
        },
        {
          name: 'Hudson Grace',
          role: 'Lead Shopify Engineer',
          tech: ['Shopify Liquid', 'JavaScript', 'CSS', 'Shopify'],
          url: 'https://hudsongracesf.com/',
          highlights: [
            'Implemented custom product filtering functionality',
            'Implemented a customized gift card flow allowing customers to schedule delivery',
            'Developed and maintained Shopify storefront functionality using Liquid and JavaScript',
          ],
        },
        {
          name: 'Civics Academy',
          role: 'Lead Frontend Engineer',
          tech: ['React', 'Next.js', 'Payload CMS', 'Tailwind CSS'],
          url: 'https://civics-academy.vercel.app/',
          highlights: [
            'Implemented custom carousel components',
            'Built reusable frontend components using React and Next.js',
          ],
        },
        {
          name: 'Lives and Livelihoods Fund',
          role: 'Lead Frontend Engineer',
          tech: [
            'React',
            'Next.js',
            'Strapi CMS',
            'Framer Motion',
            'React Transition Group',
          ],
          url: 'https://www.livesandlivelihoodsfund.org/en',
          highlights: [
            'Architected the frontend codebase to achieve the desired UI layout',
            'Implemented a custom grid system for responsive layouts',
            'Implemented the landing page',
            'Built custom Modal, RadioGroup, Bar Chart, and Circular Progress Bar components',
          ],
        },
        {
          name: 'Peeq Disco (Media Disco)',
          role: 'Software Engineer',
          tech: [
            'React',
            'Next.js',
            'Nest.js',
            'FaunaDB',
            'React Transition Group',
            'Algolia',
            'Stripe',
            'Jotai',
            'Redux',
          ],
          url: 'https://beta.peeqdisco.com',
          highlights: [
            'Built custom Slide Out Container, OTP Form Input, Toaster, Modal, and animation wrapper components',
            'Implemented role-based account creation',
            'Integrated Algolia search and filtering across the frontend and backend',
            'Integrated subscription services supporting multiple plans across the frontend and backend',
          ],
        },
        {
          name: 'Grow Therapy',
          role: 'Lead Frontend Engineer',
          tech: ['React', 'Astro', 'WordPress CMS'],
          url: 'https://growtherapy.com/',
          highlights: [
            'Standardized component layouts across pages to maintain consistency with designs',
            'Built a custom React filter component for therapist discovery',
            'Built dynamic custom components configurable through WordPress CMS',
            'Integrated Gravity Forms',
          ],
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
            'Implemented frontend functionality for scheduling student trials',
            'Built functionality for students to request lessons',
            'Implemented lesson rescheduling through a calendar interface',
            'Implemented instructor rating functionality',
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
            'Built a Node.js library for consuming the required Quickteller SVA APIs',
            'Integrated the APIs to support features such as airtime purchases',
            'Used Mocha, Chai, and Nock for testing API integrations',
          ],
        },
        {
          name: 'Wakanow Flight Booking API Integration',
          role: 'Lead Engineer',
          tech: ['TypeScript', 'Node.js'],
          url: 'https://github.com/rkterungwa16/wakanow-node',
          highlights: [
            'Built a TypeScript library for consuming the APIs required for flight booking',
            'Integrated the library into the platform to enable customers to book flights',
          ],
        },
        {
          name: 'Admin Dashboard',
          role: 'Lead Frontend Engineer',
          tech: ['React', 'React Apollo'],
          highlights: [
            'Built an internal admin dashboard for managing merchants',
            'Implemented the frontend using React and React Apollo',
          ],
        },
      ],
    },
  ];

  const personalProjects = [
    {
      name: 'Nenge',
      tech: ['React', 'Node.js', 'Express.js', 'Mongodb', 'TypeScript', 'CSS'],
      url: 'https://terk-nenge-foto.vercel.app/',
      description: 'Platform to connect with the best photographers',
    },
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
    {
      name: 'React Hotel Booking Website',
      tech: ['React'],
      url: 'https://github.com/rkterungwa16/terkstay',
      description: 'Find the best hotels and rooms online. Modify the UI to your liking',
    },
    {
      name: 'React Calendar Scheduling App',
      tech: ['React'],
      url: 'https://github.com/rkterungwa16/terk-schedule-manager',
      description: 'Manage your schedule',
    },
    {
      name: 'React Photo Grid',
      tech: ['React', 'Virtualization'],
      url: 'https://github.com/rkterungwa16/terk-photo-grid',
      description: 'Virtualized photo grid with lazy loading and infinite scrolling',
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
