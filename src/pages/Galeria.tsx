import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '../types';

// Importaciones de imágenes
import GalleryImg1 from '../assets/Gallery_Image1.jpeg';
import GalleryImg2 from '../assets/Gallery_Image2.jpeg';
import GalleryImg3 from '../assets/Gallery_Image3.jpeg';
import GalleryImg4 from '../assets/Gallery_Image4.jpeg';
import GalleryImg5 from '../assets/Gallery_Image5.jpeg';
import GalleryImg6 from '../assets/Gallery_Image6.jpeg';
import GalleryImg8 from '../assets/Gallery_Image8.jpeg';
import GalleryImg10 from '../assets/Gallery_Image10.jpeg';
import GalleryImg12 from '../assets/Gallery_Image12.jpeg';
import GalleryImg13 from '../assets/Gallery_Image13.jpeg';
import GalleryImg14 from '../assets/Gallery_Image14.jpeg';
import GalleryImg15 from '../assets/Gallery_Image15.jpeg';
import GalleryImg16 from '../assets/Gallery_Image16.jpeg';
import GalleryImg17 from '../assets/Gallery_Image17.jpeg';
import GalleryImg18 from '../assets/Gallery_Image18.jpeg';
import GalleryImg19 from '../assets/Gallery_Image19.jpeg';
import GalleryImg20 from '../assets/Gallery_Image20.jpeg';
import GalleryImg21 from '../assets/Gallery_Image21.jpeg';
import GalleryImg22 from '../assets/Gallery_Image22.jpeg';
import GalleryImg23 from '../assets/Gallery_Image23.jpeg';

// Importaciones de videos
import GalleryVideo1 from '../assets/Gallery_Video1.mp4';
import GalleryVideo2 from '../assets/Gallery_Video2.mp4';
import GalleryVideo3 from '../assets/Gallery_Video3.mp4';
import GalleryVideo4 from '../assets/Gallery_Video4.mp4';
import GalleryVideo5 from '../assets/Gallery_Video5.mp4';

const galleryItems: GalleryItem[] = [
  {
    id: '1',
    type: 'image',
    url: GalleryImg15,
    title: 'Torno de Precisión',
    size: 'large',
  },
  {
    id: '2',
    type: 'video',
    url: GalleryVideo1,
    title: 'Maquinaria Pesada en Operación',
    size: 'wide',
  },
  {
    id: '3',
    type: 'image',
    url: GalleryImg16,
    title: 'Equipo Hidráulico en Acción',
    size: 'small',
  },
  {
    id: '4',
    type: 'video',
    url: GalleryVideo2,
    title: 'Reparación de Componentes',
    size: 'tall',
  },
  {
    id: '5',
    type: 'image',
    url: GalleryImg17,
    title: 'Reparación de Motor en Progreso',
    size: 'wide',
  },
  {
    id: '6',
    type: 'image',
    url: GalleryImg18,
    title: 'Motor Reconstruido a Nuevo',
    size: 'small',
  },
  {
    id: '7',
    type: 'video',
    url: GalleryVideo3,
    title: 'Equipo Técnico en Acción',
    size: 'small',
  },
  {
    id: '8',
    type: 'image',
    url: GalleryImg19,
    title: 'Operación en Cantera Pesada',
    size: 'large',
  },
  {
    id: '9',
    type: 'image',
    url: GalleryImg20,
    title: 'Desmontaje de Motor Industrial',
    size: 'small',
  },
  {
    id: '10',
    type: 'image',
    url: GalleryImg10,
    title: 'Retroexcavadora en Excavación',
    size: 'tall',
  },
  {
    id: '11',
    type: 'video',
    url: GalleryVideo4,
    title: 'Retroexcavadora en Trabajo Pesado',
    size: 'large',
  },
  {
    id: '12',
    type: 'video',
    url: GalleryVideo5,
    title: 'Mantenimiento Preventivo en Campo',
    size: 'small',
  },
  {
    id: '13',
    type: 'image',
    url: GalleryImg8,
    title: 'Vista Panorámica de Cantera',
    size: 'wide',
  },
  {
    id: '14',
    type: 'image',
    url: GalleryImg13,
    title: 'Extracción de Material Pesado',
    size: 'large',
  },
  {
    id: '15',
    type: 'image',
    url: GalleryImg21,
    title: 'Soldadura de Componentes Metálicos',
    size: 'large',
  },
  {
    id: '16',
    type: 'image',
    url: GalleryImg22,
    title: 'Soldadura de Precisión en Estructura',
    size: 'large',
  },
  {
    id: '17',
    type: 'image',
    url: GalleryImg23,
    title: 'Soldadura en Maquinaria Pesada',
    size: 'large',
  },
  {
    id: '18',
    type: 'image',
    url: GalleryImg4,
    title: 'Soldadura MIG en Taller',
    size: 'large',
  },
  {
    id: '19',
    type: 'image',
    url: GalleryImg5,
    title: 'Soldadura TIG de Alta Calidad',
    size: 'large',
  },
  {
    id: '20',
    type: 'image',
    url: GalleryImg6,
    title: 'Soldadura de Componentes Especiales',
    size: 'large',
  },
  {
    id: '21',
    type: 'image',
    url: GalleryImg1,
    title: 'Mantenimiento de Maquinaria en Taller',
    size: 'small',
  },
  {
    id: '22',
    type: 'image',
    url: GalleryImg2,
    title: 'Inspección de Equipo Hidráulico',
    size: 'small',
  },
  {
    id: '23',
    type: 'image',
    url: GalleryImg3,
    title: 'Reparación de Sistema Eléctrico',
    size: 'small',
  },
  {
    id: '24',
    type: 'image',
    url: GalleryImg12,
    title: 'Maquinaria en Operación Nocturna',
    size: 'wide',
  },
  {
    id: '25',
    type: 'image',
    url: GalleryImg14,
    title: 'Equipo de Transporte en Cantera',
    size: 'tall',
  },
];

