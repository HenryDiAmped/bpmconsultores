export function LocationMap() {
  return (
    <div className="w-full h-[200px] rounded-xl overflow-hidden border border-gray-200 shadow-sm bg-gray-50">
      <iframe
        // Cambia este enlace por el tuyo de Google Maps
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3901.92!2d-77.03!3d-12.05!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAzJzAwLjAiUyA3N8KwMDEnNDguMCJX!5e0!3m2!1ses!2spe!4v1620000000000!5m2!1ses!2spe"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen={false}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Ubicación de BPM Consultores"
      />
    </div>
  );
}