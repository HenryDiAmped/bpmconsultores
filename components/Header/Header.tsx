"use client"

import Link from "next/link"
import { useState } from "react"
import { useTranslation } from "react-i18next"
import styles from "./Header.module.css"

type NavItem = { label: string; href: string; external?: boolean }

interface HeaderProps {
  logo?: React.ReactNode
  actions?: React.ReactNode
  fixed?: boolean
  transparent?: boolean
  size?: "sm" | "md" | "lg"
  className?: string
}

export default function Header({
  logo,
  actions,
  fixed = false,
  transparent = false,
  size = "md",
  className = "",
}: HeaderProps) {
  const [open, setOpen] = useState(false)
  const { t } = useTranslation()

  const nav: NavItem[] = [
    { label: t('nav.home'), href: "/" },
    { label: t('nav.services'), href: "/servicios" },
    { label: t('nav.about'), href: "/nosotros" },
    { label: t('nav.blog'), href: "/blog" },
    { label: t('nav.contact'), href: "/contacto" },
  ]

  return (
    <header
      className={`${styles.header} ${fixed ? styles.fixed : ""} ${
        transparent ? styles.transparent : ""
      } ${styles[size]} ${className}`}
    >
      <div className={styles.container}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo} onClick={() => setOpen(false)}>
            {logo ?? <span className={styles.logoText}>BPM Consultores y Saas</span>}
          </Link>
        </div>

        <nav className={styles.desktopNav} aria-label="Main navigation">
          <ul className={styles.navList}>
            {nav.map((item) => (
              <li key={item.href} className={styles.navItem}>
                <Link
                  href={item.href}
                  className={styles.navLink}
                  {...(item.external ? { target: "_blank", rel: "noopener" } : {})}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.controls}>
          <div className={styles.actions}>{actions}</div>

          <button
            className={styles.mobileToggle}
            aria-controls="primary-navigation"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
          >
            <span className={styles.hamburger} />
          </button>
        </div>
      </div>

      <div
        id="primary-navigation"
        className={`${styles.mobileMenu} ${open ? styles.open : ""}`}
        aria-hidden={!open}
      >
        <ul className={styles.mobileNavList}>
          {nav.map((item) => (
            <li key={item.href} className={styles.mobileNavItem}>
              <Link
                href={item.href}
                className={styles.mobileNavLink}
                onClick={() => setOpen(false)}
                {...(item.external ? { target: "_blank", rel: "noopener" } : {})}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
