// lib/blogData.ts

export const CATEGORIES = ["Todos", "IA", "Blog", "Consultoría", "Gestión", "Tecnología"];

export const BLOG_POSTS = [
  {
    id: "1", // Nota: Lo pasamos a texto ("1") porque las URLs de Next.js leen texto
    category: "IA",
    title: "IA aplicada a Recursos Humanos: cómo optimizar y reducir el costo de rotación",
    excerpt: "Descubre cómo la inteligencia artificial está revolucionando la gestión del talento y reduciendo costos operativos drásticamente...",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=800&auto=format&fit=crop",
    date: "25 Feb 2026",
    readTime: "5 min",
    content: [
      "La inteligencia artificial (IA) ha dejado de ser una promesa futurista para convertirse en una herramienta indispensable en los departamentos de Recursos Humanos de las empresas más innovadoras del mundo.",
      "Uno de los mayores desafíos que enfrentan las organizaciones es la alta rotación de personal, la cual no solo afecta la productividad, sino que representa un costo oculto masivo en reclutamiento y capacitación.",
      "A través de algoritmos predictivos, los sistemas modernos como los módulos de Humand que implementamos en BPM Consultores, pueden identificar patrones de insatisfacción laboral antes de que el empleado decida renunciar, permitiendo a los líderes tomar acciones preventivas y mejorar el clima organizacional."
    ]
  },
  {
    id: "2",
    category: "Tecnología",
    title: "Transformación digital: el camino hacia la empresa del futuro",
    excerpt: "Las empresas que adoptan la transformación digital logran una ventaja competitiva sostenible. Conoce las claves para empezar hoy...",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    date: "20 Feb 2026",
    readTime: "7 min",
    content: [
      "La transformación digital va mucho más allá de simplemente eliminar el papel o comprar un nuevo software. Implica un cambio cultural profundo en la forma en que la empresa opera y entrega valor a sus clientes.",
      "En BPM Consultores entendemos que el primer paso para una digitalización exitosa es capacitar al talento humano para que adopte estas nuevas tecnologías de manera natural y sin resistencia."
    ]
  }
  // (Aquí el cliente luego podrá ir agregando el resto de los artículos con su contenido)
];

// Función utilitaria para encontrar un blog por su ID
export function getPostById(id: string) {
  return BLOG_POSTS.find((post) => post.id === id);
}