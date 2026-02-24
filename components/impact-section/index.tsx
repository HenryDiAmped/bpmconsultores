import React from 'react';
import { StatItem, StatItemProps } from '@/components/ui/statItem';

// Movemos la data fuera del componente (o a un archivo de constantes) 
// para mantener la vista limpia y fácil de editar.
const statsData: StatItemProps[] = [
  {
    category: "Ecosistema integral",
    value: "+30",
    description: "Módulos de gestión activados",
  },
  {
    category: "Ecosistema integral",
    value: "+30",
    description: "Módulos de gestión activados",
  },
  {
    category: "Ecosistema integral",
    value: "+30",
    description: "Módulos de gestión activados",
  },
];

export default function ImpactSection() {
  return (
    // Se usa un color de fondo genérico. Si en Figma tiene un gris muy clarito, 
    // podrías usar bg-slate-50 o bg-zinc-50 en lugar de bg-background.
    <section className="w-full py-16 md:py-24 bg-background">
      <div className="w-full max-w-[1020px] mx-auto px-4 md:px-6">
        
        {/* Título Principal */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight text-center mb-16 md:mb-24 text-foreground">
          El impacto de una gestión basada en datos
        </h2>
        
        {/* Contenedor Grid para las 3 estadísticas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {statsData.map((stat, index) => (
            <StatItem 
              key={index}
              category={stat.category}
              value={stat.value}
              description={stat.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
}