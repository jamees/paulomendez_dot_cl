import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-brand-cream py-12">
      <div className="container mx-auto px-6 text-center">
        <div className="flex justify-center mb-4">
          <Image
            src="/logo.png"
            alt="Paulo Méndez Logo"
            width={60}
            height={60}
            className="opacity-90"
          />
        </div>
        <p className="font-sans text-sm tracking-wide text-brand-cream/70">
          © {new Date().getFullYear()} Paulo Méndez. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}
