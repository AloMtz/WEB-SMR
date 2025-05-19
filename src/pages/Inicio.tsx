import { ArrowRight, Shield, Clock, PenToolIcon as Tool, ChevronLeft, ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import GalleryImage16 from "../assets/Gallery_Image16.jpeg"
import GalleryImage17 from "../assets/Gallery_Image17.jpeg"
import GalleryImage18 from "../assets/Gallery_Image18.jpeg"
import GalleryImage19 from "../assets/Gallery_Image19.jpeg"
import GalleryImage20 from "../assets/Gallery_Image20.jpeg"
import Sol from "../assets/sol1.jpg"

export default function Inicio() {
  const images = [GalleryImage16, GalleryImage17, GalleryImage18, GalleryImage19, GalleryImage20, Sol]

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [imagesLoaded, setImagesLoaded] = useState(false)
  const [direction, setDirection] = useState(1) // 1 = derecha, -1 = izquierda
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const preloadImage = (src: string) =>
      new Promise((resolve) => {
        const img = new Image()
        img.src = src
        img.onload = resolve
        img.onerror = resolve
      })

    const preloadAll = async () => {
      await preloadImage(images[0])
      setImagesLoaded(true)
      for (let i = 1; i < images.length; i++) preloadImage(images[i])
    }

    preloadAll()
  }, [])

  useEffect(() => {
    if (!imagesLoaded || isPaused) return

    const interval = setInterval(() => {
      setDirection(1)
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [imagesLoaded, isPaused, images.length])

  const goToNextSlide = () => {
    setDirection(1)
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const goToPrevSlide = () => {
    setDirection(-1)
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  // Variantes mejoradas para un efecto de deslizamiento más pronunciado
  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0.2, // Menos desvanecimiento para enfatizar el deslizamiento
      scale: 1.05, // Ligero efecto de escala para más dinamismo
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
        scale: { duration: 0.5 },
      },
    },
    exit: (direction: number) => ({
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0.2, // Menos desvanecimiento para enfatizar el deslizamiento
      scale: 0.95, // Ligero efecto de escala para más dinamismo
      transition: {
        x: { type: "spring", stiffness: 300, damping: 30 },
        opacity: { duration: 0.5 },
        scale: { duration: 0.5 },
      },
    }),
  }

  return (
    <div className="flex flex-col">
      <section
        className="relative h-screen w-full overflow-hidden bg-black"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {!imagesLoaded && (
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="w-16 h-16 border-4 border-red-600 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}

        {/* Contenedor con perspectiva para mejorar el efecto 3D */}
        <div className="absolute inset-0" style={{ perspective: "1000px" }}>
          <AnimatePresence custom={direction} initial={false} mode="popLayout">
            <motion.div
              key={currentImageIndex}
              className="absolute inset-0"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              style={{
                backgroundImage: `url(${images[currentImageIndex]})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                transformOrigin: direction > 0 ? "left center" : "right center",
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60"></div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Contenido encima */}
        <div className="relative h-full w-full flex items-center z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-white">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
              Expertos en Mantenimiento de
              <span className="block text-red-500">Maquinaria Pesada</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl animate-fade-in animate-delay-100 text-gray-200">
              Soluciones profesionales y servicio técnico especializado para mantener su maquinaria funcionando de
              manera óptima.
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

      {/* Características */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Shield className="h-12 w-12 text-red-600 mb-4" />,
                title: "Garantía de Calidad",
                description: "Respaldamos nuestro trabajo con garantías sólidas y estándares de calidad certificados.",
              },
              {
                icon: <Clock className="h-12 w-12 text-red-600 mb-4" />,
                title: "Servicio 24/7",
                description: "Disponibles las 24 horas para atender emergencias y mantener su operación en marcha.",
              },
              {
                icon: <Tool className="h-12 w-12 text-red-600 mb-4" />,
                title: "Técnicos Especializados",
                description: "Equipo de profesionales certificados con amplia experiencia en el sector.",
              },
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
  )
}