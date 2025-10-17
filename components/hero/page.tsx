"use client";

import NavBar from "../navbar/page";
import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative w-screen lg:min-h-screen h-[45vh] bg-black text-white flex flex-col overflow-hidden">
      <NavBar />

      {/* Hero Content */}
      <div className="flex flex-col lg:flex-row items-center justify-between flex-1 py-16 lg:py-24">
        {/* Left Section */}
        <div className="w-full lg:w-1/2 px-6 lg:px-20 space-y-6 text-center lg:text-left">
          <h2 className="text-[36px] lg:text-[54px] font-semibold leading-tight">
            Secure & seamless <br className="hidden lg:block" />
            online transactions
          </h2>
          <p className="text-gray-300 text-[16px] lg:text-[18px]">
            Providing you with the best online payment experience
          </p>

          <Link
            href=""
            className="inline-flex items-center justify-center bg-gradient-to-b from-[#3AB54A] to-[#0D8A1F] h-[50px] w-[220px] rounded-md font-semibold text-white hover:opacity-90 transition"
          >
            Create free account
          </Link>
        </div>

        {/* Right Section - Hidden on small screens */}
        <div className="hidden lg:flex relative w-1/2 h-full items-center justify-center">
          <div className="relative w-[600px] h-[600px]">
            {/* Large Center Circle */}
            <div className="absolute z-20 w-[600px] h-[600px] rounded-full overflow-hidden border-2 border-transparent">
              <Image
                src="/Ellipse 3.png"
                alt="Main"
                fill
                className="object-cover"
              />
            </div>

            {/* Top-left Circle */}
            <div className="absolute -top-8 -left-80 z-10 w-[400px] h-[400px] rounded-full overflow-hidden border-4 border-transparent">
              <Image
                src="/Ellipse 4.png"
                alt="Top Left"
                fill
                className="object-cover"
              />
            </div>

            {/* Bottom-right Circle */}
            <div className="absolute -bottom-52 z-50 w-[400px] h-[400px] rounded-full overflow-hidden border-4 border-transparent">
              <Image
                src="/Ellipse 5.png"
                alt="Bottom Right"
                fill
                className="object-cover"
              />
            </div>

            {/* Decorative Circles */}
            <div className="absolute -top-3 -left-[1px] w-[90px] h-[90px] rounded-full bg-gradient-to-b from-[#C4AF74] to-[#8C783D] z-50"></div>
            <div className="absolute z-50 top-[80px] right-[-80px] w-[150px] h-[150px] rounded-full border-4 border-[#3AB54A]"></div>
            <div className="absolute -bottom-[50px] -left-[150px] w-[300px] h-[300px] rounded-full bg-[#0D8A1F]/20 border border-[#3AB54A]/40"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
