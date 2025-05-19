import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight, X, ArrowRight } from 'lucide-react';
import { Servicio } from '../types';
import soldaduraImg from '../assets/equiposolda.jpeg';
import trailaImg from '../assets/fabri.jpeg';
import Fabri from '../assets/diagnostico.jpeg';
import Maqui from '../assets/manti.jpeg';
import DiseñoImg from '../assets/diseño.mp4';
import DiaImg from '../assets/diag.mp4';

const servicios: Servicio[] = [
  {
    id: '1',
    titulo: 'Mantenimiento Preventivo',
    descripcion: 'Programas personalizados de mantenimiento para prevenir averías y optimizar el rendimiento de su maquinaria.',
    descripcionLarga: `Nuestro servicio de mantenimiento preventivo está diseñado para maximizar la vida útil de su maquinaria y prevenir costosas reparaciones de emergencia. El programa incluye:

    • Inspecciones periódicas programadas
    • Análisis de aceite y fluidos
    • Ajustes y calibraciones
    • Reemplazo de componentes desgastados
    • Documentación detallada de mantenimiento
    • Recomendaciones para optimización`,
    icono: 'wrench',
    imagen: Maqui,
    caracteristicas: [
      'Inspecciones regulares',
      'Análisis de componentes',
      'Lubricación programada',
      'Reportes detallados'
    ]
  },
  {
    id: '2',
    titulo: 'Reparación de Emergencia',
    descripcion: 'Servicio de respuesta rápida 24/7 para minimizar el tiempo de inactividad de su equipo.',
    descripcionLarga: `Entendemos que el tiempo de inactividad es costoso. Nuestro servicio de emergencia 24/7 garantiza una respuesta rápida y eficiente cuando más lo necesita:

    • Respuesta inmediata en campo
    • Diagnóstico rápido y preciso
    • Reparaciones de emergencia
    • Soluciones temporales cuando sea necesario
    • Seguimiento post-reparación`,
    icono: 'truck',
    imagen: Fabri,
    caracteristicas: [
      'Disponibilidad 24/7',
      'Respuesta rápida',
      'Reparación in situ',
      'Soporte técnico inmediato'
    ]
  },
  {
    id: '3',
    titulo: 'Diagnóstico Especializado',
    descripcion: 'Análisis detallado y diagnóstico preciso utilizando tecnología de última generación.',
    descripcionLarga: `Utilizamos tecnología de punta y métodos avanzados para proporcionar diagnósticos precisos:

    • Análisis computarizado
    • Pruebas de presión y rendimiento
    • Inspección con cámara térmica
    • Análisis de vibraciones
    • Evaluación de sistemas electrónicos
    • Recomendaciones detalladas`,
    icono: 'settings',
    imagen: DiaImg,
    caracteristicas: [
      'Diagnóstico computarizado',
      'Análisis de sistemas',
      'Evaluación completa',
      'Reporte técnico detallado'
    ]
  },
  {
    id: '4',
    titulo: 'Diseño y Fabricación',
    descripcion: 'Fabricamos piezas a medida para cubrir las necesidades específicas de su maquinaria.',
    descripcionLarga: `Nuestro servicio de diseño y fabricación ofrece soluciones personalizadas para sus necesidades específicas:

    • Diseño CAD/CAM
    • Fabricación de precisión
    • Modificaciones especiales
    • Mejoras de rendimiento
    • Pruebas de calidad
    • Documentación técnica`,
    icono: 'pen-tool',
    imagen: DiseñoImg,
    caracteristicas: [
      'Diseño personalizado',
      'Fabricación precisa',
      'Control de calidad',
      'Documentación técnica'
    ]
  },
  {
    id: '5',
    titulo: 'Soldadura Especializada',
    descripcion: 'Servicios de soldadura de alta calidad para asegurar la integridad de las estructuras.',
    descripcionLarga: `Nuestros servicios de soldadura especializada incluyen:

    • Soldadura MIG/TIG/Arco
    • Reparación estructural
    • Refuerzo de componentes
    • Modificaciones de diseño
    • Certificación de calidad
    • Inspección post-soldadura`,
    icono: 'hard-hat',
    imagen: soldaduraImg,
    caracteristicas: [
      'Soldadura certificada',
      'Reparación estructural',
      'Control de calidad',
      'Garantía de trabajo'
    ]
  },
  {
    id: '6',
    titulo: 'Fabricación de Trailas',
    descripcion: 'Fabricamos trailas resistentes y de alta calidad, adaptadas a sus necesidades específicas.',
    descripcionLarga: `Fabricación personalizada de trailas para el transporte seguro de maquinaria pesada:

    • Diseño personalizado
    • Materiales de alta calidad
    • Sistemas de seguridad
    • Capacidades personalizadas
    • Certificación DOT
    • Garantía extendida`,
    icono: 'gauge',
    imagen: trailaImg,
    caracteristicas: [
      'Diseño personalizado',
      'Alta resistencia',
      'Sistemas de seguridad',
      'Garantía completa'
    ]
  }
];

export default function Servicios() {
  const [selectedService, setSelectedService] = useState<Servicio | null>(null);

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Nuestros Servicios</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ofrecemos soluciones integrales para el mantenimiento y reparación de maquinaria pesada.
          </p>
        </motion.div>

        {/* Grid de Servicios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicios.map((servicio, index) => (
            <motion.div
              key={servicio.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.2 }
              }}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer"
              onClick={() => setSelectedService(servicio)}
            >
              <div className="relative h-64">
                {servicio.imagen.endsWith('.mp4') ? (
                  <video
                    src={servicio.imagen}
                    className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                    controls={false}
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <img
                    src={servicio.imagen}
                    alt={servicio.titulo}
                    className="w-full h-full object-cover transform transition-transform duration-300 hover:scale-105"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{servicio.titulo}</h3>
                <p className="text-gray-600 mb-4">{servicio.descripcion}</p>
                <motion.div 
                  className="flex items-center text-red-600 font-medium group"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <span className="group-hover:text-red-700 transition-colors">Explorar servicio</span>
                  <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/75 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedService(null)}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                transition={{ type: "spring", duration: 0.3 }}
                className="relative bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <div className="h-64 relative">
                    {selectedService.imagen.endsWith('.mp4') ? (
                      <video
                        className="w-full h-full object-cover"
                        controls
                        autoPlay
                        loop
                        muted
                      >
                        <source src={selectedService.imagen} type="video/mp4" />
                      </video>
                    ) : (
                      <img
                        src={selectedService.imagen}
                        alt={selectedService.titulo}
                        className="w-full h-full object-cover"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <button
                      onClick={() => setSelectedService(null)}
                      className="absolute top-4 right-4 text-white hover:text-gray-200 transition-colors"
                    >
                      <X className="h-6 w-6" />
                    </button>
                  </div>

                  <div className="p-6">
                    <h2 className="text-3xl font-bold mb-4">{selectedService.titulo}</h2>
                    <div className="prose max-w-none">
                      <p className="text-gray-600 whitespace-pre-line">
                        {selectedService.descripcionLarga}
                      </p>
                    </div>

                    <div className="mt-8">
                      <h3 className="text-xl font-semibold mb-4">Características principales</h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {selectedService.caracteristicas.map((caracteristica, index) => (
                          <div key={index} className="flex items-center space-x-2">
                            <ChevronRight className="h-5 w-5 text-red-600" />
                            <span>{caracteristica}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-8 flex justify-end space-x-4">
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setSelectedService(null)}
                        className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                      >
                        Cerrar
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => window.location.href = '/contacto'}
                        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
                      >
                        Solicitar Servicio
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}