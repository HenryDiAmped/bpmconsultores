'use client';

import { motion } from 'framer-motion';
import { Award, Users, Lightbulb } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

import { useTranslations } from 'next-intl';

export default function ValorSection() {
  const t = useTranslations('valor');

  const getValores = () => [
    {
      num: '01',
      title: t('cards.c1.title'),
      desc: t('cards.c1.desc'),
      icon: Award,
    },
    {
      num: '02',
      title: t('cards.c2.title'),
      desc: t('cards.c2.desc'),
      icon: Users,
    },
    {
      num: '03',
      title: t('cards.c3.title'),
      desc: t('cards.c3.desc'),
      icon: Lightbulb,
    }
  ];
  
  const VALORES = getValores();

  return (
    <section className="w-full bg-gradient-to-r from-slate-950 via-slate-900 to-[#002EC3] flex flex-col relative border-t border-white/5">
      <div className="mx-auto px-6 lg:px-8 max-w-[1320px] py-24 w-full">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          
          {/* Columna Izquierda (Sticky) */}
          <div className="lg:w-5/12 lg:sticky lg:top-32">
            <div className="overflow-hidden mb-6">
              <motion.h2 
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="text-3xl md:text-4xl lg:text-[2.2rem] xl:text-[2.75rem] font-bold text-white tracking-tight leading-[1.2]"
              >
                <span className="whitespace-nowrap">{t('header.title1')}</span> <br />
                <span className="text-blue-300">{t('header.title2')}</span>
              </motion.h2>
            </div>
            
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-lg text-white/95 font-normal leading-relaxed pr-4 xl:pr-8"
            >
              {t('header.desc')}
            </motion.p>
          </div>

          {/* Columna Derecha */}
          <div className="lg:w-7/12 w-full flex flex-col">
            <Separator className="bg-white/10" />
            
            {VALORES.map((valor, index) => {
              const Icon = valor.icon;
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="group relative flex gap-8 md:gap-12 py-10 cursor-pointer"
                >
                  <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 -mx-6 px-6 rounded-sm" />

                  {/* NÚMERO: Blanco inicial -> Azul eléctrico en hover */}
                  <div className="text-4xl md:text-5xl font-medium text-white group-hover:text-blue-400 transition-colors duration-500 font-mono w-16 shrink-0 pt-1">
                    {valor.num}
                  </div>

                  {/* Contenido (Icono + Texto) */}
                  <div className="flex-1 flex gap-6 items-start">
                    <div className="shrink-0 pt-2 hidden md:block">
                      {/* ICONO: Blanco inicial -> Azul eléctrico en hover */}
                      <Icon strokeWidth={2} className="text-white group-hover:text-blue-400 w-7 h-7 transition-colors duration-500" />
                    </div>
                    <div className="max-w-xl">
                      {/* TÍTULO: Blanco inicial -> Azul eléctrico en hover + ligero movimiento */}
                      <h3 className="text-2xl font-semibold text-white mb-3 group-hover:text-blue-400 group-hover:translate-x-1 transition-all duration-500 leading-tight">
                        {valor.title}
                      </h3>
                      {/* DESCRIPCIÓN: Blanco inicial -> Azul suave en hover para no saturar */}
                      <p className="text-white group-hover:text-blue-100 text-sm leading-relaxed transition-colors duration-500 font-normal">
                        {valor.desc}
                      </p>
                    </div>
                  </div>

                  {/* LÍNEA INFERIOR ANIMADA: Se pinta de azul en hover */}
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10">
                    <div className="h-full bg-blue-400 w-0 group-hover:w-full transition-all duration-700 ease-out" />
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}