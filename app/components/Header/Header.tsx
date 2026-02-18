"use client"

import Link from "next/link"
import { useState } from "react"
import styles from "./Header.module.css"

type NavItem = { label: string; href: string; external?: boolean }

interface HeaderProps {
  logo?: React.ReactNode
  nav?: NavItem[]
  actions?: React.ReactNode
  fixed?: boolean
  transparent?: boolean
  size?: "sm" | "md" | "lg"
  className?: string
}

const DEFAULT_NAV: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Servicios", href: "/servicios" },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
]

export default function Header({
  logo,
  nav = DEFAULT_NAV,
  actions,
  fixed = false,
  transparent = false,
  size = "md",
  className = "",
}: HeaderProps) {
  const [open, setOpen] = useState(false)

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
