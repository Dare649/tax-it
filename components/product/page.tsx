'use client';

import FeatureCard from "../card/page";
import { payment, feature } from "@/data/page";
import FeatureShowcase from "../features/page";
import Image from "next/image";
import Link from "next/link";

const Products = () => {
  return (
    <div className="w-full">
      {/* Header Section */}
      <h2 className="text-secondary-3 font-semibold text-[44px] text-center">
        Payments tools designed for you
      </h2>
      <p className="text-secondary-3 text-[18px] text-center leading-relaxed tracking-wider max-w-2xl mx-auto mt-4">
        Explore payment features that provide you with every possible solution
      </p>

      {/* Payment Cards Section */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 px-3 lg:px-0 items-stretch mt-10 lg:mt-16">
        {payment.map((item, id) => (
          <FeatureCard
            key={id}
            icon={item.icon}
            title={item.title}
            description={item.text}
          />
        ))}
      </div>

      {/* Feature Showcase */}
      <div className="w-full mt-20 lg:mt-28">
        <FeatureShowcase features={feature} />
      </div>

      {/* “Transact on the go” Section */}
      <div className="w-full flex flex-col lg:flex-row items-center mt-24 lg:mt-32 h-auto lg:h-[80vh] gap-10 lg:gap-0">
        {/* Left Image Section */}
        <div className="relative bg-secondary-2 rounded-lg w-full lg:w-1/2 h-[350px] lg:h-full flex items-end justify-center overflow-hidden">
          <Image
            src="/Google Pixel 5.png"
            alt="TaxIT"
            quality={100}
            priority
            width={400}
            height={400}
            className="w-[80%] max-w-[350px] object-contain"
          />
        </div>

        {/* Right Content Section */}
        <div className="w-full lg:w-1/2 h-full flex flex-col justify-center items-start px-6 lg:px-12">
          <h2 className="text-[32px] lg:text-[36px] font-semibold text-secondary-3 mb-4">
            Transact on the go
          </h2>
          <p className="text-secondary-3 text-[16px] lg:text-[18px] mb-10 font-medium leading-relaxed tracking-wider max-w-md">
            Stay on top of your business with our easy-to-use app.
          </p>
          <Link
            href=""
            className="h-[50px] w-[211px] capitalize text-[16px] font-semibold text-white rounded-lg flex items-center justify-center text-center bg-gradient-to-b from-[#3AB54A] to-[#0D8A1F]"
          >
            Get Started
          </Link>

          <div className="flex items-center gap-4 pt-10">
            <div className="w-[145px] h-[42px]">
              <Image
                src="/googleplay.png"
                alt="Get it on Google Play"
                width={145}
                height={42}
                priority
                quality={100}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="w-[145px] h-[42px]">
              <Image
                src="/appstore.png"
                alt="Download on the App Store"
                width={145}
                height={42}
                priority
                quality={100}
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* “Send Funds / Buy Utilities” Section */}
      <div className="w-full h-auto lg:h-[522px] bg-primary-1 flex flex-col lg:flex-row items-center justify-between mt-24 lg:mt-32 rounded-lg overflow-hidden">
        {/* Left Content */}
        <div className="flex flex-col justify-center w-full lg:w-[30%] py-10 lg:py-0">
          <div className="text-white flex flex-col justify-center px-6 lg:ml-20">
            <h2 className="font-semibold text-[28px] lg:text-[36px]">Send funds</h2>
            <h2 className="font-medium text-[28px] lg:text-[36px]">Remit taxes</h2>
            <h2 className="font-normal text-[28px] lg:text-[36px]">Buy utilities</h2>
            <button className="bg-white text-primary-1 w-[160px] lg:w-[190px] h-[45px] lg:h-[50px] rounded-lg font-semibold text-[14px] lg:text-[16px] mt-5">
              Get Started
            </button>
          </div>
        </div>

        {/* Right Image Section - hidden on small screens */}
        <div className="hidden lg:flex relative w-full lg:w-[70%] h-full items-center justify-center">
          <Image
            src="/image 38.png"
            alt="App Preview"
            priority
            quality={100}
            fill
            className="object-cover object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
