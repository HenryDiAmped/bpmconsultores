import { z } from "zod";

export const formSchema = z.object({
    firstName: z.string().min(2, { message: "El nombre es obligatorio" }).max(50),
    lastName: z.string().min(2, { message: "El apellido es obligatorio" }).max(50),
    email: z.email({ message: "Ingresa un correo electrónico válido" }),
    
    // Nuevos campos de texto
    phone: z.string().min(9, { message: "Ingresa un número de celular válido" }).max(9, { message: "Ingresa un número de celular válido" }),
    company: z.string().min(2, { message: "El nombre de la empresa es obligatorio" }),
    
    // Nuevos campos Select (Desplegables)
    // Usamos min(1) para asegurarnos de que el usuario haya seleccionado una opción válida
    department: z.string().min(1, { message: "Selecciona un departamento" }),
    industry: z.string().min(1, { message: "Selecciona una industria" }),
    employees: z.string().min(1, { message: "Selecciona la cantidad de colaboradores" }),
    role: z.string().min(1, { message: "Selecciona tu rol o cargo" }),
});