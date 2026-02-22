'use client';

import { useState } from "react";
import { useRouter } from "next/navigation"; // Importamos el router de Next.js
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { formSchema } from "@/lib/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { send } from "@/lib/resend";

export default function ContactForm() {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            company: "",
            message: "",
        }
    });

    // Hacemos la función asíncrona para esperar la respuesta de Resend
    async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsSubmitting(true);
        try {
            await send(values);
            setIsSuccess(true); // Cambiamos el estado a éxito
        } catch (error) {
            console.error("Hubo un error al enviar el correo:", error);
            // Aquí podrías agregar un estado para mostrar un mensaje de error si lo deseas
        } finally {
            setIsSubmitting(false);
        }
    }

    // Si el envío fue exitoso, mostramos el mensaje de confirmación
    if (isSuccess) {
        return (
            <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
                <div className="w-full max-w-md bg-white p-8 rounded-lg border border-gray-300 text-center space-y-6 shadow-sm">
                    {/* Icono de Check */}
                    <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100">
                        <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                    </div>

                    <h2 className="text-2xl font-bold text-gray-900">¡Mensaje Enviado!</h2>
                    <p className="text-gray-600 text-base">
                        Gracias por contactarnos. Hemos recibido tu mensaje con éxito y nuestro equipo se pondrá en contacto contigo muy pronto.
                    </p>

                    <Button
                        onClick={() => router.push('/')}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-6 text-base"
                    >
                        Aceptar y volver al inicio
                    </Button>
                </div>
            </div>
        );
    }

    // Render normal del formulario
    return (
        <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="w-full max-w-2xl bg-white p-8 rounded-lg border border-gray-300 space-y-6"
                >
                    {/* Nombres y Apellido */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <FormField
                                control={form.control}
                                name="firstName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="block text-base font-semibold text-gray-900">Nombres</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Nombres" {...field}
                                                className="border-gray-300 text-gray-700 placeholder:text-gray-500"
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </div>
                        <div className="space-y-2">
                            <FormField
                                control={form.control}
                                name="lastName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="block text-base font-semibold text-gray-900">Apellido</FormLabel>
                                        <FormControl>
                                            <Input
                                                placeholder="Apellidos" {...field}
                                                className="border-gray-300 text-gray-700 placeholder:text-gray-500"
                                            />
                                        </FormControl>
                                    </FormItem>
                                )}
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="block text-base font-semibold text-gray-900">Email</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Email" {...field}
                                            className="border-gray-300 text-gray-700 placeholder:text-gray-500"
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>

                    {/* Empresa */}
                    <div className="space-y-2">
                        <FormField
                            control={form.control}
                            name="company"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="block text-base font-semibold text-gray-900">Empresa</FormLabel>
                                    <FormControl>
                                        {/* Cambié Textarea a Input porque empresa suele ser un texto corto, pero si prefieres Textarea puedes regresarlo */}
                                        <Input
                                            placeholder="Empresa" {...field}
                                            className="border-gray-300 text-gray-700 placeholder:text-gray-500"
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>

                    {/* Mensaje */}
                    <div className="space-y-2">
                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="block text-base font-semibold text-gray-900">Mensaje</FormLabel>
                                    <FormControl>
                                        <Textarea
                                            placeholder="Déjanos un mensaje" {...field}
                                            className="border-gray-300 text-gray-700 placeholder:text-gray-500 min-h-[120px]"
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>

                    {/* Botón Submit */}
                    <Button
                        type="submit"
                        disabled={isSubmitting} // Deshabilita el botón mientras se envía
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base py-6 rounded-md disabled:opacity-50"
                    >
                        {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                    </Button>
                </form>
            </Form>
        </div>
    );
}