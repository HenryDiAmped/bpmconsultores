'use client';

<<<<<<< HEAD
import { PartnerHero } from './components/Hero-section/partnerHero';
import {EstadisticaSection}  from './components/Estadisticas-section/estadisticaSection';
import {PresenciaSection} from './components/Presencia-section/presencia-section';
import { FusionSection } from './components/Fusion-section/fusion-section'; 
import { ValorSection } from './components/Valor-section/valor-section';
import { ImplementacionSection } from './components/Implementacion-section/ImplementacionSection';
import { TrayectoriaSection } from './components/trayectoria-section/TrayectoriaSection';

=======
import HumandSection from '@/components/humand-section/HumandSection';
import { useTranslation } from 'react-i18next';
>>>>>>> main

export default function HumandPartnerPage() {

  return (
<<<<<<< HEAD
    <main>
      <PartnerHero />
      <EstadisticaSection />
      <PresenciaSection />
      <FusionSection />
      <ValorSection />
      <ImplementacionSection />
      <TrayectoriaSection />
=======
    <main style={{ padding: 40 }}>
      <HumandSection />
>>>>>>> main
    </main>
  );
}
