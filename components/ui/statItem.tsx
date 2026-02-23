'use client'; // Importante en Next.js App Router para usar Hooks

import React, { useEffect, useState, useRef } from 'react';
import { inter } from "@/app/fonts";

export interface StatItemProps {
  category: string;
  value: string;
  description: string;
}

export function StatItem({ category, value, description }: StatItemProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Separamos símbolos del número (ej: "+30" -> prefix: "+", number: 30, suffix: "")
  const match = value.match(/^(\D*)(\d+)(\D*)$/);
  const prefix = match ? match[1] : '';
  const targetNumber = match ? parseInt(match[2], 10) : 0;
  const suffix = match ? match[3] : '';

  // Detectamos cuando el componente entra en la pantalla
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Dejamos de observar una vez que se activa
        }
      },
      { threshold: 0.5 } // Se activa cuando la mitad del elemento es visible
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  // Ejecutamos la animación del número
  useEffect(() => {
    if (!isVisible || targetNumber === 0) return;

    let startTimestamp: number | null = null;
    const duration = 2000; // Duración de la animación en milisegundos (2 segundos)

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Función de "easing" para que empiece rápido y termine más lento
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      
      setCount(Math.floor(easeOutQuart * targetNumber));

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [isVisible, targetNumber]);

  return (
    // Usamos comillas invertidas ` ` para poder mezclar el texto de Tailwind con la variable inter.className
    <div ref={ref} className={`flex flex-col items-center justify-center text-center space-y-4 ${inter.className}`}>
      
      {/* Texto superior pequeño */}
      <span className="text-xs md:text-sm text-muted-foreground font-medium">
        {category}
      </span>
      
      {/* Número grande destacado animado */}
      <span className="text-5xl md:text-6xl font-semibold tracking-tight text-foreground">
        {match ? `${prefix}${count}${suffix}` : value}
      </span>
      
      {/* Texto inferior descriptivo */}
      <span className="text-sm md:text-base font-medium text-foreground">
        {description}
      </span>
    </div>
  );
}