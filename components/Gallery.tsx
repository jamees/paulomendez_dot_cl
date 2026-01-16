'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { X } from 'lucide-react'

interface GalleryItem {
  id: number
  title: string
  category: string
  image: string
  collection: string
}

type Collection = 'ultimos' | 'primavera2026' | 'otono2025' | 'verano2025'

const collections: { id: Collection; name: string }[] = [
  { id: 'ultimos', name: 'Últimos' },
  { id: 'primavera2026', name: 'Primavera 2026' },
  { id: 'otono2025', name: 'Otoño 2025' },
  { id: 'verano2025', name: 'Verano 2025' },
]

const allGalleryItems: GalleryItem[] = [
  // Últimos (recientes)
  {
    id: 1,
    title: 'Elegancia Contemporánea',
    category: 'Alta Costura',
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800',
    collection: 'ultimos',
  },
  {
    id: 2,
    title: 'Vestido de Gala',
    category: 'Noche',
    image: 'https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=800',
    collection: 'ultimos',
  },
  {
    id: 3,
    title: 'Minimalismo Atemporal',
    category: 'Esencial',
    image: 'https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?q=80&w=800',
    collection: 'ultimos',
  },
  {
    id: 4,
    title: 'Sofisticación Urbana',
    category: 'Contemporáneo',
    image: 'https://images.unsplash.com/photo-1539008835657-9e8e9680c956?q=80&w=800',
    collection: 'ultimos',
  },
  {
    id: 5,
    title: 'Avant-Garde',
    category: 'Experimental',
    image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800',
    collection: 'ultimos',
  },
  {
    id: 6,
    title: 'Tradición Renovada',
    category: 'Clásico',
    image: 'https://images.unsplash.com/photo-1617922001439-4a2e6562f328?q=80&w=800',
    collection: 'ultimos',
  },

  // Primavera 2026
  {
    id: 7,
    title: 'Floración',
    category: 'Primavera',
    image: 'https://images.unsplash.com/photo-1594633313593-bab3825d0caf?q=80&w=800',
    collection: 'primavera2026',
  },
  {
    id: 8,
    title: 'Luminosidad',
    category: 'Primavera',
    image: 'https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=800',
    collection: 'primavera2026',
  },
  {
    id: 9,
    title: 'Frescura Primaveral',
    category: 'Primavera',
    image: 'https://images.unsplash.com/photo-1596783074918-c84cb06531ca?q=80&w=800',
    collection: 'primavera2026',
  },
  {
    id: 10,
    title: 'Renacimiento',
    category: 'Primavera',
    image: 'https://images.unsplash.com/photo-1544957992-20514f595d6f?q=80&w=800',
    collection: 'primavera2026',
  },
  {
    id: 11,
    title: 'Jardín Secreto',
    category: 'Primavera',
    image: 'https://images.unsplash.com/photo-1564584217132-2271feaeb3c5?q=80&w=800',
    collection: 'primavera2026',
  },
  {
    id: 12,
    title: 'Despertar',
    category: 'Primavera',
    image: 'https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?q=80&w=800',
    collection: 'primavera2026',
  },

  // Otoño 2025
  {
    id: 13,
    title: 'Tonos Tierra',
    category: 'Otoño',
    image: 'https://images.unsplash.com/photo-1591369822096-ffd140ec948f?q=80&w=800',
    collection: 'otono2025',
  },
  {
    id: 14,
    title: 'Calidez Otoñal',
    category: 'Otoño',
    image: 'https://images.unsplash.com/photo-1572804013427-4a6e7b2d9e88?q=80&w=800',
    collection: 'otono2025',
  },
  {
    id: 15,
    title: 'Melancolía Dorada',
    category: 'Otoño',
    image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=800',
    collection: 'otono2025',
  },
  {
    id: 16,
    title: 'Hojas Caídas',
    category: 'Otoño',
    image: 'https://images.unsplash.com/photo-1560243563-062bfc001d68?q=80&w=800',
    collection: 'otono2025',
  },
  {
    id: 17,
    title: 'Texturas Profundas',
    category: 'Otoño',
    image: 'https://images.unsplash.com/photo-1509319117838-40828aadd7d4?q=80&w=800',
    collection: 'otono2025',
  },
  {
    id: 18,
    title: 'Cosecha',
    category: 'Otoño',
    image: 'https://images.unsplash.com/photo-1529006557810-274b9b2fc783?q=80&w=800',
    collection: 'otono2025',
  },

  // Verano 2025
  {
    id: 19,
    title: 'Sol Radiante',
    category: 'Verano',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=800',
    collection: 'verano2025',
  },
  {
    id: 20,
    title: 'Brisa Marina',
    category: 'Verano',
    image: 'https://images.unsplash.com/photo-1571513800374-df1bbe650e56?q=80&w=800',
    collection: 'verano2025',
  },
  {
    id: 21,
    title: 'Ligereza Estival',
    category: 'Verano',
    image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=800',
    collection: 'verano2025',
  },
  {
    id: 22,
    title: 'Atardecer',
    category: 'Verano',
    image: 'https://images.unsplash.com/photo-1605763240000-b5b6af5a1f6e?q=80&w=800',
    collection: 'verano2025',
  },
  {
    id: 23,
    title: 'Horizonte Infinito',
    category: 'Verano',
    image: 'https://images.unsplash.com/photo-1606766889017-d9e52c9c3b42?q=80&w=800',
    collection: 'verano2025',
  },
  {
    id: 24,
    title: 'Oasis',
    category: 'Verano',
    image: 'https://images.unsplash.com/photo-1558769132-92e717d613cd?q=80&w=800',
    collection: 'verano2025',
  },
]

