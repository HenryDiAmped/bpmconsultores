"use client";
import React from "react";
import { useTranslation } from "react-i18next";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  const { t } = useTranslation();
  const sizes = [520, 440, 360, 300, 240, 180, 140, 100];

  return (
    <section className={styles.container}>
      {sizes.map((s, i) => (
        <div
          key={i}
          className={styles.ring}
          style={{
            width: s,
            height: s,
            animation: `${styles['subtle-breath']} 2.4s ease-in-out infinite`,
            animationDelay: `0s`,
            zIndex: 0,
          }}
        />
      ))}

      <div className={styles.content}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', color: '#111', lineHeight: 1.2, marginBottom: '20px' }}>
          {t('hero.title')}
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#555', marginBottom: '30px' }}>
          {t('hero.subtitle')}
        </p>
        <button style={{ padding: '15px 30px', backgroundColor: '#0052cc', color: 'white', border: 'none', borderRadius: '5px', fontSize: '1rem', cursor: 'pointer' }}>
          {t('hero.button')}
        </button>
      </div>
    </section>
  );
}