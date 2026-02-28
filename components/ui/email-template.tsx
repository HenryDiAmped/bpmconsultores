import * as React from 'react';

// 1. Agregamos todos los campos nuevos a la interfaz
interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  department: string;
  industry: string;
  employees: string;
  role: string;
}

export function EmailTemplate({
  firstName,
  lastName,
  email,
  phone,
  company,
  department,
  industry,
  employees,
  role,
}: EmailTemplateProps) {
  return (
    <div style={styles.main}>
      <div style={styles.container}>
        {/* Encabezado Azul */}
        <div style={styles.header}>
          <h1 style={styles.headerText}>BPM Consultores</h1>
        </div>

        {/* Cuerpo del Correo (Enfocado en el Cliente) */}
        <div style={styles.content}>
          <p style={styles.greeting}>Hola, {firstName}:</p>
          <p style={styles.text}>
            ¡Gracias por contactar a <strong>BPM Consultores</strong>! Hemos recibido tu solicitud correctamente.
          </p>
          <p style={styles.text}>
            Nuestro equipo de especialistas en Inteligencia Artificial ya está revisando tu información y nos pondremos en contacto contigo al correo <strong>{email}</strong> o al teléfono <strong>{phone}</strong> en menos de 24 horas laborables para conversar sobre cómo podemos impulsar a <strong>{company}</strong>.
          </p>

          <p style={styles.text}>
            Aquí tienes un resumen de los datos que nos enviaste:
          </p>

          {/* Caja de Información (Resumen para el cliente) */}
          <div style={styles.infoBox}>
            <p style={styles.infoRow}><strong>Nombre completo:</strong> {firstName} {lastName}</p>
            <p style={styles.infoRow}><strong>Empresa:</strong> {company}</p>
            <p style={styles.infoRow}><strong>Industria:</strong> {industry}</p>
            <p style={styles.infoRow}><strong>Tamaño de la empresa:</strong> {employees}</p>
            <p style={styles.infoRow}><strong>Departamento y Cargo:</strong> {department} - {role}</p>
          </div>

          <p style={{ ...styles.text, marginTop: '24px' }}>
            ¡Hablamos pronto!<br />
            <strong>El equipo de BPM Consultores</strong>
          </p>
        </div>

        {/* Línea Divisoria */}
        <hr style={styles.hr} />

        {/* Pie de Página (Footer) */}
        <div style={styles.footer}>
          <p style={styles.footerText}>
            © {new Date().getFullYear()} BPM Consultores. Todos los derechos reservados.
          </p>
          <p style={styles.footerText}>
            BPM Consultores | Soluciones Estratégicas para Transformar tu Negocio con IA
          </p>
          <p style={styles.footerText}>
            Lima, Perú. Atención a toda Latinoamérica.
          </p>
        </div>
      </div>
    </div>
  );
}

// Los estilos se mantienen exactamente iguales para conservar tu diseño
const styles = {
  main: {
    backgroundColor: '#f3f4f6',
    padding: '40px 20px',
    fontFamily: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
  },
  container: {
    maxWidth: '600px',
    margin: '0 auto',
    backgroundColor: '#ffffff',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.05)',
  },
  header: {
    backgroundColor: '#0052cc',
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
    borderLeft: '4px solid #0052cc',
    margin: '0',
    whiteSpace: 'pre-wrap' as const,
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
    color: '#999999',
    margin: '0 0 6px',
  },
};