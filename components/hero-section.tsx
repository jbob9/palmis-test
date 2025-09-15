import { Calendar, MapPin } from "lucide-react";
import CountdownTimer from "./count-down-timer";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-sports-dark overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={"/placeholder.svg"}
          alt="Football player"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sports-dark via-sports-dark/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col justify-center min-h-screen">
        <div className="max-w-2xl">
          <div className="text-sm text-white/70 font-medium mb-4">
            Transfer Portal
          </div>

          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-tight">
            ATHLETE
            <br />
            SHOWCASE
          </h1>

          <CountdownTimer className="mb-8" />

          <p className="text-white/80 text-lg mb-8 max-w-md">
            Meet some of the top athletes embracing the Transfer Portal
          </p>

          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 mb-8 max-w-sm">
            <div className="flex items-center space-x-3 mb-2">
              <Calendar className="w-5 h-5 text-sports-green" />
              <span className="text-white font-medium">January 5th, 2025</span>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-sports-green" />
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
