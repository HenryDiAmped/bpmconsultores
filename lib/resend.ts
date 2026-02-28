"use server";

import {z} from "zod";

import { Resend } from 'resend';
import { formSchema } from "./schema";
import { EmailTemplate } from "@/components/ui/email-template";
import { ReactElement } from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export const send = async (emailFormData: z.infer<typeof formSchema>)=>{
    try {
        const { error } = await resend.emails.send({
            from: 'BPM Consultores <onboarding@resend.dev>',
            to: ['minvosoftware@gmail.com'],
            subject: 'Hemos recibido tu solicitud - BPM Consultores',
            react: EmailTemplate({ 
                firstName: emailFormData.firstName,
                lastName: emailFormData.lastName,
                email: emailFormData.email,
                phone: emailFormData.phone,
                company: emailFormData.company,
                department: emailFormData.department,
                industry: emailFormData.industry,
                employees: emailFormData.employees,
                role: emailFormData.role,
            }) as ReactElement,
        });

        if(error){
            throw(error)
        }
    } catch (e) {
        throw(e)
    }
}