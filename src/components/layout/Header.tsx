import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { NavItem } from '../../types';
import Logo from '../../assets/logo.jpeg';
import LogoDark from '../../assets/LogoSMR.png';

const navegacion: NavItem[] = [
  { label: 'Inicio', href: '/' },
  { label: 'Servicios', href: '/servicios' },
  { label: 'Nosotros', href: '/nosotros' },
  { label: 'Proyectos', href: '/proyectos' },
  { label: 'Testimonios', href: '/testimonios' },
  { label: 'Galería', href: '/galeria' },
  { label: 'Contacto', href: '/contacto' },
];

export default function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      requestAnimationFrame(() => {
        const scrollPosition = window.scrollY;
        setIsScrolled(scrollPosition > 50);
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine if header should be transparent
  const shouldBeTransparent = isHome && !isScrolled && !menuAbierto;

  const headerClasses = `fixed w-full z-50 transition-all duration-150 ease-out ${shouldBeTransparent
      ? 'bg-transparent'
      : 'bg-white/95 backdrop-blur-sm shadow-lg'
    }`;

  const getLinkClasses = (href: string) => {
    const isActive = location.pathname === href;
    const baseClasses = `nav-link transition-colors duration-150 ease-out ${shouldBeTransparent ? 'text-white' : 'text-gray-700'
      }`;

    if (isActive) {
      return `${baseClasses} ${shouldBeTransparent ? 'text-red-400' : 'text-red-600'} font-semibold`;
    }
    return `${baseClasses} hover:text-red-600`;
  };

  const getMobileLinkClasses = (href: string) => {
    const isActive = location.pathname === href;
    return `block px-3 py-2 text-base font-medium transition-colors duration-150 ease-out animate-fade-in ${isActive ? 'text-red-600 font-semibold' : 'text-gray-700 hover:text-red-600'
      }`;
  };

  return (
    <header className={headerClasses}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <img
                src={LogoDark}
                alt="SMR Heavy Maq"
                className={`h-12 transition-all duration-150 ease-out ${shouldBeTransparent ? 'brightness-100' : 'brightness-100'
                  }`}
              />
            </Link>
          </div>

          {/* Navegación Desktop */}
          <nav className="hidden md:flex space-x-8">
            {navegacion.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`${getLinkClasses(item.href)} px-3 py-2 text-sm font-medium tracking-wide`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-4">
              <a
                href="tel:+34900123456"
                className={`${getLinkClasses('')} flex items-center btn-hover`}
              >
                <Phone className="h-5 w-5 mr-2" />
                <span className="text-sm">900 123 456</span>
              </a>
              <a
                href="mailto:contacto@smrheavymaq.es"
                className={`${getLinkClasses('')} flex items-center btn-hover`}
              >
                <Mail className="h-5 w-5 mr-2" />
                <span className="text-sm">contacto@smrheavymaq.es</span>
              </a>
            </div>
          </div>

          {/* Botón menú móvil */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuAbierto(!menuAbierto)}
              className={`${shouldBeTransparent ? 'text-white' : 'text-gray-700'
                } hover:text-red-600 transition-colors duration-150 ease-out`}
              aria-label={menuAbierto ? 'Cerrar menú' : 'Abrir menú'}
            >
              {menuAbierto ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      <div
        className={`md:hidden absolute w-full bg-white/95 backdrop-blur-sm shadow-lg transition-all duration-150 ease-out ${menuAbierto
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navegacion.map((item, index) => (
            <Link
              key={item.href}
              to={item.href}
              className={getMobileLinkClasses(item.href)}
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => setMenuAbierto(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}