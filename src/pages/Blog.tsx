import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import { BlogPost } from '../types';
import PostImage1 from "../assets/PostImage_1.jpg"

// Sample blog data (in a real app, this would come from an API)
const blogPosts: BlogPost[] = [
    {
        id: '1',
        title: 'Operaciones de Rescate: Envío de Cuadrillas a Estados de México',
        slug: 'operaciones-rescate-cuadrillas-mexico',
        excerpt: 'Conoce cómo enviamos cuadrillas de emergencia a distintos estados de México para brindar apoyo y rescatar maquinaria pesada en situaciones críticas.',
        content: 'Recientemente, nuestro equipo recibió una llamada de auxilio desde un proyecto en el norte de México, donde una excavadora se había volcado debido a condiciones de terreno inestables. De inmediato organizamos una cuadrilla especializada y nos trasladamos hasta el lugar para evaluar la situación y poner en marcha el plan de rescate. Gracias a la experiencia de nuestros técnicos y a la coordinación con el personal local, logramos enderezar la excavadora sin daños mayores y restablecer la operación en tiempo récord. Este tipo de intervenciones rápidas forman parte de nuestro compromiso de ofrecer asistencia y mantenimiento a la maquinaria pesada donde y cuando más se necesite.',
        featuredImage: PostImage1,
        author: {
            name: 'Carlos Martínez',
            avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80'
        },
        publishedAt: '2025-03-15',
        category: 'Rescate',
        tags: ['rescate', 'emergencia', 'maquinaria']
    },
    // {
    //     id: '2',
    //     title: 'Innovaciones Tecnológicas en Maquinaria Pesada 2024',
    //     slug: 'innovaciones-maquinaria-pesada-2024',
    //     excerpt: 'Las últimas innovaciones tecnológicas están transformando la industria de la maquinaria pesada. Conoce las tendencias más importantes.',
    //     content: '...',
    //     featuredImage: 'https://images.unsplash.com/photo-1599686916453-e08a14d1d3c6?auto=format&fit=crop&q=80',
    //     author: {
    //         name: 'Ana López',
    //         avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80'
    //     },
    //     publishedAt: '2024-03-10',
    //     category: 'Tecnología',
    //     tags: ['innovación', 'tecnología', 'tendencias']
    // },
    // {
    //     id: '3',
    //     title: 'Guía Completa: Diagnóstico de Problemas Hidráulicos',
    //     slug: 'guia-diagnostico-problemas-hidraulicos',
    //     excerpt: 'Aprende a identificar y diagnosticar problemas comunes en sistemas hidráulicos de maquinaria pesada.',
    //     content: '...',
    //     featuredImage: 'https://images.unsplash.com/photo-1581093458791-9d42e3c7e935?auto=format&fit=crop&q=80',
    //     author: {
    //         name: 'Miguel Sánchez',
    //         avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80'
    //     },
    //     publishedAt: '2024-03-05',
    //     category: 'Hidráulica',
    //     tags: ['hidráulica', 'diagnóstico', 'mantenimiento']
    // }
];

export default function Blog() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading state
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

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
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="animate-pulse">
                        <div className="h-8 bg-gray-200 rounded w-1/4 mb-8"></div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden">
                                    <div className="h-48 bg-gray-200"></div>
                                    <div className="p-6">
                                        <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
                                        <div className="h-4 bg-gray-200 rounded w-1/2 mb-2"></div>
                                        <div className="h-4 bg-gray-200 rounded w-full mb-4"></div>
                                        <div className="h-10 bg-gray-200 rounded w-1/3"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Noticias, guías y actualizaciones sobre mantenimiento de maquinaria pesada
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <article
                            key={post.id}
                            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                        >
                            <Link to={`/blog/${post.slug}`} className="block">
                                <div className="relative h-48 overflow-hidden">
                                    <img
                                        src={post.featuredImage}
                                        alt={post.title}
                                        className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                                    />
                                    <div className="absolute top-4 right-4">
                                        <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm">
                                            {post.category}
                                        </span>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center mb-4">
                                        <img
                                            src={post.author.avatar}
                                            alt={post.author.name}
                                            className="h-8 w-8 rounded-full object-cover mr-3"
                                        />
                                        <div className="text-sm text-gray-600">
                                            <span>{post.author.name}</span>
                                            <div className="flex items-center mt-1">
                                                <Calendar className="h-4 w-4 mr-1" />
                                                <span>{formatDate(post.publishedAt)}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <h2 className="text-xl font-semibold mb-3 text-gray-900 line-clamp-2">
                                        {post.title}
                                    </h2>
                                    <p className="text-gray-600 mb-4 line-clamp-3">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center text-red-600 font-medium hover:text-red-700 transition-colors">
                                        Leer más
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </div>
                                </div>
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}