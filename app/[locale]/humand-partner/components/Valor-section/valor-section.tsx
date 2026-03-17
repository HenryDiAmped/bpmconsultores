'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

export function ValorSection() {
  const t = useTranslations('humandPartner.valor');

  const CATEGORIAS_COLUMNA_1 = [
    {
      titulo: t('col1.cat1_title'),
      items: [
        { nombre: t('col1.cat1_i1'), icon: '/ICONOS/4 CULTURA EMPRESARIAL/1-PROGRAMA-DE-REFERIDOS.webp' },
        { nombre: t('col1.cat1_i2'), icon: '/ICONOS/4 CULTURA EMPRESARIAL/2-PEOPLE-EXPERIENCE.webp' },
        { nombre: t('col1.cat1_i3'), icon: '/ICONOS/4 CULTURA EMPRESARIAL/3-CUMPLEAÑOS-Y-ANIVERSARIOS.webp' },
        { nombre: t('col1.cat1_i4'), icon: '/ICONOS/4 CULTURA EMPRESARIAL/4-MARKETPLACE.webp' },
        { nombre: t('col1.cat1_i5'), icon: '/ICONOS/4 CULTURA EMPRESARIAL/5-EVENTOS.webp' },
        { nombre: t('col1.cat1_i6'), icon: '/ICONOS/4 CULTURA EMPRESARIAL/6-RECONOCIMIENTOS.webp' },
      ]
    },
    {
      titulo: t('col1.cat2_title'),
      items: [
        { nombre: t('col1.cat2_i1'), icon: '/ICONOS/2 COMUNICACION INTERNA/1-CHAT.webp' },
        { nombre: t('col1.cat2_i2'), icon: '/ICONOS/2 COMUNICACION INTERNA/2-RED-SOCIAL-INTERNA.webp' },
        { nombre: t('col1.cat2_i3'), icon: '/ICONOS/2 COMUNICACION INTERNA/3-LIVE-STREAMING.webp' },
        { nombre: t('col1.cat2_i4'), icon: '/ICONOS/2 COMUNICACION INTERNA/4-NOTICIAS.webp' },
        { nombre: t('col1.cat2_i5'), icon: '/ICONOS/2 COMUNICACION INTERNA/5-ORGANIGRAMA.webp' },
        { nombre: t('col1.cat2_i6'), icon: '/ICONOS/2 COMUNICACION INTERNA/6-BIBLIOTECA-DE-RECURSOS.webp' },
        { nombre: t('col1.cat2_i7'), icon: '/ICONOS/2 COMUNICACION INTERNA/7-BENEFICIOS.webp' },
      ]
    },
    {
      titulo: t('col1.cat3_title'),
      items: [
        { nombre: t('col1.cat3_i1'), icon: '/ICONOS/5 OPERACIONES/2-FORMULARIOS-TRÁMITES-Y-OPERACIONES.webp' },
        { nombre: t('col1.cat3_i2'), icon: '/ICONOS/5 OPERACIONES/1-GESTIÓN-DE-SERVICIOS.webp' },
        { nombre: t('col1.cat3_i3'), icon: '/ICONOS/5 OPERACIONES/3-CONTROL-DE-ASISTENCIA.webp' },
      ]
    }
  ];

  const CATEGORIAS_COLUMNA_2 = [
    {
      titulo: t('col2.cat1_title'),
      items: [
        { nombre: t('col2.cat1_i1'), icon: '/ICONOS/1 DESARROLLO DE TALENTO/1-ENCUESTAS.webp' },
        { nombre: t('col2.cat1_i2'), icon: '/ICONOS/1 DESARROLLO DE TALENTO/2-EVALUACION-DE-DESEMPEÑO.webp' },
        { nombre: t('col2.cat1_i3'), icon: '/ICONOS/1 DESARROLLO DE TALENTO/3-OBJETIVOS-Y-RESULTADOS-CLAVES.webp' },
        { nombre: t('col2.cat1_i4'), icon: '/ICONOS/1 DESARROLLO DE TALENTO/4-APRENDIZAJE.webp' },
        { nombre: t('col2.cat1_i5'), icon: '/ICONOS/1 DESARROLLO DE TALENTO/5-PLAN-DE-CARRERA.webp' },
        { nombre: t('col2.cat1_i6'), icon: '/ICONOS/1 DESARROLLO DE TALENTO/6-BUSQUEDAS-INTERNAS.webp' },
      ]
    },
    {
      titulo: t('col2.cat2_title'),
      items: [
        { nombre: t('col2.cat2_i1'), icon: '/ICONOS/3 GESTIÓN DE RR. HH/1-DOCUMENTOS.webp' },
        { nombre: t('col2.cat2_i2'), icon: '/ICONOS/3 GESTIÓN DE RR. HH/2-ONBOARDING.webp' },
        { nombre: t('col2.cat2_i3'), icon: '/ICONOS/3 GESTIÓN DE RR. HH/3-VACACIONES-Y-PERMISOS.webp' },
        { nombre: t('col2.cat2_i4'), icon: '/ICONOS/3 GESTIÓN DE RR. HH/4-EXPEDIENTE-DIGITAL-DEL-COLABORADOR.webp' },
        { nombre: t('col2.cat2_i5'), icon: '/ICONOS/3 GESTIÓN DE RR. HH/5-ARCHIVOS.webp' },
        { nombre: t('col2.cat2_i6'), icon: '/ICONOS/3 GESTIÓN DE RR. HH/6-RESERVA-DE-ESPACIOS.webp' },
        { nombre: t('col2.cat2_i7'), icon: '/ICONOS/3 GESTIÓN DE RR. HH/7-ACCESOS-RAPIDOS.webp' },
        { nombre: t('col2.cat2_i8'), icon: '/ICONOS/3 GESTIÓN DE RR. HH/8-POLÍTICAS.webp' },
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 100, damping: 15 } }
  };

  const tagsContainerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.3 } }
  };

  const tagVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 150 } }
  };

  const CategoriaCard = ({ data, className = "" }: { data: any, className?: string }) => (
    <motion.div
      variants={cardVariants as any}
      whileHover={{ scale: 1.01, y: -2 }}
      className={`bg-transparent border-[3px] border-[#4466F2] rounded-[2.5rem] p-7 flex flex-col w-full h-fit transition-all duration-300 ${className}`}
    >
      <h3 className="text-slate-600 font-semibold text-[1.15rem] mb-5">{data.titulo}</h3>

      <motion.div
        variants={tagsContainerVariants as any}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="flex flex-wrap gap-3"
      >
        {data.items.map((item: any, i: number) => (
          <motion.div
            key={i}
            variants={tagVariants as any}
            whileHover={{ scale: 1.03 }}
            className="flex items-center gap-2.5 bg-white px-4 py-2 rounded-2xl text-[13px] md:text-sm text-slate-800 font-medium shadow-[0_2px_12px_rgba(0,0,0,0.04)] cursor-default transition-all"
          >
            {item.icon && (
              <img
                src={item.icon}
                alt={`Icono de ${item.nombre}`}
                className="w-4 h-4 object-contain"
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
            )}
            <span>{item.nombre}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );

  return (
    <section className="w-full bg-[#F8F9FA] py-20 md:py-32 overflow-hidden flex flex-col items-center">
      <div className="mx-auto px-6 lg:px-8 max-w-[1500px] w-full">
        
        {/* ========================================= */}
        {/* NUEVO: TÍTULO Y VIDEO DE YOUTUBE INTRODUCTORIO */}
        {/* ========================================= */}
        <div className="flex flex-col items-center mb-20 md:mb-28 w-full">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-10 text-center"
          >
            Descubre los módulos de <span className="text-[#4466F2]">Humand</span>
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full max-w-5xl aspect-video rounded-[2rem] overflow-hidden shadow-2xl border-[3px] border-[#4466F2]/20 bg-slate-900"
          >
            <iframe 
              width="100%" 
              height="100%" 
              src="https://www.youtube.com/embed/izINLTDaXrY?rel=0" 
              title="Descubre los módulos de Humand" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen
              className="w-full h-full"
            ></iframe>
          </motion.div>
        </div>
        {/* ========================================= */}


        <motion.h2 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, type: "spring", bounce: 0.3 }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-12 md:mb-16 text-center lg:text-left"
        >
          {t('title')} <span className="text-[#4466F2]">{t('title_span')}</span> {t('title_end')}
        </motion.h2>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-14 items-center lg:items-stretch">

          <div className="w-full lg:w-[65%] grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-6 lg:gap-8">

            <motion.div
              variants={containerVariants as any}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-col gap-6"
            >
              {CATEGORIAS_COLUMNA_1.map((cat, index) => (
                <CategoriaCard key={`col1-${index}`} data={cat} />
              ))}
            </motion.div>

            <motion.div
              variants={containerVariants as any}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="flex flex-col gap-6"
            >
              {CATEGORIAS_COLUMNA_2.map((cat, index) => (
                <CategoriaCard key={`col2-${index}`} data={cat} />
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
            className="w-full lg:w-[35%] flex flex-col justify-center lg:pl-4 mt-10 lg:mt-0"
          >
            <p className="text-2xl md:text-3xl lg:text-[2.2rem] leading-snug text-slate-800 text-center lg:text-left font-light">
              {t('cta')} <span className="font-bold text-slate-800">{t('cta_span')}</span> {t('cta_end')}
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}