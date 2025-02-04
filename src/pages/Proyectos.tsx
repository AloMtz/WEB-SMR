import { useState } from 'react';
import { Proyecto } from '../types';

const proyectos: Proyecto[] = [
  {
    id: '1',
    titulo: 'Rehabilitación de Excavadora CAT 320',
    descripcion: 'Restauración completa del sistema hidráulico y motor de excavadora para importante empresa constructora.',
    categoria: 'Rehabilitación',
    imagen: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80'
  },
  {
    id: '2',
    titulo: 'Mantenimiento Preventivo Flota',
    descripcion: 'Programa de mantenimiento preventivo para flota de 20 máquinas de construcción.',
    categoria: 'Mantenimiento',
    imagen: 'https://images.unsplash.com/photo-1599686916453-e08a14d1d3c6?auto=format&fit=crop&q=80'
  },
  {
    id: '3',
    titulo: 'Actualización Sistema Hidráulico',
    descripcion: 'Modernización del sistema hidráulico en grúa industrial para mejorar eficiencia y rendimiento.',
    categoria: 'Modernización',
    imagen: 'https://images.unsplash.com/photo-1581093458791-9d42e3c7e935?auto=format&fit=crop&q=80'
  }
];

const categorias = ['Todos', 'Rehabilitación', 'Mantenimiento', 'Modernización'];

export default function Proyectos() {
  const [categoriaActiva, setCategoriaActiva] = useState('Todos');

  const proyectosFiltrados = categoriaActiva === 'Todos'
    ? proyectos
    : proyectos.filter(proyecto => proyecto.categoria === categoriaActiva);

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Proyectos</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubra algunos de nuestros trabajos más destacados en mantenimiento y reparación de maquinaria pesada
          </p>
        </div>

        {/* Filtros */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-md shadow-sm">
            {categorias.map((categoria) => (
              <button
                key={categoria}
                onClick={() => setCategoriaActiva(categoria)}
                className={`
                  px-4 py-2 text-sm font-medium
                  ${categoriaActiva === categoria
                    ? 'bg-red-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-50'
                  }
                  ${categoria === categorias[0] ? 'rounded-l-md' : ''}
                  ${categoria === categorias[categorias.length - 1] ? 'rounded-r-md' : ''}
                  border border-gray-200
                `}
              >
                {categoria}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {proyectosFiltrados.map((proyecto) => (
            <div
              key={proyecto.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64">
                <img
                  src={proyecto.imagen}
                  alt={proyecto.titulo}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm">
                    {proyecto.categoria}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{proyecto.titulo}</h3>
                <p className="text-gray-600">{proyecto.descripcion}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}