import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (sectionId) => {
    // Close the mobile menu when a section is clicked
    setIsMenuOpen(false);
    
    // Find the section element by ID
    const section = document.getElementById(sectionId);
    
    // Scroll to the section if it exists
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Image src="/logo.png" alt="ColorTech Solutions Logo" width={180} height={50} />
          </Link>
          
          <div className="hidden md:flex items-center space-x-1">
            <Link href="/about" className="px-4 py-2 hover:text-blue-600 transition-colors">About Us</Link>
            <button onClick={() => scrollToSection('products')} className="px-4 py-2 hover:text-blue-600 transition-colors">
              Our Products
            </button>            
            {/* <Link href="/applications" className="px-4 py-2 hover:text-blue-600 transition-colors">Applications</Link> */}
            {/* <Link href="/quality" className="px-4 py-2 hover:text-blue-600 transition-colors">Quality & Certification</Link> */}
           
            <button 
              onClick={() => scrollToSection('contact')} 
              className="ml-4 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors focus:outline-none"
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
              <button 
                onClick={() => scrollToSection('products')} 
                className="px-4 py-3 text-left hover:bg-gray-100 focus:outline-none"
              >
                Our Products
              </button>
              {/* <button 
                onClick={() => scrollToSection('applications')} 
                className="px-4 py-3 text-left hover:bg-gray-100 focus:outline-none"
              >
                Applications
              </button> */}
              {/* <button 
                onClick={() => scrollToSection('quality')} 
                className="px-4 py-3 text-left hover:bg-gray-100 focus:outline-none"
              >
                Quality & Certification
              </button> */}
              <button 
                onClick={() => scrollToSection('contact')} 
                className="px-4 py-3 text-left bg-blue-50 text-blue-600 focus:outline-none"
              >
                Contact Us
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
