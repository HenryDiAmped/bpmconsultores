"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useTranslation } from "react-i18next";

// Animaciones de entrada generales
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" as const } 
  },
};

// Componente individual para cada Pregunta (Acordeón)
const FaqItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      variants={itemVariants}
      className="border border-[#7e9cff] rounded-[14px] bg-white overflow-hidden transition-shadow hover:shadow-sm"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between px-6 py-4 text-left focus:outline-none"
      >
        <span className="text-[17px] font-medium text-black">
          {question}
        </span>
        
        {/* Ícono animado que gira al abrir */}
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5 text-gray-500" strokeWidth={1.5} />
        </motion.div>
      </button>

      {/* Contenido expansible animado con Framer Motion */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-5 text-[15px] text-gray-600 leading-relaxed border-t border-gray-100 mt-2 pt-4">
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

  // Obtenemos el array de preguntas del JSON
  const faqsData = t('faq.questions', { returnObjects: true }) as Array<{
    question: string;
    answer: string;
  }>;

  return (
    <section className="w-full bg-[#fafafa] py-24 flex justify-center font-sans">
      <div className="mx-auto w-full max-w-[1250px] px-4 flex flex-col items-center">
        
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-4xl md:text-[44px] font-medium text-black mb-14 text-center"
        >
          {t('faq.title')}
        </motion.h2>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full"
        >
          {faqsData.map((faq, index) => (
            <FaqItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </motion.div>

      </div>
    </section>
  );
}