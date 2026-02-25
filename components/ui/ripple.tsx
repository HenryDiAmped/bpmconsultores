import React, { ComponentPropsWithoutRef, CSSProperties } from "react"

import { cn } from "@/lib/utils"

interface RippleProps extends ComponentPropsWithoutRef<"div"> {
  mainCircleSize?: number
  numCircles?: number
}

export const Ripple = React.memo(function Ripple({
  mainCircleSize = 196,
  numCircles = 8,
  className,
  ...props
}: RippleProps) {
  return (
    <div
      className={cn(
        // ELIMINADO: La máscara [mask-image] que forzaba el degradado sobre el centro.
        // Ahora el contenedor es completamente transparente y deja ser a los círculos.
        "pointer-events-none absolute w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 select-none",
        className
      )}
      {...props}
    >
      {Array.from({ length: numCircles }, (_, i) => {
        const size = mainCircleSize + i * 70
        
        // LA MAGIA DE LA OPACIDAD:
        // Si i = 0 (el primer círculo), la opacidad es exactamente 0.4 (40%).
        // A medida que 'i' crece, la opacidad baja proporcionalmente hasta casi desaparecer,
        // fundiéndose suavemente con el fondo #F7F7F7.
        const opacity = 0.4 - (i * (0.4 / numCircles))
        
        const animationDelay = `${i * 0.06}s`

        return (
          <div
            key={i}
            // Usamos el color #002EC3 puro sin transparencias de Tailwind (sin el /30).
            // La transparencia real la controlará la propiedad 'opacity' de abajo.
            className={`animate-ripple absolute rounded-full border shadow-xl bg-[#002EC3] border-[#002EC3]`}
            style={
              {
                "--i": i,
                width: `${size}px`,
                height: `${size}px`,
                opacity: opacity, // Aplicamos el cálculo progresivo
                animationDelay,
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%) scale(1)",
              } as CSSProperties
            }
          />
        )
      })}
    </div>
  )
})

Ripple.displayName = "Ripple"