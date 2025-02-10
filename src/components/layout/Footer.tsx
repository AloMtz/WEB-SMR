import { Mail, MapPin, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';
import Logo from "../../assets/LogoSMR-WH.png"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img src={Logo} alt="SMR Heavy Maq" className="h-16 mb-4" />
            <p className="text-gray-400">
              Servicios profesionales de reparación y mantenimiento de maquinaria pesada en los que puede confiar.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/servicios" className="text-gray-400 hover:text-white">
                  Servicios
                </Link>
              </li>
              <li>
                <Link to="/nosotros" className="text-gray-400 hover:text-white">
                  Nosotros
                </Link>
              </li>
              <li>
                <Link to="/proyectos" className="text-gray-400 hover:text-white">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link to="/contacto" className="text-gray-400 hover:text-white">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Información de Contacto</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2" />
                <a href="tel:+34900123456" className="text-gray-400 hover:text-white">
                618 129 3830
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2" />
                <a href="mailto:simental.logmine@gmail.com" className="text-gray-400 hover:text-white">
                contacto@smrheavymaq.es
                </a>
              </li>
              <li className="flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                <span className="text-gray-400">
                  #100 Carretera Mazatlan 15 de Mayo Tapias
                  <br />
                  Calle Elena Centeno
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} SMR Heavy Maq. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}