import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import CountdownTimer from "./count-down-timer";

const BottomCTA = () => {
  return (
    <section className="py-20 bg-white">
        <div className="container mx-auto px-3">
          <div className="bg-sports-dark rounded-3xl overflow-hidden relative">
            {/* Background Image */}
            <div className="absolute inset-0">
              <img 
                src={'/1-palmis.jpg'} 
                alt="College football player" 
                className="w-full h-full object-cover opacity-80"
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
                  <Button size="lg" className="font-bold rounded-full" variant={'secondary'}>
                    Live Stream
                  </Button>
                   <Button className="rounded-full" variant={"secondary"} size="icon">
                <ArrowRight/>
              </Button>
                </div>
              </div>
              
              <div className="flex items-center justify-center lg:justify-end">
                <CountdownTimer variant="card" className="max-w-xs bg-lime-400" />
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default BottomCTA;