import Image from "next/image";
import { socials } from "@/data/page";
import { products, about } from "@/data/page";

const Footer = () => {
  return (
    <div className='w-full px-5 lg:px-0'>
      <div className='lg:py-10 flex items-center flex-col lg:flex-row gap-y-5 lg:justify-between'>
        <div className=''>
            <div className="w-32 h-32">
                <Image
                    src="/tpay2_logo 1.png"
                    alt="TaxiT"
                    width={100}
                    height={100}
                    priority
                    quality={100}
                    className="w-full h-full object-contain"
                />
            </div>
            <div className="flex flex-col">
                <div className="flex items-center lg:flex-row gap-5 mb-5 lg:mt-10 sm:mt-5">
                    {
                        socials.map((item, id) => (
                            <img src={item} alt="TaxIT" key={id}/>
                        ))
                    }
                </div>
                <h2 className="text-[16px] font-normal text-secondary-6">2015-2022 Taxaide Technologies Limited. All rights reserved</h2>
            </div>
        </div>
        <div className="flex flex-row flex-wrap justify-between gap-10 lg:gap-x-20">
            {/* About Us */}
            <div className="flex flex-col gap-4 min-w-[150px]">
                <h2 className="font-semibold text-[16px] lg:text-[18px] text-secondary-7">
                About us
                </h2>
                {about.map((item, id) => (
                <p
                    key={id}
                    className="text-[14px] lg:text-[16px] font-medium text-secondary-6 hover:text-secondary-7 transition-colors cursor-pointer"
                >
                    {item}
                </p>
                ))}
            </div>

            {/* Products */}
            <div className="flex flex-col gap-4 min-w-[150px]">
                <h2 className="font-semibold text-[16px] lg:text-[18px] text-secondary-7">
                Products
                </h2>
                {products.map((item, id) => (
                <p
                    key={id}
                    className="text-[14px] lg:text-[16px] font-medium text-secondary-6 hover:text-secondary-7 transition-colors cursor-pointer"
                >
                    {item}
                </p>
                ))}
            </div>
        </div>

      </div>
    </div>
  )
}

export default Footer
