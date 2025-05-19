import { ArrowRight, Shield, Clock, PenToolIcon as Tool } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import GalleryImage16 from '../assets/Gallery_Image16.jpeg';
import GalleryImage17 from '../assets/Gallery_Image17.jpeg';
import GalleryImage18 from '../assets/Gallery_Image18.jpeg';
import GalleryImage19 from '../assets/Gallery_Image19.jpeg';
import GalleryImage20 from '../assets/Gallery_Image20.jpeg';
import Sol from '../assets/sol1.jpg';

export default function Inicio() {
  const images = [
    GalleryImage16,
    GalleryImage17,
    GalleryImage18,
    GalleryImage19,
    GalleryImage20,
    Sol
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadedImages, setLoadedImages] = useState<boolean[]>(Array(images.length).fill(false));
  const carouselRef = useRef<HTMLDivElement>(null);

  // Precargar imágenes individualmente y mostrar el carrusel tan pronto como la primera imagen esté lista
  useEffect(() => {
    const loadImage = (index: number) => {
      const img = new Image();
      img.src = images[index];
      img.crossOrigin = "anonymous"; // Evitar problemas CORS
      img.onload = () => {
        setLoadedImages(prev => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
        
        // Si es la primera imagen, permitir que se muestre el carrusel
        if (index === 0) {
          setImagesLoaded(true);
        }
      };
      img.onerror = () => {
        // Marcar como cargada incluso en error para no bloquear la interfaz
        setLoadedImages(prev => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
        
        if (index === 0) {
          setImagesLoaded(true);
        }
      };
    };

    // Cargar la primera imagen primero
    loadImage(0);
    
    // Luego cargar el resto de imágenes
    for (let i = 1; i < images.length; i++) {
      loadImage(i);
    }
  }, [images]);

  // Iniciar el carrusel solo cuando al menos la primera imagen esté cargada
  useEffect(() => {
    if (!imagesLoaded) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [imagesLoaded, images.length]);

  return (
    <div className="flex flex-col">
      {/* Hero Section - Siempre visible, con un estado de carga */}
      <section
        className="relative h-screen w-full overflow-hidden bg-gray-900"
      >
        {/* Mostrar un indicador de carga si ninguna imagen está cargada */}
        {!imagesLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        {/* Carrusel de imágenes - Visible incluso durante la carga, pero con opacidad reducida */}
        <div
          ref={carouselRef}
          className={`absolute inset-0 transition-opacity duration-500 ${imagesLoaded ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* Imagen actual siempre visible */}
          <div 
            className="absolute inset-0 transition-opacity duration-1000"
            style={{
              backgroundImage: `url(${images[currentImageIndex]})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60"></div>
          </div>

          {/* Precargar la siguiente imagen */}
          {images.map((image, index) => (
            index !== currentImageIndex && (
              <div 
                key={index}
                className="absolute inset-0 opacity-0"
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            )
          ))}
        </div>

        <div className="relative h-full w-full flex items-center z-10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
              Expertos en Mantenimiento de
              <span className="block text-red-500">Maquinaria Pesada</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl animate-fade-in animate-delay-100 text-gray-200">
              Soluciones profesionales y servicio técnico especializado para mantener su maquinaria funcionando de manera óptima.
            </p>
            <div className="animate-fade-in animate-delay-200">
              <Link
                to="/contacto"
                className="inline-flex items-center bg-red-600 text-white px-8 py-4 rounded-lg font-medium hover:bg-red-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Solicitar Servicio
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Indicadores de navegación */}
        <div className="absolute bottom-8 left-0 right-0 flex justify-center space-x-2 z-20">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentImageIndex ? 'bg-red-600 w-6' : 'bg-white/50 hover:bg-white/80'
              }`}
              onClick={() => setCurrentImageIndex(index)}
              aria-label={`Ver imagen ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Características */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="h-12 w-12 text-red-600 mb-4" />,
                title: 'Garantía de Calidad',
                description: 'Respaldamos nuestro trabajo con garantías sólidas y estándares de calidad certificados.'
              },
              {
                icon: <Clock className="h-12 w-12 text-red-600 mb-4" />,
                title: 'Servicio 24/7',
                description: 'Disponibles las 24 horas para atender emergencias y mantener su operación en marcha.'
              },
              {
                icon: <Tool className="h-12 w-12 text-red-600 mb-4" />,
                title: 'Técnicos Especializados',
                description: 'Equipo de profesionales certificados con amplia experiencia en el sector.'
              }
            ].map((feature, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center text-center p-6 card-hover animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {feature.icon}
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-red-600 to-red-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-8 text-white animate-fade-in">
            ¿Necesita un servicio de mantenimiento?
          </h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto animate-fade-in animate-delay-100">
            Contáctenos hoy mismo para recibir una evaluación gratuita de sus necesidades de mantenimiento.
          </p>
          <Link
            to="/contacto"
            className="inline-flex items-center bg-white text-red-700 px-8 py-4 rounded-lg font-medium hover:bg-red-50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-fade-in animate-delay-200"
          >
            Contactar Ahora
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}