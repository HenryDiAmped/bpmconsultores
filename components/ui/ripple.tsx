import React, { ComponentPropsWithoutRef, CSSProperties } from "react"

import { cn } from "@/lib/utils"

interface RippleProps extends ComponentPropsWithoutRef<"div"> {
  mainCircleSize?: number
  mainCircleOpacity?: number // Esta prop ya no la usaremos para los círculos individuales
  numCircles?: number
}

export const Ripple = React.memo(function Ripple({
  mainCircleSize = 196,
  mainCircleOpacity = 0.24, // Se mantiene pero no afecta el color
  numCircles = 8,
  className,
  ...props
}: RippleProps) {
  return (
    <div
      className={cn(
        // La máscara se encarga del desvanecimiento general
        "pointer-events-none absolute w-[800px] h-[800px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] select-none",
        className
      )}
      {...props}
    >
      {Array.from({ length: numCircles }, (_, i) => {
        const size = mainCircleSize + i * 70
        // const opacity = mainCircleOpacity - i * 0.03  <-- ELIMINADO
        const animationDelay = `${i * 0.06}s`
        const borderStyle = "solid"

        return (
          <div
            key={i}
            // AUMENTAMOS la opacidad aquí. Prueba con /60, /70, /80.
            className={`animate-ripple absolute rounded-full border shadow-xl bg-[#002EC3]/30 border-[#384E91]/50`}
            style={
              {
                "--i": i,
                width: `${size}px`,
                height: `${size}px`,
                // opacity, <-- ELIMINADO del estilo en línea
                animationDelay,
                borderStyle,
                borderWidth: "1px",
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