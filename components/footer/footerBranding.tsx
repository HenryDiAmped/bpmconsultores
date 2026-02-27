'use client';

import Link from "next/link";
import { useTranslation } from 'react-i18next';
import { Container } from "@/components/ui/container";

export function FooterBranding() {
  const { t } = useTranslation();
  
  return (
    <div className=" bg-[#002EC3] py-10 border-b border-gray-200">
      <Container>
        <div className="flex flex-col max-w-4xl mx-auto px-4">
          
          <h2 className="text-3xl md:text-5xl lg:text-[48px] font-medium text-white mb-10 leading-[1.15] tracking-tight">
            {t('footerBranding.title')}
          </h2>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <Link 
              href="/contacto"
              className="bg-[#FFFFFF] text-[#002EC3] px-8 py-4 rounded-md font-semibold transition-colors duration-300 w-full sm:w-auto text-center shadow-sm hover:shadow-md"
            >
              {t('footerBranding.cta')}
            </Link>
          </div>

        </div>
      </Container>
    </div>
  );
}