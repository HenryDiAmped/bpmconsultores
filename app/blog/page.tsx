'use client';

import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { getBlogPosts } from '@/lib/blog';
import type { BlogPost } from '@/lib/blog';

export default function BlogPage() {
  const { t, i18n } = useTranslation();
  const [posts, setPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    // Cargar posts según el idioma actual
    const loadPosts = async () => {
      const blogPosts = getBlogPosts(i18n.language);
      setPosts(blogPosts);
    };
    
    loadPosts();
    
    // Recargar posts cuando cambie el idioma
    i18n.on('languageChanged', loadPosts);
    
    return () => {
      i18n.off('languageChanged', loadPosts);
    };
  }, [i18n]);

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
                {t('blog.author')}: {post.author} | {t('blog.date')}: {new Date(post.date).toLocaleDateString(i18n.language)}
              </p>
              <p style={{ marginBottom: '15px' }}>{post.excerpt}</p>
              <Link 
                href={`/blog/${post.slug}`}
                style={{ color: '#0052cc', textDecoration: 'none' }}
              >
                {t('blog.readMore')} →
              </Link>
            </article>
          ))}
        </div>
      )}
    </main>
  );
}
