import { MapPinned } from "lucide-react";
import CountdownTimer from "./count-down-timer";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section className="relative  bg-sports-dark overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          width={1320}
          height={600}
          src={"/bridgerton-1.jpg"}
          alt="Football player"
          className="w-full h-full object-cover"
        />
        {/* <div className="absolute inset-0 bg-gradient-to-r from-sports-dark via-sports-dark/80 to-transparent" /> */}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col justify-center ">
        <div className="max-w-2xl">
          <div className="text-sm text-white/70 font-medium">
            Transfer Portal
          </div>

          <h1 className="text-6xl md:text-8xl font-black text-white mb-9 leading-tight">
            ATHLETE
            <br />
            SHOWCASE
          </h1>

          {/* <p className="text-white/80 text-lg mb-8 max-w-md">
            Meet some of the top athletes embracing the Transfer Portal
          </p> */}
        </div>
        <div className="flex items-center justify-between mt-6">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-sm">
            <CountdownTimer className="" />
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-sm flex items-center space-x-2">
            <div className="flex items-center space-x-3 bg-lime-400 px-4 py-4 rounded-2xl">
              <MapPinned className="w-5 h-5 text-[hsl(220,30%,12%)]" />
            </div>
            <div className="flex flex-col">
              <span className="text-white font-medium text-lg">
                January 5th, 2025
              </span>
              <span className="text-white/80">
                Dragon Stadium in Southlake Texas
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
