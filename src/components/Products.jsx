import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Products({ className }) {
  const [activeCategory, setActiveCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'pet', name: 'PET Masterbatches' },
    { id: 'color', name: 'Color Masterbatches' },
    { id: 'white', name: 'White Masterbatches' },
    { id: 'black', name: 'Black Masterbatches' },
    { id: 'special', name: 'Special Masterbatches' },
    { id: 'additive', name: 'Additive Masterbatches' }
  ];
  
  const products = [
    { 
      id: 1, 
      name: 'PET Masterbatches', 
      category: 'pet',
      image: '/pet-masterbatches.jpg',
      description: 'High-quality color solutions specifically designed for PET applications.'
    },
    { 
      id: 2, 
      name: 'Color Masterbatches', 
      category: 'color',
      image: '/color-masterbatches.jpg',
      description: 'Premium quality color solutions for various plastic applications.'
    },
    { 
      id: 3, 
      name: 'White Masterbatches', 
      category: 'white',
      image: '/white-masterbatches.jpg',
      description: 'High-performance white masterbatches for opacity and brightness.'
    },
    { 
      id: 4, 
      name: 'Black Masterbatches', 
      category: 'black',
      image: '/black-masterbatches.jpg',
      description: 'Deep black masterbatches for diverse applications.'
    },
    { 
      id: 5, 
      name: 'Special Masterbatches', 
      category: 'special',
      image: '/special-masterbatches.jpg',
      description: 'Custom formulations for special applications and requirements.'
    },
    { 
      id: 6, 
      name: 'Additive Masterbatches', 
      category: 'additive',
      image: '/additive-masterbatches.jpg',
      description: 'Performance-enhancing additives for plastic products.'
    }
  ];
  
  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section className={`py-16 px-4 ${className}`}>
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Products</h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Discover our comprehensive range of high-quality masterbatches designed to meet diverse industry requirements.
        </p>
        
        <div className="flex flex-wrap justify-center mb-10">
          {categories.map(category => (
            <button
              key={category.id}
              className={`px-4 py-2 m-1 rounded-full transition-colors ${
                activeCategory === category.id 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map(product => (
            <div 
              key={product.id} 
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <Link href={`/${product.category}`} className="text-blue-600 font-medium hover:text-blue-800 transition-colors inline-flex items-center">
                  
                    Read More
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}