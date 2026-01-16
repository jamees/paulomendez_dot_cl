import Hero from '@/components/Hero'
import About from '@/components/About'
// import Gallery from '@/components/Gallery' // Temporalmente comentado
import Contact from '@/components/Contact'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      {/* <Gallery /> */} {/* Temporalmente comentado */}
      <Contact />
      <Footer />
    </main>
  )
}
