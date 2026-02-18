"use client";
import React from "react";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  // MEDIDAS reducidas para que los anillos queden más contenidos y visibles.
  // Ordenadas de mayor a menor.
  const sizes = [520, 440, 360, 300, 240, 180, 140, 100];

  return (
    <section className={styles.container}>
      {/* Renderizado de los círculos de fondo */}
      {sizes.map((s, i) => (
        <div
          key={i}
          className={styles.ring} // Usamos la nueva clase .ring
          style={{
            width: s,
            height: s,
            // Animación: Nombre | Duración (lenta) | Tipo | Repetición
              // Duración aumentada para movimiento más amplio y suave
              animation: `${styles['subtle-breath']} 2.4s ease-in-out infinite`,
            // Sin retraso: todos los anillos arrancan la animación al mismo tiempo
            animationDelay: `0s`,
            // Z-index bajo para asegurar que estén detrás del contenido
            zIndex: 0,
          }}
        />
      ))}

      {/* Contenido del Hero (Texto y Botón) */}
      {/* Este div simula donde irá tu texto real para probar la superposición */}
      <div className={styles.content}>
        <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', color: '#111', lineHeight: 1.2, marginBottom: '20px' }}>
          Alianza estratégica:<br/>B2B SaaS y...
        </h1>
        <p style={{ fontSize: '1.2rem', color: '#555', marginBottom: '30px' }}>
            Unimos nuestra consultoría experta con la plataforma de RR.HH. líder en Latinoamérica.
        </p>
        <button style={{ padding: '15px 30px', backgroundColor: '#0052cc', color: 'white', border: 'none', borderRadius: '5px', fontSize: '1rem', cursor: 'pointer' }}>
            Ver detalles de la alianza
        </button>
      </div>
    </section>
  );
}