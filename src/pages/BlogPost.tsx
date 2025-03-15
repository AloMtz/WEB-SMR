import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar } from 'lucide-react';
import { BlogPost as BlogPostType } from '../types';
import PostImage1 from "../assets/PostImage_1.jpg"
import PostImage3 from "../assets/PostImage_3.jpeg"
import PostImage4 from "../assets/PostImage_4.jpeg"
import PostImage5 from "../assets/PostImage_5.jpeg"
import PostImage7 from "../assets/PostImage_7.jpeg"
import PostVideo1 from "../assets/PostVideo_1.mp4"

// Sample blog data (in a real app, this would come from an API)
const blogPosts: BlogPostType[] = [
    {
        id: '1',
        title: 'Operaciones de Rescate: Envío de Cuadrillas a Estados de México',
        slug: 'operaciones-rescate-cuadrillas-mexico',
        excerpt:
            'Conoce cómo enviamos cuadrillas de emergencia a distintos estados de México para rescatar maquinaria pesada volcada y garantizar la continuidad de las operaciones.',
        content: `
        <p>Recientemente, nuestro equipo recibió una llamada de auxilio desde un proyecto ubicado en una zona desértica del norte de México. Una excavadora se había volcado debido a las condiciones del terreno, lo que representaba un riesgo tanto para la maquinaria como para la seguridad de los operadores. De inmediato, organizamos una cuadrilla de rescate especializada y nos trasladamos hasta el lugar para evaluar la situación.</p>

        <h2>La importancia de la respuesta rápida</h2>
        <p>Actuar con prontitud en casos como estos es esencial. Cada minuto que pasa puede incrementar los daños en la maquinaria, así como los costos asociados a la detención de la obra. Por ello, contamos con un equipo de técnicos altamente capacitados y equipados con las herramientas necesarias para llevar a cabo rescates de maquinaria pesada en cualquier parte del país.</p>

        <h2>El proceso de rescate</h2>
        <p>Para enderezar la excavadora volcada, fue necesario utilizar varias máquinas de apoyo, entre ellas bulldozers y grúas especiales. El proceso incluyó:</p>
        <ol>
            <li>Evaluación de la estabilidad del terreno y cálculo del peso de la excavadora</li>
            <li>Coordinación con el personal local para despejar el área y asegurar el perímetro</li>
            <li>Colocación de cables y arneses de alta resistencia para sujetar la excavadora</li>
            <li>Sincronización de la fuerza de tracción y elevación para enderezar la maquinaria</li>
        </ol>
        <p>Durante todo el procedimiento, se tomaron las medidas de seguridad necesarias para proteger a nuestro equipo y al personal local. Afortunadamente, pudimos completar el rescate sin incidentes y con daños mínimos a la excavadora.</p>

        <h2>Galería de imágenes</h2>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 16px;">
            <figure style="text-align: center;">
            <img src=${PostImage7} alt="Bulldozers y maquinaria coordinando el rescate" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px;" />
            <figcaption style="margin-top: 8px; font-size: 14px; color: #555;">Maquinaria pesada coordinándose para enderezar la excavadora.</figcaption>
            </figure>
            <figure style="text-align: center;">
            <img src=${PostImage3} alt="Excavadora volcada en el desierto" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px;" />
            <figcaption style="margin-top: 8px; font-size: 14px; color: #555;">La excavadora volcada debido a las condiciones del terreno.</figcaption>
            </figure>
            <figure style="text-align: center;">
            <img src=${PostImage4} alt="Operarios asegurando cables y arneses" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px;" />
            <figcaption style="margin-top: 8px; font-size: 14px; color: #555;">Operarios asegurando los cables y arneses para el rescate.</figcaption>
            </figure>
            <figure style="text-align: center;">
            <img src=${PostImage5} alt="Excavadora levantada tras el rescate" style="width: 100%; height: 200px; object-fit: cover; border-radius: 8px;" />
            <figcaption style="margin-top: 8px; font-size: 14px; color: #555;">La excavadora finalmente enderezada y lista para continuar su operación.</figcaption>
            </figure>
        </div>

        <h2>Video del proceso</h2>
        <div style="margin-bottom: 16px;">
            <video controls width="100%">
            <source src=${PostVideo1} type="video/mp4" />
            Tu navegador no soporta la reproducción de video.
            </video>
            <p style="margin-top: 16px; font-size: 16px; color: #555;">En el video anterior, se puede observar el proceso paso a paso, desde la preparación de la maquinaria de apoyo hasta el levantamiento final de la excavadora. Este tipo de intervenciones rápidas forman parte de nuestro compromiso de ofrecer asistencia y mantenimiento a la maquinaria pesada donde y cuando más se necesite.</p>
        </div>
    `,
        featuredImage: PostImage1,
        author: {
            name: 'Carlos Martínez',
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80'
        },
        publishedAt: '2025-03-15',
        category: 'Rescate',
        tags: ['rescate', 'emergencia', 'maquinaria']
    },
];

