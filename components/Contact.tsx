'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Mail, Phone, MapPin, Instagram } from 'lucide-react'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="contact" className="py-24 md:py-32 bg-brand-cream" ref={ref}>
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-8 tracking-wide">
            Contacto
          </h2>
          <div className="w-20 h-px bg-brand-gold mx-auto mb-12" />
          <p className="font-sans text-lg text-brand-navy/80 mb-12">
            Para consultas sobre diseños personalizados o citas en el atelier
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="flex justify-center mb-4">
                <Mail className="text-brand-navy" size={32} />
              </div>
              <h3 className="font-sans text-sm tracking-wider uppercase mb-2 text-brand-navy/60">
                Email
              </h3>
              <a
                href="mailto:paulomendezatelier@gmail.com"
                className="font-sans text-lg hover:text-brand-gold transition-colors"
              >
                paulomendezatelier@gmail.com
              </a>
            </motion.div>


            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <div className="flex justify-center mb-4">
                <MapPin className="text-brand-navy" size={32} />
              </div>
              <h3 className="font-sans text-sm tracking-wider uppercase mb-2 text-brand-navy/60">
                Atelier
              </h3>
              <p className="font-sans text-lg">
                Santiago, Chile
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div className="flex justify-center mb-4">
                <Instagram className="text-brand-navy" size={32} />
              </div>
              <h3 className="font-sans text-sm tracking-wider uppercase mb-2 text-brand-navy/60">
                Instagram
              </h3>
              <a
                href="https://www.instagram.com/paulomendezofficial"
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-lg hover:text-brand-gold transition-colors"
              >
                @paulomendezofficial
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
