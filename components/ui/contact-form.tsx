'use client';

// components/ContactForm.tsx
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

export function ContactForm() {
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
                                {/* Fila 1 */}
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

                                {/* Fila 2 */}
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

                                {/* Fila 3 */}
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

                                {/* Fila 4 */}
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

                                {/* Fila 5 */}
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

                                {/* Checkbox */}
                                <FormField control={form.control} name="terms" render={({ field }) => (
                                    <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-xl p-4 border border-gray-100 bg-gray-50/50">
                                        <FormControl>
                                            <Checkbox checked={field.value} onCheckedChange={field.onChange} className="data-[state=checked]:bg-[#002EC3] data-[state=checked]:border-[#002EC3]" />
                                        </FormControl>
                                        <div className="space-y-1 leading-none">
                                            <FormLabel className="text-sm text-gray-600 font-medium cursor-pointer">
                                                Acepto las <a href="#" className="text-[#002EC3] hover:underline">políticas de privacidad</a> y los términos de servicio.
                                            </FormLabel>
                                        </div>
                                    </FormItem>
                                )}/>

                                <div className="pt-4">
                                    <Button type="submit" disabled={isSubmitting} className="w-full bg-[#002EC3] hover:bg-blue-800 text-white font-bold text-lg py-7 rounded-xl shadow-[0_8px_30px_rgb(0,46,195,0.2)] hover:shadow-[0_8px_30px_rgb(0,46,195,0.4)] transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-70 disabled:hover:transform-none">
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
    );
}