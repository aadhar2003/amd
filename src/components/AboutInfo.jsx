import React from 'react';

const AboutInfo = () => {
    return (
        <div className="pt-24 md:pt-28">
          <div className="flex flex-col md:flex-row max-w-6xl mx-auto p-6 gap-8">
            <div className="flex-1">
              <div className="mb-6">
                <h2 className="text-blue-900 font-bold text-sm uppercase mb-1">ABOUT US</h2>
                <h1 className="text-3xl font-bold text-blue-900 mb-4">Aadarsh Colour Composites</h1>
                
                <p className="mb-4">
                  We <span className="font-semibold">Aadarsh Colour Composites</span> a trusted name in the plastic masterbatch &
                  Compound industry. We are backed by a strong foundation of over 20 years of
                  experience in the field. Our expertise and dedication drive us to deliver innovative
                  and reliable solutions tailored to meet the diverse needs of our clients.
                </p>
                
                <p className="mb-4">
                  At Aadarsh Colour Composites, we take pride in our state-of-the-art
                  manufacturing facility, equipped with cutting-edge technology and advanced
                  machinery. This enables us to produce high-quality masterbatches that ensure
                  superior performance and consistency in a variety of applications.
                </p>
                
                <p className="mb-4">
                  Customer satisfaction lies at the core of our operations. We are committed to
                  understanding our customers' unique requirements and providing them with
                  customized solutions that enhance the quality and aesthetics of their products.
                </p>
                
                <p className="mb-4">
                  With a focus on excellence, innovation, and sustainability, ACC Masterbatch
                  (Aadarsh Colour Composites) strives to be your preferred partner in achieving
                  color, consistency, and performance in every product.
                </p>
                
                <p className="mb-4 font-medium">
                  Join us in shaping a brighter and more colorful future!
                </p>
              </div>
              
              <div className="flex flex-col md:flex-row gap-16">
                <div>
                  <h2 className="text-blue-900 font-bold mb-4">OUR PRODUCT RANGE COMPRISES OF :-</h2>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="ml-2">High Performance PET Master Batches</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="ml-2">Color Master Batches</span>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="ml-2">Reinforced Polymer Compounds & Alloys</span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h2 className="text-blue-900 font-bold mb-4 mt-6 md:mt-0">OUR BRANDS :-</h2>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="ml-2">ColorMaxx</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="flex-1 md:flex-none md:w-2/5 flex items-center justify-center">
            <div className="relative w-full ">
            <img 
                src="/spectrometer.jpg" 
                alt="Color palette with measurement tool" 
                className="w-full rounded-lg shadow-md"
              />
          </div>
            </div>
          </div>
        </div>
      );
};

export default AboutInfo;