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
      interest: "",
      name: "",
      lastname: "",
      email: "",
      company: "",
      employees: "",
      phone: "",
      typeCompany: "",
      profesionalLevel: "",
      role: "",
      country: "",
    }
  });

  const { register, handleSubmit, formState: { errors } } = form;

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

  // --- CAMBIO: Estilos constantes estandarizados ---
  const inputClass = "w-full h-11 px-3 bg-slate-50 border border-gray-200 focus:border-[#002EC3] focus:ring-1 focus:ring-[#002EC3] outline-none transition-all rounded-sm text-sm text-gray-900 placeholder:text-gray-400 font-medium";
  // --- CAMBIO: Label text-gray-800 para mejor contraste ---
  const labelClass = "block text-[10px] md:text-[11px] font-bold text-gray-800 uppercase tracking-widest mb-1.5";

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

              {/* --- CAMBIO: text-white/95 y font-normal --- */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-base md:text-lg text-white/95 font-normal leading-relaxed max-w-lg"
              >
                {t('desc')}
              </motion.p>
            </div>

            {/* FORMULARIO DERECHA */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="w-full max-w-[460px] bg-white p-7 md:p-9 rounded-sm shadow-2xl relative min-h-[500px] flex flex-col justify-center"
              >
                <AnimatePresence mode="wait">
                  {isSuccess ? (
                    // --- PANTALLA DE ÉXITO ESTANDARIZADA ---
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center space-y-4 py-8 flex flex-col items-center"
                    >
                      <div className="w-16 h-16 bg-blue-50 text-[#002EC3] rounded-full flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 tracking-tight">{t('form.success.t1')}</h3>
                      <p className="text-gray-700 font-medium text-sm">{t('form.success.t2')}</p>
                    </motion.div>
                  ) : (
                    <form key="form" onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                        {/* Producto de Interés - Ancho completo */}
                        <div className="sm:col-span-2">
                          <label className={labelClass}>{t('form.labels.interest')} *</label>
                          <div className="relative">
                            <select
                              {...register("interest")}
                              className={`${inputClass} appearance-none cursor-pointer pr-8 ${errors.interest ? 'border-red-400 focus:border-red-500 focus:ring-red-500 text-gray-900' : 'text-gray-600'}`}
                              defaultValue=""
                            >
                              <option value="" disabled>Seleccione...</option>
                              <option value="Copia de seguridad - Dispositivos">{t('form.interests.i1')}</option>
                              <option value="Copia de seguridad - Copia de seguridad de terminales">{t('form.interests.i2')}</option>
                              <option value="Copia de seguridad - Proteccion de archivos">{t('form.interests.i3')}</option>
                              <option value="Copia de seguridad - Microsoft Azure">{t('form.interests.i4')}</option>
                              <option value="Copia de seguridad - Microsoft Entra ID">{t('form.interests.i5')}</option>
                              <option value="Copia de seguridad - Proteccion SaaS">{t('form.interests.i6')}</option>
                              <option value="Copia de seguridad - Lugar de trabajo">{t('form.interests.i7')}</option>
                              <option value="Operaciones de TI - Automatizacion de servicios profesionales">{t('form.interests.i8')}</option>
                              <option value="Operaciones de TI - Gerente de cotizaciones">{t('form.interests.i9')}</option>
                              <option value="Operaciones de TI: supervision y gestion remotas">{t('form.interests.i10')}</option>
                              <option value="Redes - Soluciones SASE">{t('form.interests.i11')}</option>
                              <option value="Redes: conmutadores y enrutadores">{t('form.interests.i12')}</option>
                              <option value="Redes - Puntos de acceso Wi-Fi">{t('form.interests.i13')}</option>
                              <option value="Redes - Gestion de la energia">{t('form.interests.i14')}</option>
                              <option value="Seguridad - Proteccion antivirus">{t('form.interests.i15')}</option>
                              <option value="Seguridad: deteccion y respuesta en endpoints">{t('form.interests.i16')}</option>
                              <option value="Seguridad - Centro de operaciones de seguridad gestionado">{t('form.interests.i17')}</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                          </div>
                          {errors.interest?.message && (
                            <p className="text-[10px] text-red-500 mt-1.5 font-medium">{String(errors.interest.message)}</p>
                          )}
                        </div>

                        {/* Nombre */}
                        <div>
                          <label className={labelClass}>{t('form.labels.name')} *</label>
                          <input
                            {...register("name")}
                            type="text"
                            className={`${inputClass} ${errors.name ? 'border-red-400 focus:border-red-500 focus:ring-red-500' : ''}`}
                            placeholder="Ej. Juan"
                          />
                          {errors.name?.message && (
                            <p className="text-[10px] text-red-500 mt-1.5 font-medium">{String(errors.name.message)}</p>
                          )}
                        </div>

                        {/* Apellido */}
                        <div>
                          <label className={labelClass}>{t('form.labels.lastname')} *</label>
                          <input
                            {...register("lastname")}
                            type="text"
                            className={`${inputClass} ${errors.lastname ? 'border-red-400 focus:border-red-500 focus:ring-red-500' : ''}`}
                            placeholder="Ej. Pérez"
                          />
                          {errors.lastname?.message && (
                            <p className="text-[10px] text-red-500 mt-1.5 font-medium">{String(errors.lastname.message)}</p>
                          )}
                        </div>

                        {/* Correo Corporativo - Ancho completo */}
                        <div className="sm:col-span-2">
                          <label className={labelClass}>{t('form.labels.email')} *</label>
                          <input
                            {...register("email")}
                            type="email"
                            className={`${inputClass} ${errors.email ? 'border-red-400 focus:border-red-500 focus:ring-red-500' : ''}`}
                            placeholder="juan@tuempresa.com"
                          />
                          {errors.email?.message && (
                            <p className="text-[10px] text-red-500 mt-1.5 font-medium">{String(errors.email.message)}</p>
                          )}
                        </div>

                        {/* Empresa */}
                        <div>
                          <label className={labelClass}>{t('form.labels.company')} *</label>
                          <input
                            {...register("company")}
                            type="text"
                            className={`${inputClass} ${errors.company ? 'border-red-400 focus:border-red-500 focus:ring-red-500' : ''}`}
                            placeholder={t('form.placeholders.company')}
                          />
                          {errors.company?.message && (
                            <p className="text-[10px] text-red-500 mt-1.5 font-medium">{String(errors.company.message)}</p>
                          )}
                        </div>

                        {/* Tipo de Empresa */}
                        <div>
                          <label className={labelClass}>{t('form.labels.typeCompany')} *</label>
                          <div className="relative">
                            <select
                              {...register("typeCompany")}
                              className={`${inputClass} appearance-none cursor-pointer pr-8 ${errors.typeCompany ? 'border-red-400 focus:border-red-500 focus:ring-red-500 text-gray-900' : 'text-gray-600'}`}
                              defaultValue=""
                            >
                              <option value="" disabled>Seleccione...</option>
                              <option value="MSP o proveedor de servicios de TI">{t('form.typeCompanies.t1')}</option>
                              <option value="Departamento interno de TI">{t('form.typeCompanies.t2')}</option>
                              <option value="VAR o distribuidor tecnologico">{t('form.typeCompanies.t3')}</option>
                              <option value="Distribuidor">{t('form.typeCompanies.t4')}</option>
                              <option value="Soy estudiante">{t('form.typeCompanies.t5')}</option>
                              <option value="Soy un hacker">{t('form.typeCompanies.t6')}</option>
                              <option value="Otro">{t('form.typeCompanies.t7')}</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                          </div>
                          {errors.typeCompany?.message && (
                            <p className="text-[10px] text-red-500 mt-1.5 font-medium">{String(errors.typeCompany.message)}</p>
                          )}
                        </div>

                        {/* Tamaño (Número de empleados) */}
                        <div>
                          <label className={labelClass}>{t('form.labels.size')} *</label>
                          <div className="relative">
                            <input
                              type="number"
                              {...register("employees")}
                              className={`${inputClass} ${errors.employees ? 'border-red-400 focus:border-red-500 focus:ring-red-500 text-gray-900' : 'text-gray-600'}`}
                              placeholder="Ej. 100"
                              min="0"
                              step="1"
                            />
                          </div>
                          {errors.employees?.message && (
                            <p className="text-[10px] text-red-500 mt-1.5 font-medium">{String(errors.employees.message)}</p>
                          )}
                        </div>

                        {/* Teléfono */}
                        <div>
                          <label className={labelClass}>{t('form.labels.phone')} *</label>
                          <input
                            {...register("phone")}
                            type="tel"
                            className={`${inputClass} ${errors.phone ? 'border-red-400 focus:border-red-500 focus:ring-red-500' : ''}`}
                            placeholder={t('form.placeholders.phone')}
                          />
                          {errors.phone?.message && (
                            <p className="text-[10px] text-red-500 mt-1.5 font-medium">{String(errors.phone.message)}</p>
                          )}
                        </div>

                        {/* Nivel Profesional */}
                        <div>
                          <label className={labelClass}>{t('form.labels.profesionalLevel')} *</label>
                          <div className="relative">
                            <select
                              {...register("profesionalLevel")}
                              className={`${inputClass} appearance-none cursor-pointer pr-8 ${errors.profesionalLevel ? 'border-red-400 focus:border-red-500 focus:ring-red-500 text-gray-900' : 'text-gray-600'}`}
                              defaultValue=""
                            >
                              <option value="" disabled>Seleccione...</option>
                              <option value="Administrador">{t('form.profesionalLevels.p1')}</option>
                              <option value="Consultor">{t('form.profesionalLevels.p2')}</option>
                              <option value="Director">{t('form.profesionalLevels.p3')}</option>
                              <option value="Colaborador individual">{t('form.profesionalLevels.p4')}</option>
                              <option value="Presidente, director ejecutivo, fundador">{t('form.profesionalLevels.p5')}</option>
                              <option value="Vicepresidente, vicepresidente adjunto, vicepresidente senior, vicepresidente ejecutivo">{t('form.profesionalLevels.p6')}</option>
                              <option value="Director general">{t('form.profesionalLevels.p7')}</option>
                              <option value="Propietario">{t('form.profesionalLevels.p8')}</option>
                              <option value="Jefe de proyecto">{t('form.profesionalLevels.p9')}</option>
                              <option value="Otro">{t('form.profesionalLevels.p10')}</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                          </div>
                          {errors.profesionalLevel?.message && (
                            <p className="text-[10px] text-red-500 mt-1.5 font-medium">{String(errors.profesionalLevel.message)}</p>
                          )}
                        </div>

                        {/* Cargo / Rol */}
                        <div>
                          <label className={labelClass}>{t('form.labels.role')} *</label>
                          <div className="relative">
                            <select
                              {...register("role")}
                              className={`${inputClass} appearance-none cursor-pointer pr-8 ${errors.role ? 'border-red-400 focus:border-red-500 focus:ring-red-500 text-gray-900' : 'text-gray-600'}`}
                              defaultValue=""
                            >
                              <option value="" disabled>Seleccione...</option>
                              <option value="Finanzas o Contabilidad">{t('form.roles.r1')}</option>
                              <option value="Tecnologia de la informacion">{t('form.roles.r2')}</option>
                              <option value="Desarrollo, servicios o soporte de aplicaciones">{t('form.roles.r3')}</option>
                              <option value="Auditoria o cumplimiento">{t('form.roles.r4')}</option>
                              <option value="Desarrollo empresarial">{t('form.roles.r5')}</option>
                              <option value="Comunicaciones">{t('form.roles.r6')}</option>
                              <option value="Atencion al cliente">{t('form.roles.r7')}</option>
                              <option value="Ingenieria">{t('form.roles.r8')}</option>
                              <option value="Gestion de la Informacion o Sistemas de Informacion">{t('form.roles.r9')}</option>
                              <option value="Seguridad de la informacion o gestion de riesgos">{t('form.roles.r10')}</option>
                              <option value="Otro">{t('form.roles.r11')}</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                          </div>
                          {errors.role?.message && (
                            <p className="text-[10px] text-red-500 mt-1.5 font-medium">{String(errors.role.message)}</p>
                          )}
                        </div>

                        {/* País */}
                        <div>
                          <label className={labelClass}>{t('form.labels.country')} *</label>
                          <div className="relative">
                            <select
                              {...register("country")}
                              className={`${inputClass} appearance-none cursor-pointer pr-8 ${errors.country ? 'border-red-400 focus:border-red-500 focus:ring-red-500 text-gray-900' : 'text-gray-600'}`}
                              defaultValue=""
                            >
                              <option value="" disabled>Seleccione...</option>
                              <option value="Afganistán">{t('form.countries.c1')}</option>
                              <option value="Albania">{t('form.countries.c2')}</option>
                              <option value="Alemania">{t('form.countries.c3')}</option>
                              <option value="Andorra">{t('form.countries.c4')}</option>
                              <option value="Angola">{t('form.countries.c5')}</option>
                              <option value="Arabia Saudita">{t('form.countries.c6')}</option>
                              <option value="Argelia">{t('form.countries.c7')}</option>
                              <option value="Argentina">{t('form.countries.c8')}</option>
                              <option value="Armenia">{t('form.countries.c9')}</option>
                              <option value="Australia">{t('form.countries.c10')}</option>
                              <option value="Austria">{t('form.countries.c11')}</option>
                              <option value="Azerbaiyán">{t('form.countries.c12')}</option>
                              <option value="Bahamas">{t('form.countries.c13')}</option>
                              <option value="Bangladés">{t('form.countries.c14')}</option>
                              <option value="Bélgica">{t('form.countries.c15')}</option>
                              <option value="Belice">{t('form.countries.c16')}</option>
                              <option value="Benín">{t('form.countries.c17')}</option>
                              <option value="Bielorrusia">{t('form.countries.c18')}</option>
                              <option value="Bolivia">{t('form.countries.c19')}</option>
                              <option value="Bosnia y Herzegovina">{t('form.countries.c20')}</option>
                              <option value="Botsuana">{t('form.countries.c21')}</option>
                              <option value="Brasil">{t('form.countries.c22')}</option>
                              <option value="Bulgaria">{t('form.countries.c23')}</option>
                              <option value="Camerún">{t('form.countries.c24')}</option>
                              <option value="Canadá">{t('form.countries.c25')}</option>
                              <option value="Chile">{t('form.countries.c26')}</option>
                              <option value="China">{t('form.countries.c27')}</option>
                              <option value="Chipre">{t('form.countries.c28')}</option>
                              <option value="Colombia">{t('form.countries.c29')}</option>
                              <option value="Corea del Norte">{t('form.countries.c30')}</option>
                              <option value="Corea del Sur">{t('form.countries.c31')}</option>
                              <option value="Costa Rica">{t('form.countries.c32')}</option>
                              <option value="Croacia">{t('form.countries.c33')}</option>
                              <option value="Cuba">{t('form.countries.c34')}</option>
                              <option value="Dinamarca">{t('form.countries.c35')}</option>
                              <option value="Ecuador">{t('form.countries.c36')}</option>
                              <option value="Egipto">{t('form.countries.c37')}</option>
                              <option value="El Salvador">{t('form.countries.c38')}</option>
                              <option value="Emiratos Árabes Unidos">{t('form.countries.c39')}</option>
                              <option value="Eslovaquia">{t('form.countries.c40')}</option>
                              <option value="Eslovenia">{t('form.countries.c41')}</option>
                              <option value="España">{t('form.countries.c42')}</option>
                              <option value="Estados Unidos">{t('form.countries.c43')}</option>
                              <option value="Estonia">{t('form.countries.c44')}</option>
                              <option value="Etiopía">{t('form.countries.c45')}</option>
                              <option value="Filipinas">{t('form.countries.c46')}</option>
                              <option value="Finlandia">{t('form.countries.c47')}</option>
                              <option value="Francia">{t('form.countries.c48')}</option>
                              <option value="Georgia">{t('form.countries.c49')}</option>
                              <option value="Ghana">{t('form.countries.c50')}</option>
                              <option value="Grecia">{t('form.countries.c51')}</option>
                              <option value="Guatemala">{t('form.countries.c52')}</option>
                              <option value="Haití">{t('form.countries.c53')}</option>
                              <option value="Honduras">{t('form.countries.c54')}</option>
                              <option value="Hungría">{t('form.countries.c55')}</option>
                              <option value="India">{t('form.countries.c56')}</option>
                              <option value="Indonesia">{t('form.countries.c57')}</option>
                              <option value="Irak">{t('form.countries.c58')}</option>
                              <option value="Irán">{t('form.countries.c59')}</option>
                              <option value="Irlanda">{t('form.countries.c60')}</option>
                              <option value="Islandia">{t('form.countries.c61')}</option>
                              <option value="Israel">{t('form.countries.c62')}</option>
                              <option value="Italia">{t('form.countries.c63')}</option>
                              <option value="Jamaica">{t('form.countries.c64')}</option>
                              <option value="Japón">{t('form.countries.c65')}</option>
                              <option value="Jordania">{t('form.countries.c66')}</option>
                              <option value="Kazajistán">{t('form.countries.c67')}</option>
                              <option value="Kenia">{t('form.countries.c68')}</option>
                              <option value="Kuwait">{t('form.countries.c69')}</option>
                              <option value="Letonia">{t('form.countries.c70')}</option>
                              <option value="Líbano">{t('form.countries.c71')}</option>
                              <option value="Libia">{t('form.countries.c72')}</option>
                              <option value="Lituania">{t('form.countries.c73')}</option>
                              <option value="Luxemburgo">{t('form.countries.c74')}</option>
                              <option value="Macedonia del Norte">{t('form.countries.c75')}</option>
                              <option value="Malasia">{t('form.countries.c76')}</option>
                              <option value="Marruecos">{t('form.countries.c77')}</option>
                              <option value="México">{t('form.countries.c78')}</option>
                              <option value="Moldavia">{t('form.countries.c79')}</option>
                              <option value="Mónaco">{t('form.countries.c80')}</option>
                              <option value="Mongolia">{t('form.countries.c81')}</option>
                              <option value="Montenegro">{t('form.countries.c82')}</option>
                              <option value="Mozambique">{t('form.countries.c83')}</option>
                              <option value="Nepal">{t('form.countries.c84')}</option>
                              <option value="Nicaragua">{t('form.countries.c85')}</option>
                              <option value="Nigeria">{t('form.countries.c86')}</option>
                              <option value="Noruega">{t('form.countries.c87')}</option>
                              <option value="Nueva Zelanda">{t('form.countries.c88')}</option>
                              <option value="Omán">{t('form.countries.c89')}</option>
                              <option value="Países Bajos">{t('form.countries.c90')}</option>
                              <option value="Pakistán">{t('form.countries.c91')}</option>
                              <option value="Panamá">{t('form.countries.c92')}</option>
                              <option value="Paraguay">{t('form.countries.c93')}</option>
                              <option value="Perú">{t('form.countries.c94')}</option>
                              <option value="Polonia">{t('form.countries.c95')}</option>
                              <option value="Portugal">{t('form.countries.c96')}</option>
                              <option value="Puerto Rico">{t('form.countries.c97')}</option>
                              <option value="Qatar">{t('form.countries.c98')}</option>
                              <option value="Reino Unido">{t('form.countries.c99')}</option>
                              <option value="República Checa">{t('form.countries.c100')}</option>
                              <option value="República Dominicana">{t('form.countries.c101')}</option>
                              <option value="Rumania">{t('form.countries.c102')}</option>
                              <option value="Rusia">{t('form.countries.c103')}</option>
                              <option value="Senegal">{t('form.countries.c104')}</option>
                              <option value="Serbia">{t('form.countries.c105')}</option>
                              <option value="Singapur">{t('form.countries.c106')}</option>
                              <option value="Siria">{t('form.countries.c107')}</option>
                              <option value="Sudáfrica">{t('form.countries.c108')}</option>
                              <option value="Suecia">{t('form.countries.c109')}</option>
                              <option value="Suiza">{t('form.countries.c110')}</option>
                              <option value="Tailandia">{t('form.countries.c111')}</option>
                              <option value="Taiwán">{t('form.countries.c112')}</option>
                              <option value="Tanzania">{t('form.countries.c113')}</option>
                              <option value="Túnez">{t('form.countries.c114')}</option>
                              <option value="Turquía">{t('form.countries.c115')}</option>
                              <option value="Ucrania">{t('form.countries.c116')}</option>
                              <option value="Uganda">{t('form.countries.c117')}</option>
                              <option value="Uruguay">{t('form.countries.c118')}</option>
                              <option value="Uzbekistán">{t('form.countries.c119')}</option>
                              <option value="Venezuela">{t('form.countries.c120')}</option>
                              <option value="Vietnam">{t('form.countries.c121')}</option>
                              <option value="Yemen">{t('form.countries.c122')}</option>
                              <option value="Zambia">{t('form.countries.c123')}</option>
                              <option value="Zimbabue">{t('form.countries.c124')}</option>
                              <option value="Otro">{t('form.countries.c125')}</option>
                            </select>
                            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                          </div>
                          {errors.country?.message && (
                            <p className="text-[10px] text-red-500 mt-1.5 font-medium">{String(errors.country.message)}</p>
                          )}
                        </div>
                      </div>

                      {/* Mensaje de Error General */}
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
                        className="cf-turnstile mt-2"
                        data-sitekey={process.env.NEXT_PUBLIC_CLOUDFLARE_SITE_KEY}
                        data-theme="light"
                        data-size="normal"
                        data-language="en"
                        data-callback="onSuccess"
                      ></div>

                      {/* Mensaje de aceptación de correos promocionales */}
                      <p className="text-[11px] text-gray-600 leading-relaxed font-medium">
                        Sí, acepto recibir correos electrónicos promocionales de BPM Consultores, el Socio de Negocios de HUMAND
                      </p>

                      {/* --- CAMBIO: Botón unificado con el resto de la web --- */}
                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full h-12 md:h-14 bg-[#002EC3] hover:bg-slate-900 text-white text-base font-medium rounded-sm transition-all duration-300 flex items-center justify-center gap-2 group disabled:opacity-70 shadow-md hover:shadow-lg"
                        >
                          {isSubmitting ? t('form.sending') : t('form.btn')}
                          {!isSubmitting && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                        </button>
                        <p className="text-center text-[10px] text-gray-500 mt-4 font-medium tracking-wide">
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
