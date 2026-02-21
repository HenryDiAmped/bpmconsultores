'use client';

import { useTranslation } from 'react-i18next';
import styles from './VideoSection.module.css';

export default function VideoSection() {
  const { t } = useTranslation();

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h2 className={styles.title}>{t('video.title')}</h2>
        <p className={styles.subtitle}>{t('video.subtitle')}</p>
      </div>

      <div className={styles.videoWrapper}>
        <iframe
          src="https://player.cloudinary.com/embed/?cloud_name=dmgufgga4&public_id=Video_Generado_Listo_Para_Ver_femnyr&autoplay=true&muted=true&loop=true&controls=false"
          width="100%"
          height="100%"
          style={{ border: 'none' }}
          allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
          allowFullScreen
          title="BPM Consultores Video"
        />
      </div>
    </section>
  );
}
