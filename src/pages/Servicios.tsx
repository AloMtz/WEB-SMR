import { Wrench, Truck, Settings, PenTool as Tool, HardHat, Gauge } from 'lucide-react';
import { Servicio } from '../types';

const servicios: Servicio[] = [
  {
    id: '1',
    titulo: 'Mantenimiento Preventivo',
    descripcion: 'Programas personalizados de mantenimiento para prevenir averías y optimizar el rendimiento de su maquinaria.',
    icono: 'wrench',
    imagen: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80'
  },
  {
    id: '2',
    titulo: 'Reparación de Emergencia',
    descripcion: 'Servicio de respuesta rápida 24/7 para minimizar el tiempo de inactividad de su equipo.',
    icono: 'truck',
    imagen: 'https://images.unsplash.com/photo-1599686916453-e08a14d1d3c6?auto=format&fit=crop&q=80'
  },
  {
    id: '3',
    titulo: 'Diagnóstico Especializado',
    descripcion: 'Análisis detallado y diagnóstico preciso utilizando tecnología de última generación.',
    icono: 'settings',
    imagen: 'https://images.unsplash.com/photo-1581093458791-9d42e3c7e935?auto=format&fit=crop&q=80'
  }
];

const IconComponent = (iconName: string) => {
  switch (iconName) {
    case 'wrench':
      return <Wrench className="h-8 w-8" />;
    case 'truck':
      return <Truck className="h-8 w-8" />;
    case 'settings':
      return <Settings className="h-8 w-8" />;
    default:
      return <Tool className="h-8 w-8" />;
  }
};

export default function Servicios() {
  return (
    <div className="py-12">
      {/* Encabezado */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ofrecemos soluciones integrales para el mantenimiento y reparación de maquinaria pesada
          </p>
        </div>

        {/* Grid de Servicios */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicios.map((servicio) => (
            <div
              key={servicio.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <img
                  src={servicio.imagen}
                  alt={servicio.titulo}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-red-100 rounded-lg text-red-600">
                    {IconComponent(servicio.icono)}
                  </div>
                  <h3 className="ml-3 text-xl font-semibold text-gray-900">
                    {servicio.titulo}
                  </h3>
                </div>
                <p className="text-gray-600">{servicio.descripcion}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Sección de Especialidades */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-12">Áreas de Especialización</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex items-start p-6 bg-gray-50 rounded-lg">
              <HardHat className="h-8 w-8 text-red-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Maquinaria de Construcción</h3>
                <p className="text-gray-600">
                  Especialistas en excavadoras, cargadoras, retroexcavadoras y toda la gama de equipos de construcción.
                </p>
              </div>
            </div>
            <div className="flex items-start p-6 bg-gray-50 rounded-lg">
              <Gauge className="h-8 w-8 text-red-600 mr-4 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold mb-2">Equipos Industriales</h3>
                <p className="text-gray-600">
                  Mantenimiento de equipos de producción, sistemas hidráulicos y maquinaria industrial especializada.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}