"use client";
import React from "react";
import { CircleCheck, Check, ChevronRight } from "lucide-react";

const MasterbatchProduct = ({
  title,
  imageUrl,
  description,
  applications,
  features,
  companyName = "AMD Masterbatch",
}) => {
  return (
    <div className="p-4 py-10 md:p-6">
      {/* Desktop: Title at the top */}
      <h2 className="text-2xl font-bold text-gray-800 mb-6">{title}</h2>
      
      {/* Main content container */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Left Column - Description and Applications */}
        <div className="w-full md:w-1/2 flex flex-col">
          {/* Description */}
          <div className="mb-6 text-gray-700">
            {Array.isArray(description) ? (
              description.map((paragraph, index) => (
                <p key={index} className="mb-2">
                  {paragraph}
                </p>
              ))
            ) : (
              <p>{description}</p>
            )}
          </div>
          
          {/* Applications - Below Description on Desktop */}
          {applications.length > 0 && (
            <div className="mb-6 text-gray-700">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                {applications.title || "Applications"}:
              </h3>
              <ul className="list-none">
                {Array.isArray(applications) ? (
                  applications.map((app, index) => (
                    <li key={index} className="flex items-start mb-2">
                      <Check
                        size={18}
                        className="text-blue-600 mt-1 mr-2 flex-shrink-0"
                      />
                      <span className="text-gray-700">{app}</span>
                    </li>
                  ))
                ) : (
                  <p>{applications}</p>
                )}
              </ul>
            </div>
          )}
        </div>
        
        {/* Right Column - Image and Features */}
        <div className="w-full md:w-1/2 flex flex-col">
          {/* Product Image */}
          <div className="mb-6 flex justify-center">
            <img
              src={imageUrl || "/api/placeholder/400/300"}
              alt={title}
              className="w-full h-64 md:h-80 object-cover rounded-lg"
            />
          </div>
          
          {/* Features - Below Image on Desktop */}
          {features.length > 0 && (
            <div className="mb-6 text-gray-700">
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                Features:
              </h3>
              <ul className="list-none">
                {Array.isArray(features) ? (
                  features.map((feature, index) => (
                    <li key={index} className="flex items-start mb-2">
                      <CircleCheck
                        size={18}
                        className="text-green-600 mt-1 mr-2 flex-shrink-0"
                      />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))
                ) : (
                  <p>{features}</p>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
      
    </div>
  );
};

export default MasterbatchProduct;