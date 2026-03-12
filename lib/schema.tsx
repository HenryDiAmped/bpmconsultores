import { z } from "zod";

export const formSchema = z.object({
    fullName: z.string().min(2, { message: "El nombre completo es obligatorio" }).max(50),
    email: z.email({ message: "Ingresa un correo electrónico válido" }),
    company: z.string().min(2, { message: "El nombre de la empresa es obligatorio" }),
    phone: z.string().min(9, { message: "Ingresa un número de celular válido" }).max(9, { message: "Ingresa un número de celular válido" }),
    employees: z.string().min(1, { message: "Selecciona la cantidad de colaboradores" }),
    role: z.string().min(1, { message: "Selecciona tu rol o cargo" }),
});