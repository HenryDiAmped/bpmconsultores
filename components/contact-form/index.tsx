'use client';

import { useState } from "react";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { formSchema } from "@/lib/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { send } from "@/lib/resend";

export default function ContactPage() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            company: "",
            department: "",
            industry: "",
            employees: "",
            role: "",
            terms: false,
        }
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true);
        try {
            await send(values);
            setIsSuccess(true); 
        } catch (error) {
            console.error(error);
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        // Contenedor principal con items-start para el efecto Sticky
        <div className="flex flex-col lg:flex-row items-start min-h-screen w-full bg-white font-sans">
            
            {/* ==========================================
                COLUMNA IZQUIERDA: CONTENIDO Y PRUEBA SOCIAL
            ========================================== */}
            <div className="relative w-full lg:w-5/12 bg-[#F7F7F7] p-10 lg:p-16 xl:p-20 overflow-hidden border-r border-gray-200">
                
                {/* Ambient Glow */}
                <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#002EC3] opacity-[0.07] rounded-full blur-3xl pointer-events-none"></div>
                <div className="absolute top-1/2 -right-32 w-96 h-96 bg-[#002EC3] opacity-[0.05] rounded-full blur-3xl pointer-events-none"></div>

                {/* 1. Título y Descripción */}
                <div className="relative z-10 mb-16">
                    <h1 className="text-4xl lg:text-[3.5rem] font-extrabold tracking-tight text-gray-900 leading-[1.1] mb-6">
                        Impulsemos tu <br/>
                        <span className="text-[#002EC3]">negocio hoy.</span>
                    </h1>
                    <p className="text-lg text-gray-600 max-w-md">
                        Nuestros especialistas están listos para diseñar e implementar la solución de inteligencia artificial que tu equipo necesita.
                    </p>
                </div>

                {/* 2. Métricas / Prueba Social */}
                <div className="relative z-10 grid grid-cols-2 gap-8 mb-16">
                    <div>
                        <h4 className="text-4xl font-extrabold text-[#002EC3] mb-2">150+</h4>
                        <p className="text-gray-600 font-medium">Empresas transformadas</p>
                    </div>
                    <div>
                        <h4 className="text-4xl font-extrabold text-[#002EC3] mb-2">30+</h4>
                        <p className="text-gray-600 font-medium">Países alcanzados</p>
                    </div>
                </div>

                {/* 3. Beneficios / Nuestro Proceso */}
                <div className="relative z-10 mb-16 space-y-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">¿Qué puedes esperar?</h3>
                    
                    <div className="flex gap-4 group">
                        <div className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-[#002EC3] shrink-0 font-bold group-hover:border-[#002EC3] group-hover:bg-blue-50 transition-colors">1</div>
                        <div>
                            <h4 className="text-lg font-semibold text-gray-900">Análisis Profundo</h4>
                            <p className="text-gray-600 mt-1">Auditamos tus procesos actuales para encontrar cuellos de botella y oportunidades de mejora.</p>
                        </div>
                    </div>
                    
                    <div className="flex gap-4 group">
                        <div className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-[#002EC3] shrink-0 font-bold group-hover:border-[#002EC3] group-hover:bg-blue-50 transition-colors">2</div>
                        <div>
                            <h4 className="text-lg font-semibold text-gray-900">Solución a la Medida</h4>
                            <p className="text-gray-600 mt-1">Diseñamos módulos de IA que se integran de forma natural con el ecosistema de tu empresa.</p>
                        </div>
                    </div>
                    
                    <div className="flex gap-4 group">
                        <div className="w-10 h-10 rounded-full bg-white border border-gray-200 shadow-sm flex items-center justify-center text-[#002EC3] shrink-0 font-bold group-hover:border-[#002EC3] group-hover:bg-blue-50 transition-colors">3</div>
                        <div>
                            <h4 className="text-lg font-semibold text-gray-900">Soporte Continuo</h4>
                            <p className="text-gray-600 mt-1">Te acompañamos en todo el proceso de adopción tecnológica y capacitación de tu equipo.</p>
                        </div>
                    </div>
                </div>

                {/* 4. Bloque de Contacto y Ubicación */}
                <div className="relative z-10 space-y-6 pt-10 border-t border-gray-200">
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Información Directa</h3>
                    
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center border border-gray-100 shrink-0">
                            <svg className="w-5 h-5 text-[#002EC3]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 font-medium mb-1">Escríbenos</p>
                            <p className="font-semibold text-gray-900">contacto@bpmconsultores.com</p>
                        </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center border border-gray-100 shrink-0">
                            <svg className="w-5 h-5 text-[#002EC3]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 font-medium mb-1">Llámanos</p>
                            <p className="font-semibold text-gray-900">+51 999 999 999</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center border border-gray-100 shrink-0">
                            <svg className="w-5 h-5 text-[#002EC3]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                        </div>
                        <div>
                            <p className="text-sm text-gray-500 font-medium mb-1">Ubicación principal</p>
                            <p className="font-semibold text-gray-900">Lima, Perú</p>
                            <p className="text-sm text-gray-500 mt-1">Atención remota a toda Latinoamérica</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* ==========================================
                COLUMNA DERECHA: EL FORMULARIO STICKY
            ========================================== */}
            <div className="w-full lg:w-7/12 bg-white flex flex-col items-center justify-center p-6 py-16 lg:p-12 lg:sticky lg:top-0 lg:h-screen overflow-y-auto">
                <div className="w-full max-w-[600px] my-auto">
                    
                    {isSuccess ? (
                        <div className="flex flex-col items-center justify-center text-center space-y-6 py-10 animate-in fade-in zoom-in duration-500">
                            <div className="w-24 h-24 bg-blue-50 text-[#002EC3] rounded-full flex items-center justify-center mb-2">
                                <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                            </div>
                            <h3 className="text-4xl font-extrabold text-gray-900 tracking-tight">¡Enviado!</h3>
                            <p className="text-gray-500 text-lg">Hemos recibido tus datos correctamente. Nuestro equipo revisará tu mensaje y te contactará en breve.</p>
                            <Button 
                                onClick={() => {
                                    setIsSuccess(false);
                                    form.reset();
                                }} 
                                variant="outline" 
                                className="mt-8 border-gray-200 hover:bg-gray-50 text-gray-700 py-6 px-8 rounded-xl text-base font-medium"
                            >
                                Enviar un nuevo mensaje
                            </Button>
                        </div>
                    ) : (
                        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
                            <div className="mb-10">
                                <h2 className="text-2xl font-bold text-gray-900 mb-2">Completa tus datos</h2>
                                <p className="text-gray-500">Te responderemos en menos de 24 horas laborables.</p>
                            </div>

                            <Form {...form}>
                                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                                    
                                    {/* Fila 1: Nombre y Apellido */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <FormField control={form.control} name="firstName" render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-sm font-semibold text-gray-700">Nombre</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Ej. Juan" {...field} className="bg-white border-gray-200 shadow-sm focus-visible:ring-[#002EC3] focus-visible:ring-offset-2 py-6 px-4 rounded-xl text-base transition-all" />
                                                </FormControl>
                                            </FormItem>
                                        )}/>
                                        <FormField control={form.control} name="lastName" render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-sm font-semibold text-gray-700">Apellido</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Ej. Pérez" {...field} className="bg-white border-gray-200 shadow-sm focus-visible:ring-[#002EC3] focus-visible:ring-offset-2 py-6 px-4 rounded-xl text-base transition-all" />
                                                </FormControl>
                                            </FormItem>
                                        )}/>
                                    </div>

                                    {/* Fila 2: Correo y Celular */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <FormField control={form.control} name="email" render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-sm font-semibold text-gray-700">Correo Electrónico</FormLabel>
                                                <FormControl>
                                                    <Input type="email" placeholder="tucorreo@empresa.com" {...field} className="bg-white border-gray-200 shadow-sm focus-visible:ring-[#002EC3] focus-visible:ring-offset-2 py-6 px-4 rounded-xl text-base transition-all" />
                                                </FormControl>
                                            </FormItem>
                                        )}/>
                                        <FormField control={form.control} name="phone" render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-sm font-semibold text-gray-700">Número Celular</FormLabel>
                                                <FormControl>
                                                    <Input type="tel" placeholder="+51 999 999 999" {...field} className="bg-white border-gray-200 shadow-sm focus-visible:ring-[#002EC3] focus-visible:ring-offset-2 py-6 px-4 rounded-xl text-base transition-all" />
                                                </FormControl>
                                            </FormItem>
                                        )}/>
                                    </div>

                                    {/* Fila 3: Empresa y Departamento */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <FormField control={form.control} name="company" render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-sm font-semibold text-gray-700">Nombre de Empresa</FormLabel>
                                                <FormControl>
                                                    <Input placeholder="Ej. Tech Solutions" {...field} className="bg-white border-gray-200 shadow-sm focus-visible:ring-[#002EC3] focus-visible:ring-offset-2 py-6 px-4 rounded-xl text-base transition-all" />
                                                </FormControl>
                                            </FormItem>
                                        )}/>
                                        
                                        <FormField control={form.control} name="department" render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-sm font-semibold text-gray-700">Departamento</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger className="bg-white border-gray-200 shadow-sm focus:ring-[#002EC3] focus:ring-offset-2 h-auto py-[14px] px-4 rounded-xl text-base transition-all">
                                                            <SelectValue placeholder="Selecciona una opción" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        {/* Puedes cambiar estas opciones por las de tu preferencia */}
                                                        <SelectItem value="lima">Lima</SelectItem>
                                                        <SelectItem value="arequipa">Arequipa</SelectItem>
                                                        <SelectItem value="cusco">Cusco</SelectItem>
                                                        <SelectItem value="piura">Piura</SelectItem>
                                                        <SelectItem value="otro">Otro</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </FormItem>
                                        )}/>
                                    </div>

                                    {/* Fila 4: Industria y Número de Colaboradores */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <FormField control={form.control} name="industry" render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-sm font-semibold text-gray-700">Industria a la que perteneces</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger className="bg-white border-gray-200 shadow-sm focus:ring-[#002EC3] focus:ring-offset-2 h-auto py-[14px] px-4 rounded-xl text-base transition-all">
                                                            <SelectValue placeholder="Selecciona tu industria" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="tecnologia">Tecnología / Software</SelectItem>
                                                        <SelectItem value="finanzas">Finanzas / Banca</SelectItem>
                                                        <SelectItem value="retail">Retail / Comercio</SelectItem>
                                                        <SelectItem value="salud">Salud / Medicina</SelectItem>
                                                        <SelectItem value="manufactura">Manufactura</SelectItem>
                                                        <SelectItem value="servicios">Servicios Profesionales</SelectItem>
                                                        <SelectItem value="otro">Otro</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </FormItem>
                                        )}/>

                                        <FormField control={form.control} name="employees" render={({ field }) => (
                                            <FormItem>
                                                <FormLabel className="text-sm font-semibold text-gray-700">Número de colaboradores</FormLabel>
                                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                    <FormControl>
                                                        <SelectTrigger className="bg-white border-gray-200 shadow-sm focus:ring-[#002EC3] focus:ring-offset-2 h-auto py-[14px] px-4 rounded-xl text-base transition-all">
                                                            <SelectValue placeholder="Selecciona la cantidad" />
                                                        </SelectTrigger>
                                                    </FormControl>
                                                    <SelectContent>
                                                        <SelectItem value="1-10">1 a 10 colaboradores</SelectItem>
                                                        <SelectItem value="11-50">11 a 50 colaboradores</SelectItem>
                                                        <SelectItem value="51-200">51 a 200 colaboradores</SelectItem>
                                                        <SelectItem value="201-500">201 a 500 colaboradores</SelectItem>
                                                        <SelectItem value="500+">Más de 500</SelectItem>
                                                    </SelectContent>
                                                </Select>
                                            </FormItem>
                                        )}/>
                                    </div>

                                    {/* Fila 5: Rol / Cargo */}
                                    <FormField control={form.control} name="role" render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="text-sm font-semibold text-gray-700">Te desempeñas en</FormLabel>
                                            <Select onValueChange={field.onChange} defaultValue={field.value}>
                                                <FormControl>
                                                    <SelectTrigger className="bg-white border-gray-200 shadow-sm focus:ring-[#002EC3] focus:ring-offset-2 h-auto py-[14px] px-4 rounded-xl text-base transition-all">
                                                        <SelectValue placeholder="Ej. Recursos Humanos, TI, Ventas..." />
                                                    </SelectTrigger>
                                                </FormControl>
                                                <SelectContent>
                                                    <SelectItem value="rrhh">Recursos Humanos / Talento</SelectItem>
                                                    <SelectItem value="ti">Tecnología / TI</SelectItem>
                                                    <SelectItem value="ventas">Ventas / Comercial</SelectItem>
                                                    <SelectItem value="marketing">Marketing</SelectItem>
                                                    <SelectItem value="operaciones">Operaciones / Logística</SelectItem>
                                                    <SelectItem value="gerencia">Gerencia / Dirección</SelectItem>
                                                    <SelectItem value="otro">Otro departamento</SelectItem>
                                                </SelectContent>
                                            </Select>
                                        </FormItem>
                                    )}/>

                                    {/* Checkbox de Términos */}
                                    <FormField
                                        control={form.control}
                                        name="terms"
                                        render={({ field }) => (
                                            <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-xl p-4 border border-gray-100 bg-gray-50/50">
                                                <FormControl>
                                                    <Checkbox
                                                        checked={field.value}
                                                        onCheckedChange={field.onChange}
                                                        className="data-[state=checked]:bg-[#002EC3] data-[state=checked]:border-[#002EC3]"
                                                    />
                                                </FormControl>
                                                <div className="space-y-1 leading-none">
                                                    <FormLabel className="text-sm text-gray-600 font-medium cursor-pointer">
                                                        Acepto las <a href="#" className="text-[#002EC3] hover:underline">políticas de privacidad</a> y los términos de servicio.
                                                    </FormLabel>
                                                </div>
                                            </FormItem>
                                        )}
                                    />

                                    <div className="pt-4">
                                        <Button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full bg-[#002EC3] hover:bg-blue-800 text-white font-bold text-lg py-7 rounded-xl shadow-[0_8px_30px_rgb(0,46,195,0.2)] hover:shadow-[0_8px_30px_rgb(0,46,195,0.4)] transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-70 disabled:hover:transform-none"
                                        >
                                            {isSubmitting ? (
                                                <span className="flex items-center gap-3">
                                                    <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Enviando mensaje...
                                                </span>
                                            ) : "Enviar Mensaje"}
                                        </Button>
                                    </div>
                                </form>
                            </Form>
                        </div>
                    )}
                </div>
            </div>

        </div>
    );
}