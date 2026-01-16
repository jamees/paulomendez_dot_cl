'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24 md:py-32 bg-brand-cream" ref={ref}>
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-light mb-8 tracking-wide">
            Sobre Mí
          </h2>
          <div className="w-20 h-px bg-brand-gold mx-auto mb-12" />
          <p className="font-sans text-lg md:text-xl text-brand-navy/80 leading-relaxed mb-6">
            Con más de una década de experiencia en el mundo de la alta costura,
            cada creación es una manifestación de elegancia atemporal y
            artesanía excepcional.
          </p>
          <p className="font-sans text-lg md:text-xl text-brand-navy/80 leading-relaxed">
            Mis diseños fusionan la tradición con la innovación, creando piezas
            únicas que celebran la individualidad y la sofisticación de cada
            cliente.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
