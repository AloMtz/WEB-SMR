import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contacto() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Contacto</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Estamos aquí para ayudarle. Contáctenos para cualquier consulta o servicio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formulario de Contacto */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Envíenos un mensaje</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                  required
                />
              </div>
              <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-red-500 focus:border-red-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-red-600 text-white px-6 py-3 rounded-md font-medium hover:bg-red-700 transition-colors"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>

          {/* Información de Contacto */}
          <div>
            <div className="bg-gray-50 rounded-lg p-8 mb-8">
              <h2 className="text-2xl font-semibold mb-6">Información de Contacto</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-red-600 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Teléfono</h3>
                    <p className="text-gray-600">618 129 3830</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-red-600 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Correo Electrónico</h3>
                    <p className="text-gray-600">contacto@smrheavymaq.es</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-red-600 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Dirección</h3>
                    <p className="text-gray-600">
                      #100 Carretera Mazatlán 15 de Mayo Tapias,
                      <br />
                      Calle Elena Centeno
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-red-600 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium">Horario de Atención</h3>
                    <p className="text-gray-600">
                      Lunes a Viernes: 8:00 - 20:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mapa de Google Maps */}
            <div className="bg-gray-200 rounded-lg overflow-hidden">
              <iframe
                className="w-full h-64"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3645.0594552144707!2d-104.7121209!3d23.9936775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x869bc62813178497%3A0xbbc3b34709d988cd!2sCalle%20Elena%20Centeno%2C%2034103%20Durango%2C%20Dgo.!5e0!3m2!1ses!2smx!4v1739155506902!5m2!1ses!2smx"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
