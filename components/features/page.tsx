'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface FeatureItem {
  title: string;
  description: string;
  mediaType: string;
  mediaSrc: string;
}

interface FeatureShowcaseProps {
  features: FeatureItem[];
}

const FeatureShowcase: React.FC<FeatureShowcaseProps> = ({ features }) => {
  const [selectedFeature, setSelectedFeature] = useState<FeatureItem>(features[0]);

  return (
    <div className="w-full flex flex-col lg:flex-row items-stretch justify-between gap-10 mt-10">
      {/* Left Section */}
      <div className="lg:w-[50%] w-full flex flex-col justify-between z-10">
        {features.map((item, index) => (
          <div
            key={index}
            onClick={() => setSelectedFeature(item)}
            className={`cursor-pointer border-l-4 p-5 transition-all duration-300 ${
              selectedFeature.title === item.title
                ? 'border-green-600 bg-green-50 text-black'
                : 'border-gray-200 text-gray-500 hover:bg-gray-50'
            }`}
          >
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-[15px] leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Right Section */}
      <div className="lg:w-[50%] w-full relative rounded-lg bg-gray-100 flex items-center justify-center overflow-hidden">
        <div className="relative flex items-center justify-center w-[85%] h-[85%] max-w-[500px] max-h-[400px]">
          <Image
            src={selectedFeature.mediaSrc}
            alt={selectedFeature.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            quality={100}
            priority
            className="object-contain opacity-95 pointer-events-none"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureShowcase;
