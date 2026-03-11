'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, ChevronDown, ArrowRight } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    empresa: '',
    cargo: '',
    tamano: '',
    telefono: ''
  });

  const [error, setError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (error) setError(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validar que todos los campos estén llenos
    const isComplete = Object.values(formData).every(value => value.trim() !== '');
    
    if (!isComplete) {
      setError(true);
      return;
    }

    setIsSubmitting(true);
    
    // Simulación de envío
    setTimeout(() => {
      setIsSubmitting(false);
      alert('Datos enviados correctamente (Integración pendiente).');
      setFormData({ nombre: '', correo: '', empresa: '', cargo: '', tamano: '', telefono: '' });
    }, 1500);
  };

  // Clases CSS reutilizables para mantener el diseño "Petite" y elegante
  const inputClass = "w-full h-10 px-3 bg-slate-50 border border-gray-200 focus:border-[#002EC3] focus:ring-1 focus:ring-[#002EC3] outline-none transition-all rounded-sm text-sm text-gray-900 placeholder:text-gray-400";
  const labelClass = "block text-[10px] md:text-[11px] font-bold text-gray-700 uppercase tracking-widest mb-1.5";

  return (
    <section className="w-full bg-gradient-to-r from-slate-950 via-slate-900 to-[#002EC3] py-20 lg:py-28 relative overflow-hidden border-t border-white/5">
      
      {/* Patrón de fondo muy sutil para dar textura corporativa */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      
      <div className="mx-auto px-6 lg:px-8 max-w-[1320px] relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          
          {/* COLUMNA IZQUIERDA: Textos */}
          <div className="w-full lg:w-1/2">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6"
            >
              Cuéntanos tus desafíos, <br />
              <span className="text-blue-300">nosotros trazamos la ruta.</span>
            </motion.h1>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-base md:text-lg text-blue-100/80 font-light leading-relaxed max-w-lg"
            >
              Agenda una evaluación preliminar sin compromiso como primer paso para transformar tu organización con nuestros expertos.
            </motion.h2>
          </div>

          {/* COLUMNA DERECHA: Formulario (Diseño Compacto) */}
          <div className="w-full lg:w-1/2 flex justify-end">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-full max-w-[440px] bg-white p-7 md:p-9 rounded-sm shadow-2xl relative"
            >
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  
                  {/* Nombre */}
                  <div className="sm:col-span-2">
                    <label htmlFor="nombre" className={labelClass}>Nombre completo *</label>
                    <input type="text" id="nombre" name="nombre" value={formData.nombre} onChange={handleChange} className={inputClass} placeholder="Ej. Juan Pérez" />
                  </div>

                  {/* Correo */}
                  <div className="sm:col-span-2">
                    <label htmlFor="correo" className={labelClass}>Correo corporativo *</label>
                    <input type="email" id="correo" name="correo" value={formData.correo} onChange={handleChange} className={inputClass} placeholder="juan@tuempresa.com" />
                  </div>

                  {/* Empresa */}
                  <div>
                    <label htmlFor="empresa" className={labelClass}>Empresa *</label>
                    <input type="text" id="empresa" name="empresa" value={formData.empresa} onChange={handleChange} className={inputClass} placeholder="Tu empresa" />
                  </div>

                  {/* Teléfono */}
                  <div>
                    <label htmlFor="telefono" className={labelClass}>Tel/WhatsApp *</label>
                    <input type="tel" id="telefono" name="telefono" value={formData.telefono} onChange={handleChange} className={inputClass} placeholder="+51 999 999 999" />
                  </div>

                  {/* Cargo */}
                  <div>
                    <label htmlFor="cargo" className={labelClass}>Cargo / Rol *</label>
                    <div className="relative">
                      <select id="cargo" name="cargo" value={formData.cargo} onChange={handleChange} className={`${inputClass} appearance-none cursor-pointer pr-8 text-gray-600`}>
                        <option value="" disabled>Seleccionar</option>
                        <option value="Director / Gerente">Director / Gerente</option>
                        <option value="HR Manager">HR Manager</option>
                        <option value="Operaciones">Operaciones</option>
                        <option value="Transformación / Procesos">Transformación / Procesos</option>
                        <option value="Otro">Otro</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Tamaño */}
                  <div>
                    <label htmlFor="tamano" className={labelClass}>Tamaño *</label>
                    <div className="relative">
                      <select id="tamano" name="tamano" value={formData.tamano} onChange={handleChange} className={`${inputClass} appearance-none cursor-pointer pr-8 text-gray-600`}>
                        <option value="" disabled>Seleccionar</option>
                        <option value="50 - 100">50 - 100 colabs.</option>
                        <option value="100 - 200">100 - 200 colabs.</option>
                        <option value="201 - 500">201 - 500 colabs.</option>
                        <option value="500+">500+ colabs.</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                </div>

                {/* Mensaje de Error Animado */}
                {error && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }} 
                    animate={{ opacity: 1, height: 'auto' }} 
                    className="bg-red-50 text-red-600 p-3 flex items-start gap-2.5 rounded-sm border border-red-100 overflow-hidden"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                    <p className="text-xs font-medium leading-relaxed">Por favor, completa todos los campos obligatorios para poder comenzar.</p>
                  </motion.div>
                )}

                {/* Botón */}
                <div className="pt-2">
                  <button 
                    type="submit" 
                    disabled={isSubmitting} 
                    className="w-full h-12 bg-gray-900 hover:bg-[#002EC3] text-white text-sm font-bold tracking-wide uppercase rounded-none transition-colors duration-300 flex items-center justify-center gap-2 group"
                  >
                    {isSubmitting ? 'Enviando...' : 'Comenzar'}
                    {!isSubmitting && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                  </button>
                  <p className="text-center text-[10px] text-gray-500 mt-3 font-medium tracking-wide">
                    Te responderemos en un plazo máximo de 24 horas.
                  </p>
                </div>

              </form>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}