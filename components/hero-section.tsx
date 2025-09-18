import { cn } from "@/lib/utils";
import { ArrowRight, MapPin, TicketIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CountdownTimer from "./count-down-timer";
import { buttonVariants } from "./ui/button";

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

          <h1 className="text-5xl md:text-8xl font-black text-white mb-9 leading-tight uppercase">
            Spectacle 
            <br />
            Bridgerton
          </h1>

          {/* <p className="text-white/80 text-lg mb-8 max-w-md">
            Meet some of the top athletes embracing the Transfer Portal
          </p> */}
        </div>
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between mt-6 gap-3">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-3 md:p-6 max-w-xl">
           <div className="flex items-center space-x-1 mb-1.5">
              {/* <span className="text-white font-medium text-lg">
                January 5th, 2025
              </span> */}
              <MapPin className="text-white size-4"/>
              <span className="text-white/80 font-semibold">
               Rue de Panaméricaine, Pétionville 6141
              </span>
            </div>
            <CountdownTimer className="" />
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 max-w-sm flex items-center space-x-2">
            <Link href={'/tickets'} className={cn(buttonVariants({ size: 'lg'}), 'bg-lime-400 rounded-2xl p-8 hover:bg-lime-500')} >
              <TicketIcon className="size-6 text-[hsl(220,30%,12%)]" />
              <span className="text-[hsl(220,30%,12%)]">Acheter des billets</span>

              <ArrowRight className="text-[hsl(220,30%,12%)] ml-3"/>
            </Link>
            {/* <div className="flex flex-col">
              <span className="text-white font-medium text-lg">
                January 5th, 2025
              </span>
              <span className="text-white/80">
                Dragon Stadium in Southlake Texas
              </span>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
