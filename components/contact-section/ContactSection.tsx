'use client';

import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AlertCircle, ChevronDown, ArrowRight, CheckCircle2 } from 'lucide-react';

// Esquema de validación
import { formSchema } from "@/lib/schema";
import { send } from "@/lib/resend";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      company: "",
      phone: "",
      employees: "",
      role: "",
    }
  });

  const { register, handleSubmit, formState: { errors }, setValue, watch } = form;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      await send(values);
      setIsSuccess(true);
    } catch (error) {
      console.error("Error al enviar:", error);
    } finally {
      setIsSubmitting(false);
    }
  }

  // Estilos constantes para el diseño "Petite"
  const inputClass = "w-full h-10 px-3 bg-slate-50 border border-gray-200 focus:border-[#002EC3] focus:ring-1 focus:ring-[#002EC3] outline-none transition-all rounded-sm text-sm text-gray-900 placeholder:text-gray-400";
  const labelClass = "block text-[10px] md:text-[11px] font-bold text-gray-700 uppercase tracking-widest mb-1.5";

  return (
    <section className="w-full bg-gradient-to-r from-slate-950 via-slate-900 to-[#002EC3] py-20 lg:py-28 relative overflow-hidden border-t border-white/5">

      {/* Fondo de malla corporativa */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="mx-auto px-6 lg:px-8 max-w-[1320px] relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

          {/* TEXTO IZQUIERDA */}
          <div className="w-full lg:w-1/2">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6"
            >
              Cuéntanos tus <br />
              desafíos, <br />
              <span className="text-blue-300">nosotros <br /> trazamos la ruta.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-base md:text-lg text-blue-100/80 font-light leading-relaxed max-w-lg"
            >
              Agenda una evaluación preliminar sin compromiso como primer paso para transformar tu organización con nuestros expertos.
            </motion.p>
          </div>

          {/* FORMULARIO DERECHA */}
          <div className="w-full lg:w-1/2 flex justify-end">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-full max-w-[440px] bg-white p-7 md:p-9 rounded-sm shadow-2xl relative min-h-[500px] flex flex-col justify-center"
            >
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center space-y-4 py-8"
                  >
                    <div className="w-16 h-16 bg-blue-50 text-[#002EC3] rounded-full flex items-center justify-center mx-auto mb-2">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">¡Enviado!</h3>
                    <p className="text-gray-500 text-sm">Hemos recibido tus datos correctamente.</p>
                    <button
                      onClick={() => { setIsSuccess(false); form.reset(); }}
                      className="mt-4 text-[#002EC3] text-xs uppercase tracking-widest font-bold hover:underline"
                    >
                      Enviar otro mensaje
                    </button>
                  </motion.div>
                ) : (
                  <form key="form" onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                      {/* Nombre Completo */}
                      <div className="sm:col-span-2">
                        <label className={labelClass}>Nombre completo *</label>
                        <input
                          {...register("fullName")}
                          type="text"
                          className={`${inputClass} ${errors.fullName ? 'border-red-400 focus:border-red-500 focus:ring-red-500' : ''}`}
                          placeholder="Ej. Juan Pérez"
                        />
                        {errors.fullName?.message && (
                          <p className="text-[10px] text-red-500 mt-1 font-medium">{String(errors.fullName.message)}</p>
                        )}
                      </div>

                      {/* Correo Corporativo */}
                      <div className="sm:col-span-2">
                        <label className={labelClass}>Correo corporativo *</label>
                        <input
                          {...register("email")}
                          type="email"
                          className={`${inputClass} ${errors.email ? 'border-red-400 focus:border-red-500 focus:ring-red-500' : ''}`}
                          placeholder="juan@tuempresa.com"
                        />
                        {errors.email?.message && (
                          <p className="text-[10px] text-red-500 mt-1 font-medium">{String(errors.email.message)}</p>
                        )}
                      </div>

                      {/* Empresa */}
                      <div>
                        <label className={labelClass}>Empresa *</label>
                        <input
                          {...register("company")}
                          type="text"
                          className={`${inputClass} ${errors.company ? 'border-red-400 focus:border-red-500 focus:ring-red-500' : ''}`}
                          placeholder="Tu empresa"
                        />
                        {errors.company?.message && (
                          <p className="text-[10px] text-red-500 mt-1 font-medium">{String(errors.company.message)}</p>
                        )}
                      </div>

                      {/* Teléfono */}
                      <div>
                        <label className={labelClass}>Tel/WhatsApp *</label>
                        <input
                          {...register("phone")}
                          type="tel"
                          className={`${inputClass} ${errors.phone ? 'border-red-400 focus:border-red-500 focus:ring-red-500' : ''}`}
                          placeholder="999999999"
                        />
                        {errors.phone?.message && (
                          <p className="text-[10px] text-red-500 mt-1 font-medium">{String(errors.phone.message)}</p>
                        )}
                      </div>

                      {/* Cargo / Rol */}
                      <div>
                        <label className={labelClass}>Cargo / Rol *</label>
                        <div className="relative">
                          <select
                            {...register("role")}
                            className={`${inputClass} appearance-none cursor-pointer pr-8 ${errors.role ? 'border-red-400 focus:border-red-500 focus:ring-red-500 text-gray-900' : 'text-gray-600'}`}
                            defaultValue=""
                          >
                            <option value="" disabled>Seleccionar</option>
                            <option value="Director / Gerente">Director / Gerente</option>
                            <option value="HR Manager">HR Manager</option>
                            <option value="Operaciones">Operaciones</option>
                            <option value="Transformación">Transformación / Procesos</option>
                            <option value="Otro">Otro</option>
                          </select>
                          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                        </div>
                        {errors.role?.message && (
                          <p className="text-[10px] text-red-500 mt-1 font-medium">{String(errors.role.message)}</p>
                        )}
                      </div>

                      {/* Tamaño */}
                      <div>
                        <label className={labelClass}>Tamaño *</label>
                        <div className="relative">
                          <select
                            {...register("employees")}
                            className={`${inputClass} appearance-none cursor-pointer pr-8 ${errors.employees ? 'border-red-400 focus:border-red-500 focus:ring-red-500 text-gray-900' : 'text-gray-600'}`}
                            defaultValue=""
                          >
                            <option value="" disabled>Seleccionar</option>
                            <option value="50-100">50 - 100 colabs.</option>
                            <option value="100-200">100 - 200 colabs.</option>
                            <option value="201-500">201 - 500 colabs.</option>
                            <option value="500+">500+ colabs.</option>
                          </select>
                          <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                        </div>
                        {errors.employees?.message && (
                          <p className="text-[10px] text-red-500 mt-1 font-medium">{String(errors.employees.message)}</p>
                        )}
                      </div>
                    </div>

                    {/* Mensaje de Error General (Opcional, puedes quitarlo si prefieres solo los mensajes individuales) */}
                    {Object.keys(errors).length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="bg-red-50 text-red-600 p-3 flex items-start gap-2.5 rounded-sm border border-red-100 overflow-hidden"
                      >
                        <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                        <p className="text-xs font-medium leading-relaxed">Por favor, revisa los campos marcados en rojo.</p>
                      </motion.div>
                    )}

                    {/* Botón de Envío */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-12 bg-gray-900 hover:bg-[#002EC3] text-white text-sm font-bold tracking-wide uppercase rounded-none transition-colors duration-300 flex items-center justify-center gap-2 group disabled:opacity-70"
                      >
                        {isSubmitting ? 'Enviando...' : 'Comenzar'}
                        {!isSubmitting && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                      </button>
                      <p className="text-center text-[10px] text-gray-500 mt-3 font-medium tracking-wide">
                        Te responderemos en un plazo máximo de 24 horas.
                      </p>
                    </div>
                  </form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}