import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
            <h3 className="text-xl font-bold mb-4">About Us</h3>
            <p className="text-gray-400 mb-4">
              ColorTech Solutions is a leading manufacturer of a wide range of masterbatches and color solutions for the plastic industry.
            </p>
            <Link href="/about" className="text-blue-400 hover:text-blue-300 transition-colors">
              Learn More
            </Link>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white transition-colors">Products</Link>
              </li>
              <li>
                <Link href="/applications" className="text-gray-400 hover:text-white transition-colors">Applications</Link>
              </li>
              <li>
                <Link href="/quality" className="text-gray-400 hover:text-white transition-colors">Quality Control</Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Our Products</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/products/pet" className="text-gray-400 hover:text-white transition-colors">PET Masterbatches</Link>
              </li>
              <li>
                <Link href="/products/color" className="text-gray-400 hover:text-white transition-colors">Color Masterbatches</Link>
              </li>
              <li>
                <Link href="/products/white" className="text-gray-400 hover:text-white transition-colors">White Masterbatches</Link>
              </li>
              <li>
                <Link href="/products/black" className="text-gray-400 hover:text-white transition-colors">Black Masterbatches</Link>
              </li>
              <li>
                <Link href="/products/additives" className="text-gray-400 hover:text-white transition-colors">Additive Masterbatches</Link>
              </li>
              <li>
                <Link href="/products/special" className="text-gray-400 hover:text-white transition-colors">Special Effect Masterbatches</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-400">
                  62, Lite IPPT Zoned, Sector-8, Noida, Rashuli, Mathura, 281001, India
                </span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="text-gray-400">+91-9557667788</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-blue-400 mr-3 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="text-gray-400">info@colortechsolutions.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <hr className="border-gray-800 my-8" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">&copy; {new Date().getFullYear()} ColorTech Solutions. All rights reserved.</p>
          
        </div>
      </div>
    </footer>
  );
}