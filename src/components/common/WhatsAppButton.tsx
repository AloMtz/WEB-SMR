import { MessageCircle } from 'lucide-react';

export default function WhatsAppButton() {
  const phoneNumber = "526181846362"; // Reemplaza con tu número en formato internacional
  const message = encodeURIComponent("Hola, estoy interesado en conocer más sobre sus servicios. ¿Podría brindarme información detallada? Quedo atento. Gracias."); // Mensaje preescrito

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      className="fixed bottom-6 right-6 bg-red-600 text-white p-4 rounded-full shadow-lg hover:bg-red-700 transition-all duration-300 transform hover:scale-110 z-50"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  );
}
