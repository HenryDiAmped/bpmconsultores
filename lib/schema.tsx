import { z } from "zod";

export const formSchema = z.object({
    interest: z.string().min(1, { message: "El producto de interes es obligatorio" }),
    name: z.string().min(2, { message: "El nombre es obligatorio" }).max(25),
    lastname: z.string().min(2, { message: "El apellido es obligatorio" }).max(25),
    email: z.email({ message: "Ingresa un correo electrónico válido" }),
    company: z.string().min(2, { message: "El nombre de la empresa es obligatorio" }),
    employees: z.string().min(1, { message: "Selecciona la cantidad de colaboradores" }),
    phone: z.string().min(9, { message: "Ingresa un número de celular válido" }).max(10, { message: "Ingresa un número de celular válido" }),
    typeCompany: z.string().min(1, { message: "Selecciona para quien trabaja" }),
    profesionalLevel: z.string().min(1, { message: "Selecciona tu nivel profesional" }),
    role: z.string().min(1, { message: "Selecciona tu rol o cargo" }),
    country: z.string().min(1, { message: "Selecciona tu país" }),
});