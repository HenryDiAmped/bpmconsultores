'use client';

import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { AlertCircle, ChevronDown, ArrowRight, CheckCircle2 } from 'lucide-react';
import Script from "next/script";
import { useTranslations } from 'next-intl';

// Esquema de validación
import { formSchema } from "@/lib/schema";
import { send } from "@/lib/resend";

declare global {
  interface Window {
    //eslint-disable-next-line @typescript-eslint/no-explicit-any
    turnstile: any;
  }
}

export default function ContactSection() {
  const t = useTranslations('contact');
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
    const token = window.turnstile.getResponse();

    const serverValidation = await fetch('/api/cf', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ token }),
    });

    const { success } = await serverValidation.json();

    if (success) {
      console.log('se envio el correo');
      //Envio de correo
      setIsSubmitting(true);
      try {
        await send(values);
        setIsSuccess(true);
      } catch (error) {
        console.error("Error al enviar:", error);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      window.turnstile.reset();
      alert('Intenta Enviar de nuevo');
    }
  }

  // Estilos constantes para el diseño "Petite"
  const inputClass = "w-full h-10 px-3 bg-slate-50 border border-gray-200 focus:border-[#002EC3] focus:ring-1 focus:ring-[#002EC3] outline-none transition-all rounded-sm text-sm text-gray-900 placeholder:text-gray-400";
  const labelClass = "block text-[10px] md:text-[11px] font-bold text-gray-700 uppercase tracking-widest mb-1.5";

  return (
    <>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js"
        async
        defer
      ></Script>

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
              {t('title.t1')} <br />
              {t('title.t2')} <br />
              <span className="text-blue-300">{t('title.t3')} <br /> {t('title.t4')}</span>
            </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-base md:text-lg text-blue-100/80 font-light leading-relaxed max-w-lg"
              >
                {t('desc')}
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
                      <h3 className="text-2xl font-bold text-gray-900">{t('form.success.t1')}</h3>
                      <p className="text-gray-500 text-sm">{t('form.success.t2')}</p>
                    </motion.div>
                  ) : (
                    <form key="form" onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                        {/* Nombre Completo */}
                        <div className="sm:col-span-2">
                          <label className={labelClass}>{t('form.labels.name')}</label>
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
                          <label className={labelClass}>{t('form.labels.email')}</label>
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
                          <label className={labelClass}>{t('form.labels.company')}</label>
                          <input
                            {...register("company")}
                            type="text"
                            className={`${inputClass} ${errors.company ? 'border-red-400 focus:border-red-500 focus:ring-red-500' : ''}`}
                            placeholder={t('form.placeholders.company')}
                          />
                          {errors.company?.message && (
                            <p className="text-[10px] text-red-500 mt-1 font-medium">{String(errors.company.message)}</p>
                          )}
                        </div>

                        {/* Teléfono */}
                        <div>
                          <label className={labelClass}>{t('form.labels.phone')}</label>
                          <input
                            {...register("phone")}
                            type="tel"
                            className={`${inputClass} ${errors.phone ? 'border-red-400 focus:border-red-500 focus:ring-red-500' : ''}`}
                            placeholder={t('form.placeholders.phone')}
                          />
                          {errors.phone?.message && (
                            <p className="text-[10px] text-red-500 mt-1 font-medium">{String(errors.phone.message)}</p>
                          )}
                        </div>

                        {/* Cargo / Rol */}
                        <div>
                          <label className={labelClass}>{t('form.labels.role')}</label>
                          <div className="relative">
                            <select
                              {...register("role")}
                              className={`${inputClass} appearance-none cursor-pointer pr-8 ${errors.role ? 'border-red-400 focus:border-red-500 focus:ring-red-500 text-gray-900' : 'text-gray-600'}`}
                              defaultValue=""
                            >
                              <option value="" disabled>{t('form.placeholders.select')}</option>
                              <option value="Director / Gerente">{t('form.roles.r1')}</option>
                              <option value="HR Manager">{t('form.roles.r2')}</option>
                              <option value="Operaciones">{t('form.roles.r3')}</option>
                              <option value="Transformación">{t('form.roles.r4')}</option>
                              <option value="Otro">{t('form.roles.r5')}</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                          </div>
                          {errors.role?.message && (
                            <p className="text-[10px] text-red-500 mt-1 font-medium">{String(errors.role.message)}</p>
                          )}
                        </div>

                        {/* Tamaño */}
                        <div>
                          <label className={labelClass}>{t('form.labels.size')}</label>
                          <div className="relative">
                            <select
                              {...register("employees")}
                              className={`${inputClass} appearance-none cursor-pointer pr-8 ${errors.employees ? 'border-red-400 focus:border-red-500 focus:ring-red-500 text-gray-900' : 'text-gray-600'}`}
                              defaultValue=""
                            >
                              <option value="" disabled>{t('form.placeholders.select')}</option>
                              <option value="50-100">{t('form.sizes.s1')}</option>
                              <option value="100-200">{t('form.sizes.s2')}</option>
                              <option value="201-500">{t('form.sizes.s3')}</option>
                              <option value="500+">{t('form.sizes.s4')}</option>
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
                          <p className="text-xs font-medium leading-relaxed">{t('form.error')}</p>
                        </motion.div>
                      )}

                      <div
                        className="cf-turnstile"
                        data-sitekey={process.env.NEXT_PUBLIC_CLOUDFLARE_SITE_KEY}
                        data-theme="light"
                        data-size="normal"
                        data-language="en"
                        data-callback="onSuccess"
                      ></div>

                      {/* Botón de Envío */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full h-12 bg-gray-900 hover:bg-[#002EC3] text-white text-sm font-bold tracking-wide uppercase rounded-none transition-colors duration-300 flex items-center justify-center gap-2 group disabled:opacity-70"
                        >
                          {isSubmitting ? t('form.sending') : t('form.btn')}
                          {!isSubmitting && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                        </button>
                        <p className="text-center text-[10px] text-gray-500 mt-3 font-medium tracking-wide">
                          {t('form.footer')}
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
    </>
  );
}