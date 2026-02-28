// app/contact/page.tsx (o donde tengas esta página)
import { ContactInfo } from "@/components/ui/contact-info";
import { ContactForm } from "@/components/ui/contact-form";

export default function ContactStructure() {
    return (
        // Contenedor principal con items-start para el efecto Sticky
        <div className="flex flex-col lg:flex-row items-start min-h-screen w-full bg-white font-sans">
            <ContactInfo />
            <ContactForm />
        </div>
    );
}