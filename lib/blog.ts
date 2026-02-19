import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  content: string;
}

// Obtener todos los posts de un idioma específico
export function getBlogPosts(locale: string): BlogPost[] {
  const postsDirectory = path.join(process.cwd(), 'content', 'blog', locale);
  
  // Si no existe la carpeta, retornar array vacío
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  
  const posts = fileNames
    .filter(fileName => fileName.endsWith('.mdx') || fileName.endsWith('.md'))
    .map(fileName => {
      const slug = fileName.replace(/\.(mdx|md)$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: data.title || 'Sin título',
        excerpt: data.excerpt || '',
        date: data.date || new Date().toISOString(),
        author: data.author || 'Anónimo',
        content,
      };
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1)); // Ordenar por fecha

  return posts;
}

// Obtener un post específico por slug e idioma
export function getBlogPost(slug: string, locale: string): BlogPost | null {
  const fullPath = path.join(process.cwd(), 'content', 'blog', locale, `${slug}.mdx`);
  
  if (!fs.existsSync(fullPath)) {
    // Intentar con .md si no existe .mdx
    const mdPath = path.join(process.cwd(), 'content', 'blog', locale, `${slug}.md`);
    if (!fs.existsSync(mdPath)) {
      return null;
    }
    const fileContents = fs.readFileSync(mdPath, 'utf8');
    const { data, content } = matter(fileContents);
    
    return {
      slug,
      title: data.title || 'Sin título',
      excerpt: data.excerpt || '',
      date: data.date || new Date().toISOString(),
      author: data.author || 'Anónimo',
      content,
    };
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    title: data.title || 'Sin título',
    excerpt: data.excerpt || '',
    date: data.date || new Date().toISOString(),
    author: data.author || 'Anónimo',
    content,
  };
}
