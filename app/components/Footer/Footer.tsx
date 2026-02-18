import React from "react"
import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <strong>BPM Consultores</strong>
          <p className={styles.copy}>© {new Date().getFullYear()} BPM Consultores. Todos los derechos reservados.</p>
        </div>

        <div className={styles.columns}>
          <div className={styles.col}>
            <h4>Product</h4>
            <ul>
              <li>Features</li>
              <li>Pricing</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className={styles.col}>
            <h4>Company</h4>
            <ul>
              <li>About</li>
              <li>Contact</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className={styles.col}>
            <h4>Legal</h4>
            <ul>
              <li>Privacy</li>
              <li>Terms</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
