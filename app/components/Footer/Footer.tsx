"use client"
import React from "react"
import { useTranslation } from "react-i18next"
import styles from "./Footer.module.css"

export default function Footer() {
  const { t } = useTranslation()
  
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.brand}>
          <strong>BPM Consultores</strong>
          <p className={styles.copy}>© {new Date().getFullYear()} BPM Consultores. {t('footer.copyright')}.</p>
        </div>

        <div className={styles.columns}>
          <div className={styles.col}>
            <h4>{t('footer.product')}</h4>
            <ul>
              <li>{t('footer.features')}</li>
              <li>{t('footer.pricing')}</li>
              <li>{t('footer.faq')}</li>
            </ul>
          </div>
          <div className={styles.col}>
            <h4>{t('footer.company')}</h4>
            <ul>
              <li>{t('footer.about')}</li>
              <li>{t('footer.contact')}</li>
              <li>{t('footer.careers')}</li>
            </ul>
          </div>
          <div className={styles.col}>
            <h4>{t('footer.legal')}</h4>
            <ul>
              <li>{t('footer.privacy')}</li>
              <li>{t('footer.terms')}</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
