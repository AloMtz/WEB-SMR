import { useState } from 'react';
import { Proyecto } from '../types';
import Exca from '../assets/excavadora.jpg';
import trailaImg from '../assets/traila.jpg';
import DiseñoImg from '../assets/diseño.mp4';

const proyectos: Proyecto[] = [
  {
    id: '1',
    titulo: 'Rehabilitación de Excavadora CAT 320',
    descripcion: 'Restauración completa del sistema hidráulico y motor de excavadora para importante empresa constructora.',
    categoria: 'Rehabilitación',
    imagen: Exca
  },
  {
    id: '2',
    titulo: 'Fabricación de Tráila',
    descripcion: 'Desde el diseño hasta la entrega final, nos aseguramos de que cada detalle cumpliera con sus requerimientos de capacidad, resistencia y funcionalidad.',
    categoria: 'Mantenimiento',
    imagen: trailaImg
  },
  {
    id: '3',
    titulo: 'Actualización Sistema Hidráulico',
    descripcion: 'Modernización del sistema hidráulico en grúa industrial para mejorar eficiencia y rendimiento.',
    categoria: 'Modernización',
    imagen: DiseñoImg
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
            Descubra algunos de nuestros trabajos más destacados en mantenimiento y reparación de maquinaria pesada.
          </p>
        </div>

        {/* Filtros con un diseño más atractivo */}
        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap justify-center rounded-full overflow-visible gap-3">
            {categorias.map((categoria) => (
              <button
                key={categoria}
                onClick={() => setCategoriaActiva(categoria)}
                className={`
                  px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300 
                  ${categoriaActiva === categoria
                    ? 'bg-red-600 text-white shadow-lg transform scale-105'
                    : 'bg-gray-200 text-gray-700 hover:bg-red-200 hover:text-red-700'}
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
                {proyecto.imagen.endsWith('.mp4') ? (
                  <video
                    src={proyecto.imagen}
                    className="w-full h-full object-cover"
                    controls={false}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <img
                    src={proyecto.imagen}
                    alt={proyecto.titulo}
                    className="w-full h-full object-cover"
                  />
                )}
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
