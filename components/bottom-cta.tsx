import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import CountdownTimer from "./count-down-timer";

const BottomCTA = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-sports-dark rounded-3xl overflow-hidden relative">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img 
                src={'/placeholder.svg'} 
                alt="College football player" 
                className="w-full h-full object-cover opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-sports-dark via-sports-dark/90 to-sports-dark/60" />
            </div>
            
            {/* Content */}
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 p-12">
              <div className="flex flex-col justify-center">
                <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
                  PREMIER
                  <br />
                  EVENT FOR
                  <br />
                  COLLEGE
                  <br />
                  SPORTS
                </h2>
                
                <p className="text-white/80 mb-8 text-lg">
                  Signup to watch the livestream for free
                </p>
                
                <div className="flex space-x-4">
                  <Button size="lg" className="bg-white text-sports-dark hover:bg-white/90 font-bold px-6 py-3 rounded-xl">
                    Live Stream
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    className="border-white/30 text-white hover:bg-white/10 font-bold px-6 py-3 rounded-xl flex items-center space-x-2"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <div className="flex items-center justify-center lg:justify-end">
                <CountdownTimer variant="card" className="max-w-xs bg-lime-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BottomCTA;