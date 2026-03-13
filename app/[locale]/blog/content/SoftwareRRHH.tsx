import { useTranslations } from 'next-intl';

export default function SoftwareRRHH() {
  const t = useTranslations('blogArticles.softwareRRHH');

  return (
    <>
      <p className="lead">{t('lead')}</p>
      
      <p>{t('p1')}</p>

      <h2>{t('h1')}</h2>
      <p>{t('p2')}</p>

      <h2>{t('h2')}</h2>
      <p>{t('p3')}</p>

      <ul>
        <li><strong>{t('l1_title')}</strong>{t('l1_text')}</li>
        <li><strong>{t('l2_title')}</strong>{t('l2_text')}</li>
        <li><strong>{t('l3_title')}</strong>{t('l3_text')}</li>
        <li><strong>{t('l4_title')}</strong>{t('l4_text')}</li>
      </ul>

      <blockquote>
        {t('quote')}
      </blockquote>

      <h2>{t('h3')}</h2>
      <p>{t('p4')}</p>
      <ul>
        <li>{t('li5')}</li>
        <li>{t('li6')}</li>
        <li>{t('li7')}</li>
      </ul>

      <h2>{t('h4')}</h2>
      <p>{t('p5')}</p>
      <ul>
        <li><strong>{t('li8_title')}</strong>{t('li8_text')}</li>
        <li><strong>{t('li9_title')}</strong>{t('li9_text')}</li>
        <li><strong>{t('li10_title')}</strong>{t('li10_text')}</li>
      </ul>
      
      <h2>{t('h5')}</h2>
      <p>{t('p6')}</p>
    </>
  );
}