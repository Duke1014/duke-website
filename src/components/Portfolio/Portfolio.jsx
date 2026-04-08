import { 
    // useState, 
    useEffect, 
    useRef 
} from 'react';
import styles from './Portfolio.module.css';

// ─────────────────────────────────────────────
// PROJECT DATA
// Add, remove, or edit projects here.
//
// Fields:
//   id       – unique string
//   num      – display number e.g. '01'
//   title    – project title
//   desc     – short description
//   tags     – array of tag strings (also used for filtering)
//   category – matches a filter button: 'Design' | 'Development' | 'Branding' (or add your own)
//   href     – link to live project or case study ('#' if none yet)
//   layout   – grid column width: 'wide' | 'narrow' | 'third' | 'half' | 'full'
//   thumb    – path to image, e.g. '/images/project-one.jpg'
//              Leave as null to show the placeholder gradient.
//   gradient – fallback gradient when thumb is null
// ─────────────────────────────────────────────
const PROJECTS = [
  {
    id: 'p1',
    num: '01',
    title: 'Dalaya',
    desc: 'An Emulated EverQuest Server, created and curated with homebrewed web tools',
    tags: ['Game', 'Web'],
    // category: 'Development',
    href: '#',
    layout: 'narrow',
    thumb: null,
    gradient: 'linear-gradient(135deg, #05050f 0%, #0c0c22 60%, #05050f 100%)',
  },
  {
    id: 'p2',
    num: '02',
    title: 'Memory Game',
    desc: 'Software Development class capstone. In our small team of three, I led the front-end development and assisted in connecting our database for a working score leaderboard.',
    tags: ['Web', 'Game'],
    // category: 'Design',
    href: '#',
    layout: 'narrow',
    thumb: null,
    gradient: 'linear-gradient(135deg, #050f10 0%, #0c2022 60%, #050f0e 100%)',
  },
  {
    id: 'p3',
    num: '03',
    title: 'Insight Forge',
    desc: 'An AI Hackathon winner, Insight Forge brings AI-powered grant readiness and draft proposals to non-profits.',
    tags: ['Web', 'AI-Powered'],
    // category: 'Branding',
    href: '#',
    layout: 'narrow',
    thumb: null,
    gradient: 'linear-gradient(135deg, #0f050f 0%, #1a0c22 60%, #0f050f 100%)',
  },
//   {
//     id: 'p4',
//     num: '04',
//     title: 'Project Title Four',
//     desc: 'Short description of this project.',
//     tags: ['Tag One', 'Tag Two'],
//     category: 'Development',
//     href: '#',
//     layout: 'third',
//     thumb: null,
//     gradient: 'linear-gradient(135deg, #05080f 0%, #0c1422 60%, #050810 100%)',
//   },
//   {
//     id: 'p5',
//     num: '05',
//     title: 'Project Title Five',
//     desc: 'Short description of this project.',
//     tags: ['Tag One', 'Tag Two'],
//     category: 'Design',
//     href: '#',
//     layout: 'third',
//     thumb: null,
//     gradient: 'linear-gradient(135deg, #050f08 0%, #0c2214 60%, #050f08 100%)',
//   },
];

// const FILTERS = ['All', 'Web', 'Game', 'AI-Powered'];

function useReveal(deps = []) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); observer.unobserve(el); } },
      { threshold: 0.08 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  return ref;
}

function ProjectCard({ project }) {
  const { num, title, desc, tags, href, layout, thumb, gradient } = project;
  return (
    <div className={`${styles.card} ${styles[layout]}`}>
      <div className={styles.thumb}>
        {thumb
          ? <img src={thumb} alt={title} className={styles.thumbImg} />
          : <div className={styles.thumbInner} style={{ background: gradient }} />
        }
      </div>
      <div className={styles.meta}>
        <p className={styles.num}>{num}</p>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.desc}>{desc}</p>
        <div className={styles.tags}>
          {tags.map((t) => <span key={t} className={styles.tag}>{t}</span>)}
        </div>
      </div>
      <a href={href} className={styles.link} aria-label="View project">↗</a>
    </div>
  );
}

export default function Portfolio() {
//   const [active, setActive] = useState('All');
  const active = 'All'
  const headerRef = useReveal();
  const gridRef   = useReveal([active]);

  const visible = active === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === active);

  return (
    <section id="portfolio" className={styles.portfolio}>
      <div className="container">

        <div className={`reveal ${styles.header}`} ref={headerRef}>
          <p className="section-label">Selected Work</p>
          <h2 className="section-title">
            Things I've<br /><em>built &amp; designed</em>
          </h2>

          {/* <div className={styles.filters}>
            {FILTERS.map((f) => (
              <button
                key={f}
                className={`${styles.filterBtn} ${active === f ? styles.filterActive : ''}`}
                onClick={() => setActive(f)}
              >
                {f}
              </button>
            ))}
          </div> */}
        </div>

        <div className={`reveal ${styles.grid}`} ref={gridRef}>
          {visible.map((p) => <ProjectCard key={p.id} project={p} />)}
        </div>

        <div className={styles.more}>
          <p className={styles.moreNote}>Links and thumbnails coming soon! Reach out if you want to discuss more about these.</p>
          <a href="#contact" className="btn-ghost">Let's Talk →</a>
        </div>

      </div>
    </section>
  );
}
