import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  message: string;
}

export function EmailTemplate({ firstName, lastName, email, company, message }: EmailTemplateProps) {
  return (
    <div style={styles.main}>
      <div style={styles.container}>
        {/* Encabezado Azul */}
        <div style={styles.header}>
          <h1 style={styles.headerText}>BPM Consultores</h1>
        </div>

        {/* Cuerpo del Correo */}
        <div style={styles.content}>
          <p style={styles.greeting}>Hola, equipo:</p>
          <p style={styles.text}>
            Han recibido un nuevo mensaje desde el formulario de contacto. Aquí están los detalles:
          </p>

          <div style={styles.infoBox}>
            <p style={styles.infoRow}><strong>Nombre:</strong> {firstName} {lastName}</p>
            <p style={styles.infoRow}><strong>Email:</strong> {email}</p>
            <p style={styles.infoRow}><strong>Empresa:</strong> {company}</p>
          </div>

          <p style={styles.text}><strong>Mensaje del cliente:</strong></p>
          <p style={styles.messageBox}>{message}</p>
        </div>

        {/* Línea Divisoria */}
        <hr style={styles.hr} />

        {/* Pie de Página (Footer) */}
        <div style={styles.footer}>
          <p style={styles.footerText}>
            © 2026 BPM Consultores. Todos los derechos reservados.
          </p>
          <p style={styles.footerText}>
            BPM Consultores | Especialistas en crecimiento y expansión
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  main: {
    backgroundColor: '#f3f4f6', // Fondo gris claro exterior
    padding: '40px 20px',
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
  },
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    backgroundColor: '#ffffff', // Fondo blanco de la tarjeta
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
  },
  header: {
    backgroundColor: '#0052cc', // Azul de tu imagen
    padding: '30px 20px',
    textAlign: 'center' as const,
  },
  headerText: {
    color: '#ffffff',
    margin: 0,
    fontSize: '24px',
    fontWeight: 'bold',
  },
  content: {
    padding: '40px 30px',
  },
  greeting: {
    fontSize: '18px',
    color: '#333333',
    margin: '0 0 16px',
    fontWeight: 'bold',
  },
  text: {
    fontSize: '16px',
    color: '#555555',
    margin: '0 0 16px',
    lineHeight: '1.5',
  },
  infoBox: {
    backgroundColor: '#f9fafb',
    padding: '16px',
    borderRadius: '6px',
    margin: '0 0 24px',
    border: '1px solid #eaeaea',
  },
  infoRow: {
    fontSize: '15px',
    color: '#333333',
    margin: '0 0 8px',
  },
  messageBox: {
    fontSize: '15px',
    color: '#444444',
    backgroundColor: '#f9fafb',
    padding: '16px',
    borderRadius: '6px',
    borderLeft: '4px solid #0052cc', // Borde azul para destacar el mensaje
    margin: '0',
    whiteSpace: 'pre-wrap' as const, // Mantiene los saltos de línea del mensaje original
    fontStyle: 'italic',
  },
  hr: {
    borderColor: '#eaeaea',
    borderWidth: '1px',
    borderStyle: 'solid',
    margin: '0 30px',
  },
  footer: {
    padding: '20px 30px 30px',
    textAlign: 'center' as const,
  },
  footerText: {
    fontSize: '12px',
    color: '#999999', // Color gris para el texto de copyright
    margin: '0 0 6px',
  },
};