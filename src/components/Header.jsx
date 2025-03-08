import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const products = [
  { id: 'pet', name: 'PET Masterbatches' },
  { id: 'color', name: 'Color Masterbatches' },
  { id: 'white', name: 'White Masterbatches' },
  { id: 'black', name: 'Black Masterbatches' },
  { id: 'special', name: 'Special Masterbatches' },
  { id: 'additive', name: 'Additive Masterbatches' }
];

const applications = [
  'Consumer & Households',
  'Packaging',
  'Electrical',
  'Fibres',
  'Appliances',
  'Automotive',
  'Agriculture & Horticulture'
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isApplicationsOpen, setIsApplicationsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="ColorTech Solutions Logo" width={180} height={50} />
          </Link>
          
          <div className="hidden md:flex items-center space-x-6 relative">
            <Link href="/about" className="hover:text-blue-600 transition-colors">About Us</Link>
            
            {/* Our Products Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setIsProductsOpen(!isProductsOpen)} 
                className="hover:text-blue-600 transition-colors focus:outline-none"
              >
                Our Products ▾
              </button>
              {isProductsOpen && (
                <div className="absolute left-0 mt-2 bg-white shadow-md rounded-md w-56">
                  {products.map((product) => (
                    <Link key={product.id} href={`${product.id}`} className="block px-4 py-2 hover:bg-gray-100">
                      {product.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            {/* Applications & Markets Dropdown */}
            <div className="relative">
              <button 
                onClick={() => setIsApplicationsOpen(!isApplicationsOpen)} 
                className="hover:text-blue-600 transition-colors focus:outline-none"
              >
                Applications & Markets ▾
              </button>
              {isApplicationsOpen && (
                <div className="absolute left-0 mt-2 bg-white shadow-md rounded-md w-56">
                  {applications.map((app, index) => (
                    <Link key={index} href={`#${app.toLowerCase().replace(/ & | /g, '-')}`} className="block px-4 py-2 hover:bg-gray-100">
                      {app}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors focus:outline-none"
            >
              Contact Us
            </button>
          </div>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg overflow-hidden">
            <nav className="flex flex-col">
              <Link href="/about" className="px-4 py-3 hover:bg-gray-100">About Us</Link>
              
              {/* Our Products Mobile Dropdown */}
              <div className="px-4 py-3">
                <button onClick={() => setIsProductsOpen(!isProductsOpen)} className="text-left w-full hover:bg-gray-100">
                  Our Products ▾
                </button>
                {isProductsOpen && (
                  <div className="ml-4">
                    {products.map((product) => (
                      <Link key={product.id} href={`#${product.id}`} className="block px-4 py-2 hover:bg-gray-100">
                        {product.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              {/* Applications & Markets Mobile Dropdown */}
              <div className="px-4 py-3">
                <button onClick={() => setIsApplicationsOpen(!isApplicationsOpen)} className="text-left w-full hover:bg-gray-100">
                  Applications & Markets ▾
                </button>
                {isApplicationsOpen && (
                  <div className="ml-4">
                    {applications.map((app, index) => (
                      <Link key={index} href={`#${app.toLowerCase().replace(/ & | /g, '-')}`} className="block px-4 py-2 hover:bg-gray-100">
                        {app}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              <Link href="#contact" className="px-4 py-3 bg-blue-50 text-blue-600 focus:outline-none">Contact Us</Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
