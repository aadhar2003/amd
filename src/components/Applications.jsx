import Link from 'next/link';

export default function Applications({ className }) {
  const applications = [
    {
      id: 'consumer',
      icon: 'shopping-bag',
      title: 'Consumer & Household',
      description: 'Applications in a wide range of your daily life and normal household items.',
      link: '/applications/consumer'
    },
    {
      id: 'packaging',
      icon: 'package',
      title: 'Packaging',
      description: 'We have Masterbatches to color all kinds of packaging materials in different segments of packaging industry.',
      link: '/applications/packaging'
    },
    {
      id: 'electrical',
      icon: 'zap',
      title: 'Electrical',
      description: 'We are an approved source of coloring masterbatches for leading Multinational Companies in cable industry.',
      link: '/applications/electrical'
    },
    {
      id: 'fibers',
      icon: 'layers',
      title: 'Fibers',
      description: 'Our products are extensively used in various fiber applications.',
      link: '/applications/fibers'
    },
    {
      id: 'appliances',
      icon: 'home',
      title: 'Appliances',
      description: 'We have a wide range of Color & Additives that color your home appliances from Washing Machine to Refrigerator & Mixers to Blenders.',
      link: '/applications/appliances'
    },
    {
      id: 'automotive',
      icon: 'truck',
      title: 'Automotive',
      description: 'We specialize in formulating and compounding all kinds of materials required in automotive and components.',
      link: '/applications/automotive'
    }
  ];

  // Function to render the proper icon
  const renderIcon = (iconName) => {
    switch(iconName) {
      case 'shopping-bag':
        return (
          <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
        );
      case 'package':
        return (
          <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10" />
          </svg>
        );
      case 'zap':
        return (
          <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      case 'layers':
        return (
          <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        );
      case 'home':
        return (
          <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
          </svg>
        );
      case 'truck':
        return (
          <svg className="w-10 h-10 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <section className={`py-16 px-4 bg-gray-50 ${className}`}>
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Applications & Markets</h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-12">
          Our premium masterbatches are utilized across diverse industries, delivering exceptional color and performance.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map(app => (
            <div 
              key={app.id} 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-start">
                <div className="flex-shrink-0 p-2 bg-blue-50 rounded-lg">
                  {renderIcon(app.icon)}
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-bold mb-2">{app.title}</h3>
                  <p className="text-gray-600 mb-4">{app.description}</p>
                  <Link href={app.link} className="text-blue-600 font-medium hover:text-blue-800 transition-colors inline-flex items-center">

                      Read More
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>

                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}