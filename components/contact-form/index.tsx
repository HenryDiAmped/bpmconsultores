'use client';

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

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            email: "",
            message: "",
        }
    })

    function onSubmit(values: z.infer<typeof formSchema>) {
        send(values)
    }
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
                                            placeholder="Mensaje" {...field}
                                            className="border-gray-300 text-gray-700 placeholder:text-gray-500"
                                        />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                    </div>

                    {/* Botón Submit */}
                    <Button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-base py-6 rounded-md"
                    >
                        Enviar Mensaje
                    </Button>
                </form>
            </Form>
        </div>
    );
}
