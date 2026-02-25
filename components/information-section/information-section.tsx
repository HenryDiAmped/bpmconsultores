"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Sparkles, LayoutGrid, Users, BarChart3, Clock, Rocket } from "lucide-react";

const cards = [
  { title: "Asesoría Gratuita", icon: <Users size={20}/>, desc: ["Realizamos un diagnóstico profundo de tus procesos.", "Diseñamos una hoja de ruta personalizada."] },
  { title: "Visión Consultiva", icon: <LayoutGrid size={20}/>, desc: ["Entendemos que la tecnología por sí sola no transforma.", "Actuamos como socios estratégicos."] },
  { title: "Seguimiento por un Año", icon: <Clock size={20}/>, desc: ["Acompañamiento constante durante los primeros 12 meses.", "Sesiones de revisión periódicas."] },
  { title: "Capacitación Continua", icon: <BarChart3 size={20}/>, desc: ["Programas de formación dinámicos.", "Seguimiento detallado del progreso educativo."] },
  { title: "Onboarding Profesional", icon: <Rocket size={20}/>, desc: ["Automatizamos la integración de nuevos colaboradores.", "Eliminamos el desorden de documentos manuales."] },
  { title: "Gestión de Planilla", icon: <Users size={20}/>, desc: ["Automatizamos el ciclo de pago y tareas críticas.", "Integramos toda la información en una plataforma única."] },
  { title: "Evaluaciones Objetivas", icon: <LayoutGrid size={20}/>, desc: ["Brindamos acompañamiento constante.", "Garantizamos la adopción total del sistema."] },
  { title: "Optimización Continua", icon: <BarChart3 size={20}/>, desc: ["Ajustamos y refinamos tus flujos de trabajo.", "Analizamos dashboards de métricas de eficiencia."] },
  { title: "Paquete Acelerador para Empresas en Crecimiento", icon: <Rocket size={20}/>, desc: ["Implementación ágil de los módulos core a tarifa preferencial.", "Incluye diagnóstico inicial para alinear la tecnología."], fullWidth: true },
];

export default function InformationSection() {
  return (
    <section className="w-full bg-[#f7f7f7] py-24 px-6">
      {/* CONTENEDOR LIMITADO A 1250PX */}
      <div className="mx-auto flex flex-col md:flex-row gap-16" style={{ maxWidth: "1250px" }}>
        
        {/* SECCIÓN IZQUIERDA: TEXTO FIJO */}
        <div className="md:w-[40%] md:sticky md:top-24 md:h-fit space-y-8">
          <Badge variant="outline" className="border-blue-200 text-blue-700 bg-blue-50/50 px-4 py-1.5 rounded-full font-medium">
            <Sparkles className="w-4 h-4 mr-2 fill-blue-600" />
            Con inteligencia artificial
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.1]">
            Gestionar el talento no es suficiente. Con BPM Consultores, es momento de desarrollarlo.
          </h2>
          
          <p className="text-slate-600 text-xl leading-relaxed">
            Las organizaciones con procesos desconectados frenan su crecimiento. En bpm unimos tu visión con la tecnología de Humand para que escalar sea más simple.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button className="bg-[#0047ff] hover:bg-blue-700 text-white px-10 py-7 text-lg rounded-xl shadow-lg shadow-blue-200 transition-all">
              Solicitar demostración
            </Button>
            <Button variant="outline" className="border-blue-200 text-blue-700 hover:bg-blue-50 px-10 py-7 text-lg rounded-xl transition-all">
              Comienza gratis
            </Button>
          </div>
        </div>

        {/* SECCIÓN DERECHA: GRID DE TARJETAS */}
        <div className="md:w-[60%] grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.1 }} // Delay escalonado para las primeras 4
              className={`${card.fullWidth ? "md:col-span-2" : ""}`}
            >
              <Card className="h-full border-slate-200/60 shadow-sm hover:shadow-md transition-shadow duration-300 rounded-2xl overflow-hidden bg-white">
                <CardHeader className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                    {card.icon}
                  </div>
                  <CardTitle className="text-xl font-bold text-slate-800">{card.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="border-t border-dashed border-slate-200 w-full" />
                  <div className="space-y-4">
                    {card.desc.map((bullet, i) => (
                      <div key={i} className="flex gap-3 items-start">
                        <div className="mt-1 bg-blue-100/50 rounded-full p-0.5">
                          <Check className="w-4 h-4 text-blue-600" strokeWidth={3} />
                        </div>
                        <p className="text-[15px] text-slate-600 leading-snug">{bullet}</p>
                      </div>
                    ))}
                  </div>
                  {card.fullWidth && (
                    <Button className="bg-[#0028a5] hover:bg-blue-900 text-white mt-4 px-8 py-5 rounded-lg font-semibold">
                      Conocer los planes
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}