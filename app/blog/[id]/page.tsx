import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { BLOG_POSTS, getPostById } from "@/lib/blogData";

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    id: post.id,
  }));
}

// 1. Agregamos 'async' aquí y le decimos a TypeScript que params es una Promesa
export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  
  // 2. "Desempaquetamos" el ID usando await
  const resolvedParams = await params;
  
  // 3. Ahora sí buscamos nuestro post con el ID resuelto
  const post = getPostById(resolvedParams.id);

  if (!post) {
    notFound();
  }

  return (
    <article className="w-full bg-white min-h-screen pb-24 font-sans">
      
      {/* Botón de volver */}
      <div className="max-w-3xl mx-auto px-6 pt-12 pb-8">
        <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#002EC3] transition-colors font-medium">
          <ArrowLeft className="w-4 h-4" /> Volver al Blog
        </Link>
      </div>

      {/* Cabecera del Artículo */}
      <header className="max-w-3xl mx-auto px-6 mb-10">
        <div className="flex items-center gap-3 mb-6">
          <Badge className="bg-blue-50 text-[#002EC3] border-none rounded-md px-3 py-1 text-xs font-bold uppercase tracking-wider">
            {post.category}
          </Badge>
          <span className="text-sm text-gray-400 font-medium">{post.date}</span>
          <span className="text-sm text-gray-400 font-medium flex items-center before:content-['•'] before:mx-2 before:text-gray-300">
            {post.readTime}
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
          {post.title}
        </h1>
      </header>

      {/* Imagen Principal */}
      <div className="max-w-5xl mx-auto px-4 md:px-6 mb-16">
        <div className="w-full h-[300px] md:h-[500px] relative rounded-3xl overflow-hidden shadow-lg border border-gray-100">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Contenido (Párrafos) */}
      <div className="max-w-3xl mx-auto px-6">
        <div className="prose prose-lg prose-blue max-w-none text-gray-700 leading-relaxed font-light">
          {post.content.map((paragraph, index) => (
            <p key={index} className="mb-6 text-[1.1rem]">
              {paragraph}
            </p>
          ))}
        </div>
      </div>

    </article>
  );
}