'use client';

import { useTranslation } from 'react-i18next';
import Link from 'next/link';

export default function BlogPage() {
  const { t, i18n } = useTranslation();

  // Posts de ejemplo - en producción estos vendrían de una API o CMS
  const postsData = {
    es: [
      {
        slug: 'ejemplo-post',
        title: 'Cómo transformar tu negocio con tecnología',
        excerpt: 'Descubre las mejores prácticas para implementar soluciones tecnológicas en tu empresa y acelerar el crecimiento.',
        date: '2026-02-19',
        author: 'BPM Consultores',
      },
    ],
    en: [
      {
        slug: 'ejemplo-post',
        title: 'How to transform your business with technology',
        excerpt: 'Discover the best practices to implement technological solutions in your company and accelerate growth.',
        date: '2026-02-19',
        author: 'BPM Consultores',
      },
    ],
  };

  const posts = postsData[i18n.language as 'es' | 'en'] || postsData.es;

  return (
    <main style={{ padding: 40 }}>
      <h1>{t('blog.title')}</h1>

      {posts.length === 0 ? (
        <p style={{ marginTop: '30px', color: '#666' }}>
          {i18n.language === 'es'
            ? 'No hay posts disponibles aún.'
            : 'No posts available yet.'}
        </p>
      ) : (
        <div style={{ display: 'grid', gap: '20px', marginTop: '30px' }}>
          {posts.map((post) => (
            <article
              key={post.slug}
              style={{
                border: '1px solid #ddd',
                padding: '20px',
                borderRadius: '8px',
                transition: 'box-shadow 0.2s',
              }}
            >
              <h2 style={{ marginBottom: '10px' }}>{post.title}</h2>
              <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '10px' }}>
                {t('blog.author')}: {post.author} | {t('blog.date')}:{' '}
                {new Date(post.date).toLocaleDateString(i18n.language)}
              </p>
              <p style={{ marginBottom: '15px' }}>{post.excerpt}</p>
              <Link href={`/blog/${post.slug}`} style={{ color: '#0052cc', textDecoration: 'none' }}>
                {t('blog.readMore')} →
              </Link>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}
