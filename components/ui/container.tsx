import { cn } from "@/lib/utils"; // Usamos la misma utilidad que usa Shadcn

type ContainerProps = React.HTMLAttributes<HTMLDivElement>;

export function Container({ className, children, ...props }: ContainerProps) {
  return (
    <div 
      // Aquí defines tu "ley universal" de ancho para todo el proyecto
      className={cn("w-full max-w-[1250px] mx-auto px-4 md:px-6", className)} 
      {...props}
    >
      {children}
    </div>
  );
}