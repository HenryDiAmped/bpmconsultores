'use client';

import Link from "next/link";
import { useTranslation } from 'react-i18next';
import { Container } from "@/components/ui/container";
// 1. Importamos motion
import { motion } from "framer-motion";

// 2. Variante de animación reutilizable
const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export function FooterBranding() {
  const { t } = useTranslation();

  return (
    <div className=" bg-[#002EC3] py-10 border-b border-gray-200 overflow-hidden">
      <Container>
        <div className="flex flex-col max-w-4xl mx-auto px-4">

          {/* 3. Animamos el Título (Aparece al hacer scroll) */}
          <motion.h2
            className="text-3xl md:text-5xl lg:text-[48px] font-medium text-white mb-10 leading-[1.15] tracking-tight"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }} // once: true evita que se repita si subes y bajas
            variants={fadeUpVariants}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {t('footerBranding.title')}
          </motion.h2>

          {/* 4. Animamos el botón (Aparece con retraso) */}
          <motion.div
            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUpVariants}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }} // 0.2s de retraso
          >
            <Link
              href="/contacto"
              className="bg-[#FFFFFF] text-[#002EC3] px-8 py-4 rounded-md font-semibold transition-colors duration-300 w-full sm:w-auto text-center shadow-sm hover:shadow-md"
            >
              {t('footerBranding.cta')}
            </Link>
          </motion.div>

        </div>
      </Container>
    </div>
  );
}