export default function Galeria() {
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const openModal = (item: GalleryItem, index: number) => {
    setSelectedItem(item);
    setCurrentIndex(index);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedItem(null);
    document.body.style.overflow = 'unset';
  };

  const navigateModal = (direction: 'prev' | 'next') => {
    const newIndex =
      direction === 'next'
        ? (currentIndex + 1) % galleryItems.length
        : (currentIndex - 1 + galleryItems.length) % galleryItems.length;
    setCurrentIndex(newIndex);
    setSelectedItem(galleryItems[newIndex]);
  };

  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'large':
        return 'md:col-span-2 md:row-span-2';
      case 'wide':
        return 'md:col-span-2';
      case 'tall':
        return 'md:row-span-2';
      default:
        return '';
    }
  };

  return (
    <div className="py-12 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Galería</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explora nuestra colección de imágenes y videos de proyectos, instalaciones y equipos.
          </p>
        </div>

        {/* Collage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]">
          {galleryItems.map((item, index) => (
            <div
              key={item.id}
              className={`relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 ${getSizeClasses(item.size)}`}
              onClick={() => openModal(item, index)}
            >
              {item.type === 'image' ? (
                <img
                  src={item.url}
                  alt={item.title}
                  className="w-full h-full object-cover cursor-pointer"
                  loading="lazy"
                />
              ) : (
                <video
                  src={item.url}
                  className="w-full h-full object-cover cursor-pointer"
                  autoPlay
                  loop
                  muted
                  playsInline
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className="absolute bottom-4 left-4 text-white font-medium">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedItem && (
          <div className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="relative w-full max-w-6xl mx-4">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
                aria-label="Cerrar modal"
              >
                <X className="h-8 w-8" />
              </button>

              <button
                onClick={() => navigateModal('prev')}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10"
                aria-label="Elemento anterior"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>

              <button
                onClick={() => navigateModal('next')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10"
                aria-label="Elemento siguiente"
              >
                <ChevronRight className="h-8 w-8" />
              </button>

              <div className="relative aspect-video bg-black">
                {selectedItem.type === 'image' ? (
                  <img
                    src={selectedItem.url}
                    alt={selectedItem.title}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                ) : (
                  <video
                    src={selectedItem.url}
                    className="w-full h-full object-contain"
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls
                  />
                )}
              </div>
              <div className="text-center mt-4">
                <h3 className="text-white text-xl font-semibold">{selectedItem.title}</h3>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}