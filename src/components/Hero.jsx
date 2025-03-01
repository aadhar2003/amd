import Link from 'next/link';

export default function Hero({ title, subtitle, ctaText, ctaLink }) {
  return (
    <div className="relative h-screen flex items-center">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-purple-900/80" />
        <div className="h-full w-full bg-[url('/images/masterbatches-hero.jpg')] bg-cover bg-center" />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in animation-delay-200">
            {subtitle}
          </p>
          <Link 
            href={ctaLink} 
            className="inline-block px-8 py-4 bg-white text-blue-900 rounded-full font-medium text-lg hover:bg-blue-50 transition-colors shadow-lg animate-fade-in animation-delay-400"
          >
            {ctaText}
            <span className="ml-2">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
