import { 
    // useState, 
    useEffect, 
    useRef 
} from 'react';
import styles from './Contact.module.css';

// ── Contact links — edit or add entries here ──
const LINKS = [
  { type: 'Email',    label: 'duke.norsworthy@gmail.com', href: 'mailto:duke.norsworthy@gmail.com' },
  { type: 'LinkedIn', label: 'Duke Norsworthy',         href: 'https://linkedin.com/in/duke-norsworthy', external: true },
  { type: 'GitHub',   label: 'Duke1014',         href: 'https://github.com/Duke1014',      external: true },
];

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('visible'); observer.unobserve(el); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

export default function Contact() {
  const leftRef  = useReveal();
  const rightRef = useReveal();

//   const [form, setForm]     = useState({ name: '', email: '', subject: '', message: '' });
//   const [status, setStatus] = useState('idle'); // idle | sending | sent | error

//   const handleChange = (e) =>
//     setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

//   const handleSubmit = async () => {
//     setStatus('sending');
//     // ── Wire up to your backend or a service like Formspree / EmailJS ──
//     // Example with Formspree:
//     //   const res = await fetch('https://formspree.io/f/YOUR_ID', {
//     //     method: 'POST',
//     //     headers: { 'Content-Type': 'application/json' },
//     //     body: JSON.stringify(form),
//     //   });
//     //   setStatus(res.ok ? 'sent' : 'error');
//     //
//     // For now, simulate a short delay:
//     await new Promise((r) => setTimeout(r, 800));
//     setStatus('sent');
//   };

  return (
    <section id="contact" className={styles.contact}>
      <div className="container">
        <div className="row g-5">

          {/* ── Left: links ── */}
          <div className={`col-lg-5 reveal`} ref={leftRef}>
            <p className="section-label">Contact</p>
            <h2 className="section-title">
              Let's work<br /><em>together</em>
            </h2>
            <p className={styles.lead}>
              Have a project in mind, a role to fill, or just want to say hello?
              I'd love to hear from you.
            </p>

            
          </div>

          {/* ── Right: form ── */}
          <div className={`col-lg-6 offset-lg-1 reveal reveal-delay-2`} ref={rightRef}>
            <div className={styles.links}>
              {LINKS.map(({ type, label, href, external }) => (
                <a
                  key={type}
                  href={href}
                  className={styles.linkItem}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <div>
                    <p className={styles.linkType}>{type}</p>
                    <p className={styles.linkLabel}>{label}</p>
                  </div>
                  <span className={styles.linkArrow}>↗</span>
                </a>
              ))}
            </div>
            {/* <div className={styles.formWrapper}>
              <p className={styles.formHeading}>Send a message</p>

              {status === 'sent' ? (
                <div className={styles.successMsg}>
                  <p>Message sent — I'll be in touch soon.</p>
                </div>
              ) : (
                <>
                  {[
                    { id: 'name',    label: 'Name',    type: 'text',  placeholder: 'Your full name' },
                    { id: 'email',   label: 'Email',   type: 'email', placeholder: 'your@email.com' },
                    { id: 'subject', label: 'Subject', type: 'text',  placeholder: "What's this about?" },
                  ].map(({ id, label, type, placeholder }) => (
                    <div key={id} className={styles.formGroup}>
                      <label className={styles.label} htmlFor={id}>{label}</label>
                      <input
                        id={id}
                        name={id}
                        type={type}
                        className={styles.input}
                        placeholder={placeholder}
                        value={form[id]}
                        onChange={handleChange}
                      />
                    </div>
                  ))}

                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      className={`${styles.input} ${styles.textarea}`}
                      placeholder="Tell me about your project or idea…"
                      value={form.message}
                      onChange={handleChange}
                    />
                  </div>

                  <button
                    className="btn-primary"
                    style={{ width: '100%', textAlign: 'center' }}
                    onClick={handleSubmit}
                    disabled={status === 'sending'}
                  >
                    {status === 'sending' ? 'Sending…' : 'Send Message'}
                  </button>

                  {status === 'error' && (
                    <p className={styles.errorMsg}>Something went wrong — please try again.</p>
                  )}
                </>
              )}
            </div> */}
          </div>

        </div>
      </div>
    </section>
  );
}
