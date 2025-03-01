// components/MissionVisionValues.jsx
import React from 'react';

const MissionVisionValues = () => {
  return (
    <div className="container mx-auto px-4 py-16 max-w-6xl">
      <div className="text-center mb-12 mt-[50px]">
        <div className="inline-block bg-purple-100 text-purple-600 px-4 py-1 rounded-full text-sm font-medium mb-4">
          OUR PURPOSE
        </div>
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Mission, Vision, and Values</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Guided by clear principles, we strive to create a positive impact through our work.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
        {/* Mission Card */}
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600">
            To deliver innovative, high-quality plastic products that meet our
            customers' needs while minimizing environmental impact through
            sustainable practices, advanced technology, and exceptional
            service.
          </p>
        </div>

        {/* Vision Card */}
        <div className="bg-white p-8 rounded-lg shadow-sm">
          <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.5" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h2>
          <p className="text-gray-600">
            To be the global leader in sustainable plastic manufacturing,
            recognized for our innovation, quality, environmental stewardship,
            and positive impact on communities and industries worldwide.
          </p>
        </div>
      </div>

      {/* Values Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Quality */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="bg-purple-100 w-10 h-10 rounded-lg flex items-center justify-center mb-5">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-3">Quality</h3>
          <p className="text-gray-600 text-sm">
            We are committed to delivering products of the highest quality,
            exceeding industry standards and customer expectations.
          </p>
        </div>

        {/* Sustainability */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="bg-purple-100 w-10 h-10 rounded-lg flex items-center justify-center mb-5">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h.5A2.5 2.5 0 0020 5.5v-1.5" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-3">Sustainability</h3>
          <p className="text-gray-600 text-sm">
            Environmental responsibility is at our core. We strive to minimize
            waste and maximize eco-friendly practices.
          </p>
        </div>

        {/* Innovation */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="bg-purple-100 w-10 h-10 rounded-lg flex items-center justify-center mb-5">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-3">Innovation</h3>
          <p className="text-gray-600 text-sm">
            We continuously evolve our processes and products, embracing cutting-edge
            technology to stay ahead of industry trends.
          </p>
        </div>

        {/* Integrity */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          <div className="bg-purple-100 w-10 h-10 rounded-lg flex items-center justify-center mb-5">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-3">Integrity</h3>
          <p className="text-gray-600 text-sm">
            Honest business practices and transparent communication build
            the foundation of our relationships with clients and partners.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionVisionValues;