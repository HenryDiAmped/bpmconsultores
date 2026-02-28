export function LocationMap() {
  return (
    // La clase "group" es la que permite que el mapa reaccione cuando pasas el mouse por esta caja
    <div className="w-full h-full relative group bg-gray-100">
      <iframe
        // 🚨 IMPORTANTE: Reemplaza este 'src' por tu enlace real de Google Maps
 src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d31198.77819647611!2d-76.99523521287276!3d-12.190793283205187!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b9ca1955f84f%3A0x25862b51e1017cdb!2sUniversidad%20Privada%20del%20Norte%20(UPN)!5e0!3m2!1sen!2sus!4v1772261598585!5m2!1sen!2sus"        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Ubicación de BPM Consultores"
        // === AQUÍ ESTÁ LA MAGIA DE LOS FILTROS ===
        className="w-full h-full grayscale contrast-125 opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 ease-in-out"
      />
    </div>
  );
}