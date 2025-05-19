import { ArrowRight, Shield, Clock, PenTool as Tool } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect, useCallback } from 'react';

export default function Inicio() {
  const images = [
    '../assets/Gallery_Image16.jpeg',
    '/Gallery_Image17.jpeg',
    '/Gallery_Image18.jpeg',
    '/Gallery_Image19.jpeg',
    '/Gallery_Image20.jpeg',
    '/sol1.jpg'
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  // Optimizar carga de imágenes
  const preloadImages = useCallback(() => {
    const promises = images.map((src) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          resolve();
          // Limpiar memoria
          img.onload = null;
        };
        img.onerror = resolve;
      });
    });

    Promise.all(promises).then(() => {
      setImagesLoaded(true);
      if (isFirstLoad) {
        setIsFirstLoad(false);
      }
    });
  }, []);

  useEffect(() => {
    preloadImages();
  }, [preloadImages]);

  useEffect(() => {
    if (!imagesLoaded || isFirstLoad) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [imagesLoaded, isFirstLoad]);


  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      {imagesLoaded && (
      <section 
        className={`relative h-screen w-full overflow-hidden transition-opacity duration-1000 ${
          !imagesLoaded ? 'opacity-0' : 'opacity-100'
        }`}
        style={{
          backgroundImage: `url(${images[0]})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
  <div
    className="absolute top-0 left-0 w-full h-full flex transition-transform duration-1000 ease-in-out"
    style={{
      transform: `translateX(-${currentImageIndex * 100}%)`,
    }}
  >
    {images.map((image, index) => (
      <div
        key={index}
        className="w-full h-full flex-shrink-0"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundColor: '#000', // fallback
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60"></div>
      </div>
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
</section>
      )}

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