export default function BlogPostPage() {
    const { slug } = useParams<{ slug: string }>();
    const navigate = useNavigate();
    const [post, setPost] = useState<BlogPostType | null>(null);
    const [relatedPosts, setRelatedPosts] = useState<BlogPostType[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate API call
        const timer = setTimeout(() => {
            const currentPost = blogPosts.find(p => p.slug === slug);
            if (currentPost) {
                setPost(currentPost);
                // Get related posts (excluding current post)
                const related = blogPosts
                    .filter(p => p.id !== currentPost.id)
                    .filter(p => p.category === currentPost.category ||
                        p.tags.some(tag => currentPost.tags.includes(tag)))
                    .slice(0, 3);
                setRelatedPosts(related);
            }
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, [slug]);

    const formatDate = (dateString: string) => {
        return new Date(dateString + 'T00:00:00').toLocaleDateString('es-ES', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    if (isLoading) {
        return (
            <div className="py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="animate-pulse">
                        <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/4 mb-8"></div>
                        <div className="h-96 bg-gray-200 rounded mb-8"></div>
                        <div className="space-y-4">
                            <div className="h-4 bg-gray-200 rounded w-full"></div>
                            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                            <div className="h-4 bg-gray-200 rounded w-4/6"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    if (!post) {
        return (
            <div className="py-12">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">
                        Artículo no encontrado
                    </h1>
                    <Link
                        to="/blog"
                        className="text-red-600 hover:text-red-700 font-medium flex items-center justify-center"
                    >
                        <ArrowLeft className="mr-2 h-5 w-5" />
                        Volver al Blog
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="py-12">
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Navegación */}
                <button
                    onClick={() => navigate(-1)}
                    className="mb-8 flex items-center text-red-600 hover:text-red-700 transition-colors"
                >
                    <ArrowLeft className="mr-2 h-5 w-5" />
                    Volver
                </button>

                {/* Encabezado */}
                <header className="mb-8">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        {post.title}
                    </h1>

                    <div className="flex items-center justify-between mb-6">
                        <div className="flex items-center">
                            <img
                                src={post.author.avatar}
                                alt={post.author.name}
                                className="h-12 w-12 rounded-full object-cover mr-4"
                            />
                            <div>
                                <div className="font-medium text-gray-900">{post.author.name}</div>
                                <div className="flex items-center text-gray-600 text-sm">
                                    <Calendar className="h-4 w-4 mr-1" />
                                    {formatDate(post.publishedAt)}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Imagen destacada */}
                    <div className="relative h-96 rounded-lg overflow-hidden mb-8">
                        <img
                            src={post.featuredImage}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                    </div>
                </header>

                {/* Contenido */}
                <div
                    className="prose prose-lg max-w-none mb-12"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

                {/* Etiquetas */}
                <div className="flex flex-wrap gap-2 mb-12">
                    {post.tags.map((tag) => (
                        <span
                            key={tag}
                            className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                        >
                            #{tag}
                        </span>
                    ))}
                </div>

                {/* Posts Relacionados */}
                {relatedPosts.length > 0 && (
                    <section className="border-t pt-12">
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">
                            Artículos Relacionados
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {relatedPosts.map((relatedPost) => (
                                <Link
                                    key={relatedPost.id}
                                    to={`/blog/${relatedPost.slug}`}
                                    className="group"
                                >
                                    <div className="relative h-48 rounded-lg overflow-hidden mb-4">
                                        <img
                                            src={relatedPost.featuredImage}
                                            alt={relatedPost.title}
                                            className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-red-600 transition-colors">
                                        {relatedPost.title}
                                    </h3>
                                    <p className="text-gray-600 text-sm line-clamp-2">
                                        {relatedPost.excerpt}
                                    </p>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}
            </article>
        </div>
    );
}