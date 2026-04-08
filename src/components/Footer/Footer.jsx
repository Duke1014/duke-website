import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.inner}>
          <p className={styles.copy}>
            © {new Date().getFullYear()} Duke Norsworthy. All rights reserved.
          </p>
          <ul className={styles.links}>
            <li><a href="#about">About</a></li>
            <li><a href="#portfolio">Work</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
