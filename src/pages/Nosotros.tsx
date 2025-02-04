import { Award, Users, Building2, Target } from 'lucide-react';

export default function Nosotros() {
  return (
    <div className="py-12">
      {/* Historia y Misión */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Sobre Nosotros</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Más de 20 años de experiencia brindando soluciones de mantenimiento y reparación de maquinaria pesada
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6">Nuestra Historia</h2>
            <p className="text-gray-600 mb-4">
              Fundada en 2003, SMR Heavy Maq nació con la visión de proporcionar servicios de mantenimiento de alta calidad para el sector de maquinaria pesada en España.
            </p>
            <p className="text-gray-600">
              A lo largo de los años, hemos crecido hasta convertirnos en un referente en el sector, manteniendo siempre nuestro compromiso con la excelencia y la satisfacción del cliente.
            </p>
          </div>
          <div className="relative h-96">
            <img
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80"
              alt="Instalaciones SMR Heavy Maq"
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Valores */}
        <div className="bg-gray-50 rounded-2xl p-8 mb-20">
          <h2 className="text-3xl font-bold text-center mb-12">Nuestros Valores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col items-center text-center">
              <Award className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Excelencia</h3>
              <p className="text-gray-600">Compromiso con la calidad en cada servicio que realizamos</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Users className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Trabajo en Equipo</h3>
              <p className="text-gray-600">Colaboración efectiva para lograr los mejores resultados</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Building2 className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Profesionalismo</h3>
              <p className="text-gray-600">Ética y responsabilidad en cada proyecto</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Target className="h-12 w-12 text-red-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Innovación</h3>
              <p className="text-gray-600">Búsqueda constante de mejores soluciones</p>
            </div>
          </div>
        </div>

        {/* Equipo */}
        <div>
          <h2 className="text-3xl font-bold text-center mb-12">Nuestro Equipo</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((member) => (
              <div key={member} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="relative h-64">
                  <img
                    src={`https://images.unsplash.com/photo-158109379${member}-9d42e3c7e935?auto=format&fit=crop&q=80`}
                    alt="Miembro del equipo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">Técnico Especializado</h3>
                  <p className="text-gray-600">
                    Profesional certificado con más de 10 años de experiencia en mantenimiento de maquinaria pesada.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}