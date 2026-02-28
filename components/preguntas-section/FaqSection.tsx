"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Plus, MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

// Animaciones de entrada escalonada
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: 20 },
  show: { 
    opacity: 1, 
    x: 0, 
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
  },
};

// Componente individual para cada Pregunta (Light Theme Premium)
const FaqItem = ({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) => {
  return (
    <motion.div 
      variants={itemVariants}
      className="border-b border-gray-200/80 last:border-none overflow-hidden"
    >
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between py-6 md:py-8 text-left focus:outline-none group"
      >
        <span className={cn(
          "text-[17px] md:text-[19px] font-semibold transition-colors duration-300 pr-8 leading-snug",
          isOpen ? "text-[#002EC3]" : "text-slate-800 group-hover:text-[#002EC3]"
        )}>
          {question}
        </span>
        
        {/* Ícono animado interactivo */}
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.4, ease: "anticipate" }}
          className={cn(
            "flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300 border",
            isOpen 
              ? "bg-[#002EC3] border-[#002EC3] text-white shadow-md shadow-blue-600/20" 
              : "bg-white border-gray-200 text-slate-400 group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:text-[#002EC3]"
          )}
        >
          <Plus className="h-5 w-5" strokeWidth={2.5} />
        </motion.div>
      </button>

      {/* Contenido expansible animado */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="pb-8 pr-12 text-[15px] md:text-base text-slate-600 leading-relaxed font-medium">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// Componente Principal
export default function FaqSection() {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0); 

  const allFaqsData = t('faq.questions', { returnObjects: true }) as Array<{
    question: string;
    answer: string;
  }>;

  // Limitamos estrictamente a 5 preguntas
  const faqsData = allFaqsData.slice(0, 5);

  return (
    // Fondo claro absoluto tal como solicitaste
    <section className="w-full bg-[#f7f7f7] pb-16 md:pb-24 px-4 md:px-6 flex justify-center font-sans">
      
      <div className="mx-auto w-full max-w-[1280px]">
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          
          {/* COLUMNA IZQUIERDA: Títulos y CTA */}
          <div className="lg:w-[45%] flex flex-col justify-start lg:pt-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="sticky top-32" // Hace que esta columna te acompañe al hacer scroll
            >
              <h2 className="text-4xl md:text-5xl lg:text-[52px] font-bold text-slate-900 tracking-tight leading-[1.1] mb-6">
                Preguntas <br className="hidden lg:block" />
                <span className="text-[#002EC3]">
                  Frecuentes
                </span>
              </h2>
              
              <p className="text-lg text-slate-600 font-medium mb-10 leading-relaxed max-w-md">
                Todo lo que necesitas saber sobre cómo BPM Consultores puede transformar y escalar tu empresa con tecnología.
              </p>

              {/* Botón de soporte flotante (Light Style) */}
              <div className="p-8 rounded-3xl bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 max-w-sm transition-transform hover:-translate-y-1 duration-300">
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100">
                    <MessageCircle className="h-6 w-6 text-[#002EC3]" />
                  </div>
                  <h3 className="text-slate-900 font-bold text-lg">¿Tienes otra duda?</h3>
                </div>
                <p className="text-[15px] text-slate-500 mb-6 font-medium">
                  Nuestro equipo de expertos está listo para analizar tu caso específico.
                </p>
                <a 
                  href="/contacto" 
                  className="inline-block font-semibold text-white bg-[#002EC3] hover:bg-blue-800 shadow-lg shadow-blue-600/20 transition-all px-6 py-3.5 rounded-xl w-full text-center"
                >
                  Hablar con un asesor
                </a>
              </div>
            </motion.div>
          </div>

          {/* COLUMNA DERECHA: Acordeón de 5 preguntas */}
          <div className="lg:w-[55%]">
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-col w-full"
            >
              {faqsData.map((faq, index) => (
                <FaqItem 
                  key={index} 
                  question={faq.question} 
                  answer={faq.answer} 
                  isOpen={openIndex === index}
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                />
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}