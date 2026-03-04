'use client';

import { useState, useEffect } from 'react';

interface AnimationConfig {
  // Duraciones
  duration: {
    fast: number;
    normal: number;
    slow: number;
  };
  // Delays
  delay: {
    none: number;
    short: number;
    medium: number;
  };
  // Stagger (para animaciones en cascada)
  stagger: number;
  // Si debe animar o no
  shouldAnimate: boolean;
  // Si es móvil
  isMobile: boolean;
}

export const useAnimationConfig = (): AnimationConfig => {
  const [isMobile, setIsMobile] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Detectar tamaño de pantalla
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Detectar preferencia de movimiento reducido
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(motionQuery.matches);

    // Listener para cambios en preferencias
    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    // Setup
    checkMobile();
    motionQuery.addEventListener('change', handleMotionChange);
    window.addEventListener('resize', checkMobile);

    // Cleanup
    return () => {
      motionQuery.removeEventListener('change', handleMotionChange);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // Si el usuario prefiere movimiento reducido, desactivar animaciones
  const shouldAnimate = !prefersReducedMotion;

  // Configuraciones optimizadas según el dispositivo
  if (isMobile) {
    return {
      duration: {
        fast: 0.2,    // Muy rápido en móvil
        normal: 0.3,  // Rápido en móvil
        slow: 0.4,    // Moderado en móvil
      },
      delay: {
        none: 0,
        short: 0.05,  // Delays muy cortos
        medium: 0.1,
      },
      stagger: 0.05,  // Stagger reducido
      shouldAnimate,
      isMobile: true,
    };
  }

  // Configuración para desktop (animaciones completas)
  return {
    duration: {
      fast: 0.3,
      normal: 0.6,
      slow: 0.8,
    },
    delay: {
      none: 0,
      short: 0.1,
      medium: 0.2,
    },
    stagger: 0.15,
    shouldAnimate,
    isMobile: false,
  };
};
