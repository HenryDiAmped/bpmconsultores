import { useTranslations } from 'next-intl';

export default function ReskillingIA() {
  const t = useTranslations('blogArticles.reskillingIA');

  return (
    <>
      <p className="lead">{t('lead')}</p>

      <p>{t('p1')}</p>

      <h2>{t('h1')}</h2>
      <p>{t('p2')}</p>
      <ul>
        <li><strong>{t('li1_title')}</strong>{t('li1_text')}</li>
        <li><strong>{t('li2_title')}</strong>{t('li2_text')}</li>
      </ul>

      <blockquote>
        {t('quote')}
      </blockquote>

      <h2>{t('h2')}</h2>
      <p>{t('p3')}</p>
      <ul>
        <li><strong>{t('li3_title')}</strong>{t('li3_text')}</li>
        <li>{t('li4')}</li>
        <li>{t('li5')}</li>
        <li><strong>{t('li6_title')}</strong>{t('li6_text')}</li>
      </ul>

      <h2>{t('h3')}</h2>
      <p>{t('p4')}</p>
      <p>{t('p5')}</p>
      <ul>
        <li>{t('li7')}</li>
        <li>{t('li8')}</li>
        <li>{t('li9')}</li>
      </ul>

      <h2>{t('h4')}</h2>
      <p>{t('p6')}</p>
      <p><strong>{t('footer')}</strong></p>
    </>
  );
}