export default function Gallery() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null)
  const [activeCollection, setActiveCollection] = useState<Collection>('ultimos')

  const filteredItems = allGalleryItems.filter(
    (item) => item.collection === activeCollection
  )

  return (
    <>
      <section id="gallery" className="py-24 md:py-32 bg-white" ref={ref}>
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-light mb-8 tracking-wide">
              Galería
            </h2>
            <div className="w-20 h-px bg-brand-gold mx-auto mb-8" />

            {/* Filtros de Colecciones */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {collections.map((collection) => (
                <button
                  key={collection.id}
                  onClick={() => setActiveCollection(collection.id)}
                  className={`font-sans text-sm tracking-wider uppercase px-6 py-3 rounded-full transition-all duration-300 ${
                    activeCollection === collection.id
                      ? 'bg-brand-navy text-brand-cream'
                      : 'bg-brand-cream border border-brand-navy/20 text-brand-navy hover:border-brand-gold hover:text-brand-gold'
                  }`}
                >
                  {collection.name}
                </button>
              ))}
            </div>

            <p className="font-sans text-sm text-brand-navy/60">
              {filteredItems.length} {filteredItems.length === 1 ? 'diseño' : 'diseños'}
            </p>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeCollection}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-brand-navy/5">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-brand-navy/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white">
                      <h3 className="font-serif text-2xl mb-2">{item.title}</h3>
                      <p className="font-sans text-sm tracking-wider uppercase">
                        {item.category}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Modal */}
      {selectedItem && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-brand-navy/95 flex items-center justify-center p-6"
          onClick={() => setSelectedItem(null)}
        >
          <button
            className="absolute top-6 right-6 text-brand-cream hover:text-brand-gold transition-colors"
            onClick={() => setSelectedItem(null)}
          >
            <X size={32} />
          </button>
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedItem.image}
              alt={selectedItem.title}
              className="w-full h-auto max-h-[85vh] object-contain"
            />
            <div className="text-brand-cream text-center mt-6">
              <h3 className="font-serif text-3xl mb-2">{selectedItem.title}</h3>
              <p className="font-sans text-sm tracking-wider uppercase">
                {selectedItem.category}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  )
}
