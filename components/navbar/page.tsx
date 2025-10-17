import Link from "next/link";
import Image from "next/image";
import { userType } from "@/data/page";
import { menu } from "@/data/page";

const NavBar = () => {
  return (
    <div className="w-full">
      {/* Desktop screen */}
      <div className="w-full hidden lg:flex">
        <div className="w-full h-[90px] px-[40px] py-[20px] flex items-center justify-between bg-transparent">
          <div className="flex justify-start">
            <div className="flex items-center gap-x-8">
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

              <div className="flex items-center gap-x-6">
                {userType.map((item, id) => (
                  <Link
                    key={id}
                    href="#"
                    className="relative capitalize text-white text-[16px] font-[600] pb-1 transition-all duration-300 
                    after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2.5px] 
                    after:bg-primary-1 hover:after:w-full after:transition-all after:duration-300"
                  >
                    {item}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-end">
                <div className="flex items-center gap-x-8">
                    <div className="flex items-center gap-x-8">
                        {menu.map((item, id) => (
                        <Link
                            key={id}
                            href="#"
                            className={`relative capitalize text-white text-[16px] font-[600] pb-1 transition-all duration-300 
                            after:content-[''] after:absolute after:bottom-0 after:h-[2.5px] after:w-0 after:bg-[var(--color-primary-1)] 
                            hover:after:w-full after:transition-all after:duration-300 
                            ${item.gap 
                            ? "border-l border-white pl-6 after:left-[6px]"  // adds space between border & underline
                            : "after:left-0"}`}
                        >
                            {item.title}
                        </Link>
                        ))}


                        <Link
                            href=""
                            style={{ backgroundImage: "var(--color-primary-2)" }}
                            className="h-[50px] w-[211px] capitalize text-[16px] font-semibold text-white rounded-lg flex items-center justify-center text-center"
                        >
                            create free account
                        </Link>

                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
