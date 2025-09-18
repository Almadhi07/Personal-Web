import React from 'react';
import meImage from './assets/me.jpg';
import gradImage from './assets/gradpic.jpeg';
import webDevCertImage from './assets/Abdulrahman al Mahdi-web-dev-fall2024.jpg';
import workInProgressImage from './assets/work-inprogress.webp';

type Section = 'about' | 'education' | 'experience' | 'projects' | 'contact';

export default function App(): React.ReactElement {
  const [active, setActive] = React.useState<Section>('about');

  const NavLink: React.FC<{ id: Section; label: string }> = ({ id, label }) => (
    <a
      href={`#${id}`}
      className={active === id ? 'active' : ''}
      onClick={(e) => { e.preventDefault(); setActive(id); }}
    >
      {label}
    </a>
  );

  return (
    <div className="page">
      <header className="site-header">
        <div className="site-bar">
          <div className="brand">
            {active === 'education' ? (
              <>Education</>
            ) : active === 'experience' ? (
              <>Experience</>
            ) : active === 'contact' ? (
              <>Contact</>
            ) : active === 'projects' ? (
              <>Projects</>
            ) : (
              <>About<span className="brand-dot">Me</span>.</>
            )}
          </div>
          <nav className="topnav">
            <NavLink id="about" label="ABOUT" />
            <NavLink id="education" label="EDUCATION" />
            <NavLink id="experience" label="EXPERIENCE" />
            <NavLink id="projects" label="PROJECTS" />
            <NavLink id="contact" label="CONTACT" />
          </nav>
        </div>
      </header>

      <main id="home" className="container">
        {active === 'about' && (
          <section className="hero">
            <div>
              <div className="eyebrow">Hello, Welcome</div>
              <h1 className="hero-title">I’m Abdul Al Madhi</h1>
              <p className="hero-text">
                Senior CS student and full‑stack developer. I build performant web apps with React and Node,
                and I care about clean UI and developer experience.
              </p>
              <button className="cta-btn" onClick={() => setActive('contact')}>Contact me</button>
            </div>
            <div className="hero-photo-frame">
              <img className="hero-photo" src={meImage} alt="Abdul Al Madhi" />
            </div>
          </section>
        )}

        {active === 'education' && (
          <section className="card">
            <h2>Education</h2>
            
            <div className="education-item">
              <div className="education-content">
                <h3>University of Louisville, Speed School of Engineering</h3>
                <p className="degree">Bachelor of Science in Computer Science</p>
                <p className="gpa">GPA: 3.5/4.0</p>
                <p className="dates">Expected Graduation: May 2026</p>
                <p className="description">
                  Focused on software engineering, data structures, algorithms, and full-stack development. 
                  Completed coursework in web technologies, database systems, and software engineering principles.
                </p>
              </div>
              <div className="education-image">
                <img src={workInProgressImage} alt="Work in progress" className="cert-image" />
              </div>
            </div>

            <div className="education-item">
              <div className="education-content">
                <h3>University of Louisville</h3>
                <p className="degree">Bachelor of Science in Criminal Justice</p>
                <p className="gpa">GPA: 3.5/4.0</p>
                <p className="dates">Graduated: May 2023</p>
                <p className="description">
                  Comprehensive study of criminal justice systems, law enforcement, and legal processes. 
                  Developed strong analytical and problem-solving skills applicable to technology and software development.
                </p>
              </div>
              <div className="education-image">
                <img src={gradImage} alt="Graduation ceremony" className="cert-image" />
              </div>
            </div>

            <div className="education-item">
              <div className="education-content">
                <h3>Code:You Bootcamp</h3>
                <p className="degree">Web Development Certificate</p>
                <p className="dates">Fall 2024</p>
                <p className="description">
                  Intensive full-stack web development program covering modern technologies including 
                  React, Node.js, Express, MongoDB, and industry best practices for software development.
                </p>
              </div>
              <div className="education-image">
                <img src={webDevCertImage} alt="Web Development Certificate" className="cert-image" />
              </div>
            </div>
          </section>
        )}

        {active === 'experience' && (
          <section className="card">
            <h2>Experience</h2>
            <ul>
              <li>Xometry — Full-Stack Software Engineering Intern (May 2025 – Aug 2025)</li>
              <li>University of Louisville — IT Help Desk Technician (Jan 2024 – May 2025)</li>
            </ul>
          </section>
        )}

        {active === 'projects' && (
          <section className="card">
            <h2>Projects</h2>
            <ul>
              <li>Expense Tracker App — JS/Node/Express</li>
              <li>Python Hangman Game — Python/Tkinter</li>
              <li>ATM Machine — C</li>
            </ul>
          </section>
        )}

        {active === 'contact' && (
          <section className="card">
            <h2>Contact</h2>
            <ul>
              <li>Louisville, KY</li>
              <li><a href="tel:15022359031">502-235-9031</a></li>
              <li><a href="mailto:abdulalmadhi87@gmail.com">abdulalmadhi87@gmail.com</a></li>
              <li><a href="https://linkedin.com/in/abdul-almadhi" target="_blank" rel="noreferrer">linkedin.com/in/abdul-almadhi</a></li>
              <li><a href="https://github.com/Almadhi07" target="_blank" rel="noreferrer">github.com/Almadhi07</a></li>
            </ul>
          </section>
        )}

        <footer className="footer">© {new Date().getFullYear()} Abdul Al Madhi</footer>
      </main>
    </div>
  );
}


