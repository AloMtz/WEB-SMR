import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import WhatsAppButton from './components/common/WhatsAppButton';
import Inicio from './pages/Inicio';
import Servicios from './pages/Servicios';
import Nosotros from './pages/Nosotros';
import Proyectos from './pages/Proyectos';
import Testimonios from './pages/Testimonios';
import Contacto from './pages/Contacto';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <div className="pages-container">
            <Routes>
              <Route path="/" element={<Inicio />} />
              <Route 
                path="/servicios" 
                element={<div className="pt-20"><Servicios /></div>} 
              />
              <Route 
                path="/nosotros" 
                element={<div className="pt-20"><Nosotros /></div>} 
              />
              <Route 
                path="/proyectos" 
                element={<div className="pt-20"><Proyectos /></div>} 
              />
              <Route 
                path="/testimonios" 
                element={<div className="pt-20"><Testimonios /></div>} 
              />
              <Route 
                path="/contacto" 
                element={<div className="pt-20"><Contacto /></div>} 
              />
            </Routes>
          </div>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;