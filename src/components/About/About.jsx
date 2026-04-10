import { useEffect, useRef } from 'react';
import styles from './About.module.css';
import resume from './Duke Norsworthy - Resume.pdf'


// ── Skills — edit this array to update your skill tags ──
const SKILLS = [
  'JavaScript', 'TypeScript', 'React / Vite / Angular', 'PHP',
  'Python', 'C++', 'Ruby / Rails', 'Lua', 'C#', 'SQL'
];

// ── Aside facts — edit label/value pairs ──
const FACTS = [
  { label: 'Location',     value: 'New York City' },
  { label: 'Availability', value: 'Open to opportunities' },
  { label: 'Experience',   value: '7+ years' },
  { label: 'Current Work',    value: 'AWS Cloud Practitioner Certifications' },
];

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); observer.unobserve(el); } },
      { threshold: 0.12 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function About() {
  const leftRef  = useReveal();
  const rightRef = useReveal();

  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <div className="row g-5">

          {/* ── Bio ── */}
          <div className={`col-lg-7 reveal`} ref={leftRef}>
            <p className="section-label">About</p>
            <h2 className="section-title">
              A little about<br /><em>who I am</em>
            </h2>
            <div className="divider" />

            <p className={styles.bio}>
              Hi, I'm <em>Duke</em>. I'm a software engineer with a passion
              for <em>web and game development</em>. I strive to bring <em>lasting 
              solutions</em> to users that make their day <em>better and brighter</em>.
            </p>
            <br />
            <p className={styles.bio}>
              My background in Jazz and Folk music, entertainment, gaming, and retail bring a user-focused
              to all my work. I thrive with like-minded teams and bring scalable solutions 
              in my suite of stacks. 
            </p>
            <p className={styles.bio}>
              I am currently working on AWS Cloud certifications: Cloud Practioner, Solutions Architect, DevOps.
            </p>
            <div className={styles.skillsGrid}>
              {SKILLS.map((skill) => (
                <div key={skill} className={styles.skillTag}>{skill}</div>
              ))}
            </div>
          </div>

          {/* ── Aside ── */}
          <div className={`col-lg-4 offset-lg-1 reveal reveal-delay-2`} ref={rightRef}>
            <div className={styles.aside}>
              {FACTS.map(({ label, value }) => (
                <div key={label} className={styles.asideItem}>
                  <p className={styles.asideLabel}>{label}</p>
                  <p className={styles.asideValue}>{value}</p>
                </div>
              ))}
              <div style={{ marginTop: '2rem' }}>
                <a href={resume} className="btn-ghost" style={{ fontSize: '15px' }}>
                  Download Resume ↓
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
