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
            from: 'BPM Consultores <humand@bpmconsultores.com>',
            to: [emailFormData.email],
            bcc: ['humand@bpmconsultores.com'],
            subject: 'Hemos recibido tu solicitud - BPM Consultores',
            react: EmailTemplate({ 
                interest: emailFormData.interest,
                name: emailFormData.name,
                lastname: emailFormData.lastname,
                email: emailFormData.email,
                company: emailFormData.company,
                employees: emailFormData.employees,
                phone: emailFormData.phone,
                typeCompany: emailFormData.typeCompany,
                profesionalLevel: emailFormData.profesionalLevel,
                role: emailFormData.role,
                country: emailFormData.country,
            }) as ReactElement,
        });

        if(error){
            throw(error)
        }
    } catch (e) {
        throw(e)
    }
}