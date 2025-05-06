import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { GalleryItem } from '../types';

//! Gallery Images
import GalleryImg1 from '../assets/Gallery_Image1.jpeg';
import GalleryImg2 from '../assets/Gallery_Image2.jpeg';
import GalleryImg3 from '../assets/Gallery_Image3.jpeg';
import GalleryImg4 from '../assets/Gallery_Image4.jpeg';
import GalleryImg5 from '../assets/Gallery_Image5.jpeg';
import GalleryImg6 from '../assets/Gallery_Image6.jpeg';
import GalleryImg7 from '../assets/Gallery_Image7.jpeg';
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


//! Gallery Videos
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
        title: 'Reparación de orugas',
        size: 'large'
    },
    {
        id: '2',
        type: 'video',
        url: GalleryVideo1,
        title: 'Maquinaria en operación',
        size: 'wide' 
    },
    {
        id: '3',
        type: 'image',
        url: GalleryImg16,
        title: 'Montaje de eslabones',
        size: 'small' 
    },
    {
        id: '4',
        type: 'video',
        url: GalleryVideo2,
        title: 'Reparación especializada',
        size: 'tall' 
    },
    {
        id: '5',
        type: 'image',
        url: GalleryImg17,
        title: 'Motor en proceso de reparación',
        size: 'wide' 
    },
    {
        id: '6',
        type: 'image',
        url: GalleryImg18,
        title: 'Motor reconstruido',
        size: 'small' 
    },
    {
        id: '7',
        type: 'video',
        url: GalleryVideo3,
        title: 'Equipo de trabajo',
        size: 'small' 
    },
    {
        id: '8',
        type: 'image',
        url: GalleryImg19,
        title: 'Operación en cantera',
        size: 'large' 
    },
    {
        id: '9',
        type: 'image',
        url: GalleryImg20,
        title: 'Desmontaje de motor',
        size: 'small'
    },
    {
        id: '10',
        type: 'image',
        url: GalleryImg7,
        title: 'Mecanizado de piezas',
        size: 'small' 
    },
    {
        id: '11',
        type: 'image',
        url: GalleryImg10,
        title: 'Excavación con retroexcavadora',
        size: 'tall'
    },
    {
        id: '12',
        type: 'video',
        url: GalleryVideo4,
        title: 'Retroexcavadora en acción',
        size: 'large'
    },
    {
        id: '13',
        type: 'video',
        url: GalleryVideo5,
        title: 'Proceso de mantenimiento',
        size: 'small'
    },
    {
        id: '14',
        type: 'image',
        url: GalleryImg8,
        title: 'Vista panorámica de cantera',
        size: 'wide'
    },
    {
        id: '15',
        type: 'image',
        url: GalleryImg12,
        title: 'Modificación de bulldozer',
        size: 'tall'
    },
    {
        id: '16',
        type: 'image',
        url: GalleryImg14,
        title: 'Remolque de servicio',
        size: 'tall'
    },
    {
        id: '17',
        type: 'image',
        url: GalleryImg13,
        title: 'Extracción de material',
        size: 'large'
    },
    {
        id: '18',
        type: 'image',
        url: GalleryImg1,
        title: 'Equipo de Soldadura',
        size: 'large'
    },
    {
        id: '18',
        type: 'image',
        url: GalleryImg2,
        title: 'Equipo de Soldadura',
        size: 'large'
    },
    {
        id: '18',
        type: 'image',
        url: GalleryImg3,
        title: 'Equipo de Soldadura',
        size: 'large'
    },
    {
        id: '18',
        type: 'image',
        url: GalleryImg4,
        title: 'Equipo de Soldadura',
        size: 'large'
    },
    {
        id: '18',
        type: 'image',
        url: GalleryImg5,
        title: 'Equipo de Soldadura',
        size: 'large'
    },
    {
        id: '18',
        type: 'image',
        url: GalleryImg6,
        title: 'Equipo de Soldadura',
        size: 'large'
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
        const newIndex = direction === 'next'
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
        <div className="py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Galería</h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Explora nuestra colección de imágenes y videos de proyectos, instalaciones y equipo
                    </p>
                </div>

                {/* Collage Grid */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[300px]">
                    {galleryItems.map((item, index) => (
                        <div
                            key={item.id}
                            className={`cursor-pointer relative overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 ${getSizeClasses(item.size)}`}
                            onClick={() => openModal(item, index)}
                        >
                            {item.type === 'image' ? (
                                <img
                                    src={item.url}
                                    alt={item.title}
                                    className="w-full h-full object-cover cursor-pointer"
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
                    <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center">
                        <div className="relative w-full max-w-6xl mx-4">
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
                                aria-label="Cerrar"
                            >
                                <X className="h-8 w-8" />
                            </button>

                            <button
                                onClick={() => navigateModal('prev')}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10"
                                aria-label="Anterior"
                            >
                                <ChevronLeft className="h-8 w-8" />
                            </button>

                            <button
                                onClick={() => navigateModal('next')}
                                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 z-10"
                                aria-label="Siguiente"
                            >
                                <ChevronRight className="h-8 w-8" />
                            </button>

                            <div className="relative aspect-video">
                                {selectedItem.type === 'image' ? (
                                    <img
                                        src={selectedItem.url}
                                        alt={selectedItem.title}
                                        className="w-full h-full object-contain"
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