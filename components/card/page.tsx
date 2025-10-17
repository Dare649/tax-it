'use client';

import Image from "next/image";
import React from "react";

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl w-[402.67px] h-[388px] flex flex-col justify-center p-8 hover:shadow-md transition-all duration-300 hover:-translate-y-1">
      <div className="flex flex-col justify-center">
        <div className="w-12 h-12 mb-4 flex items-center justify-start">
          <Image
            src={icon}
            alt={title}
            width={48}
            height={48}
            className="object-contain"
          />
        </div>
        <h3 className="text-[22px] font-medium text-secodary-4 mb-2 text-left">{title}</h3>
        <p className="text-secondary-5 text-[18px] leading-relaxed text-left">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
