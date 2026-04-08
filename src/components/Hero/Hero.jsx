import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.bgGrid} />
      <div className={styles.accentLine} />

      <div className={`container ${styles.content}`}>
        <div className="row">
          <div className="col-lg-10">
            <p className={styles.eyebrow}>Available for projects</p>

            <h1 className={styles.name}>
              Duke<br /><em>Norsworthy</em>
            </h1>

            <p className={styles.role}>
              Software Engineer &amp; Game Developer&nbsp;/&nbsp;Based in New York City
            </p>

            <div className={styles.cta}>
              <a href="#portfolio" className="btn-primary">View My Work</a>
              <a href="#contact"   className="btn-ghost">Get in Touch</a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.scrollLine} />
        <span>Scroll</span>
      </div>
    </section>
  );
}
