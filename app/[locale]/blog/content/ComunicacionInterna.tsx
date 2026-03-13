import { useTranslations } from 'next-intl';

export default function ComunicacionInterna() {
  const t = useTranslations('blogArticles.comunicacionInterna');

  return (
    <>
      <p className="lead">{t('lead')}</p>

      <p>{t('p1')}</p>

      <h2>{t('h1')}</h2>
      <p>{t('p2')}</p>
      <ul>
        <li>{t('li1')}</li>
        <li>{t('li2')}</li>
        <li>{t('li3')}</li>
      </ul>

      <h2>{t('h2')}</h2>
      <p>{t('p3')}</p>

      <h3>{t('h3_1')}</h3>
      <p>{t('p4')}</p>

      <h3>{t('h3_2')}</h3>
      <p>{t('p5')}</p>

      <h3>{t('h3_3')}</h3>
      <p>{t('p6')}</p>

      <h2>{t('h2_2')}</h2>
      <p>{t('p7')}</p>
      <ul>
        <li><strong>{t('li4_title')}</strong>{t('li4_text')}</li>
        <li><strong>{t('li5_title')}</strong>{t('li5_text')}</li>
        <li><strong>{t('li6_title')}</strong>{t('li6_text')}</li>
      </ul>

      <h2>{t('h2_3')}</h2>
      <p>{t('p8')}</p>
      <ul>
        <li><strong>{t('li7_title')}</strong>{t('li7_text')}</li>
        <li><strong>{t('li8_title')}</strong>{t('li8_text')}</li>
        <li><strong>{t('li9_title')}</strong>{t('li9_text')}</li>
      </ul>

      <h2>{t('h2_4')}</h2>
      <p>{t('p9')}</p>
    </>
  );
}