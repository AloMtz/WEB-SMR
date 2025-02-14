import { useState, useEffect } from 'react';
import { Star } from 'lucide-react';
import { Testimonio } from '../types';
import Testiimg from '../assets/testi1.jpg';
import Testi from '../assets/testi2.jpg';

const testimonios: Testimonio[] = [
  {
    id: '1',
    nombre: 'Carlos Rodríguez',
    empresa: 'Constructora del Norte',
    comentario: 'Excelente servicio técnico. Resolvieron nuestros problemas de mantenimiento de manera rápida y profesional.',
    calificacion: 5,
    imagen: Testiimg
  },
  {
    id: '2',
    nombre: 'Ana Martínez',
    empresa: 'Industrias MTZ',
    comentario: 'El equipo de SMR Heavy Maq demostró un conocimiento excepcional en la reparación de nuestra maquinaria.',
    calificacion: 5,
    imagen: Testi
  },
  {
    id: '3',
    nombre: 'Miguel Sánchez',
    empresa: 'Obras y Servicios MS',
    comentario: 'Muy satisfechos con el servicio de mantenimiento preventivo. Han mejorado significativamente el rendimiento de nuestra flota.',
    calificacion: 4,
    imagen: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80'
  }
];

export default function Testimonios() {
  // Estado para las estadísticas animadas
  const [proyectosCompletados, setProyectosCompletados] = useState(0);
  const [clientesSatisfechos, setClientesSatisfechos] = useState(0);
  const [añosExperiencia, setAñosExperiencia] = useState(0);

  useEffect(() => {
    const proyectoInterval = setInterval(() => {
      setProyectosCompletados((prev) => (prev < 500 ? prev + 1 : 500));
    }, 10);

    const clientesInterval = setInterval(() => {
      setClientesSatisfechos((prev) => (prev < 98 ? prev + 1 : 98));
    }, 20);

    const añosInterval = setInterval(() => {
      setAñosExperiencia((prev) => (prev < 20 ? prev + 1 : 20));
    }, 50);

    return () => {
      clearInterval(proyectoInterval);
      clearInterval(clientesInterval);
      clearInterval(añosInterval);
    };
  }, []);

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Testimonios</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Lo que nuestros clientes dicen sobre nuestros servicios
          </p>
        </div>

        {/* Grid de Testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonios.map((testimonio) => (
            <div
              key={testimonio.id}
              className="bg-white rounded-lg shadow-lg p-6"
            >
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <img
                    src={testimonio.imagen}
                    alt={testimonio.nombre}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                </div>
                <div className="ml-4">
                  <h3 className="text-lg font-semibold">{testimonio.nombre}</h3>
                  <p className="text-gray-600">{testimonio.empresa}</p>
                </div>
              </div>
              <div className="mb-4">
                <p className="text-gray-600 italic">"{testimonio.comentario}"</p>
              </div>
              <div className="flex items-center">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className={`h-5 w-5 ${
                      index < testimonio.calificacion
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Sección de Estadísticas */}
        <div className="mt-20 bg-gray-50 rounded-2xl p-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">
                {proyectosCompletados}+
              </div>
              <div className="text-gray-600">Proyectos Completados</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">
                {clientesSatisfechos}%
              </div>
              <div className="text-gray-600">Clientes Satisfechos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">
                {añosExperiencia}+
              </div>
              <div className="text-gray-600">Años de Experiencia</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
