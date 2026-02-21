import {z} from "zod";

export const formSchema = z.object({
    firstName: z.string().min(2).max(50),
    lastName: z.string().min(2).max(50),
    email: z.string().email(),
    company: z.string().min(2),
    message: z.string().min(2),
})