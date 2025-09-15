import { Button } from "@/components/ui/button";
import { Calendar, MapPin, MoreHorizontal, Play } from "lucide-react";

const LocationCard = () => {
  return (
    <div className="container mx-auto px-6">
      <div className="bg-[hsl(220,30%,12%)] rounded-2xl p-6 text-white ">
        <div className="flex justify-between mb-4">
          <div className="flex flex-col justify-between">
           <div> <h2 className="text-2xl font-bold uppercase tracking-wider mb-1">
              LOCATION
            </h2></div>
            <div className="flex flex-col items-cent justify-center gap-4 ">
              <div className="size-10 bg-lime-500 rounded-xl flex items-center justify-center">
                <Calendar className="size-5 text-[hsl(220,30%,12%)]" />
              </div>
              <div>
                <p className="text-xl font-semibold">January 5th, 2025</p>
                <p className="text-sm text-gray-300">
                  Dragon Stadium in Southlake Texas
                </p>
              </div>
            </div>
            <div>
               <Button className="rounded-full w-min" variant={'secondary'}>
              <MapPin className="w-4 h-4 mr-1" />
              Open Map
            </Button>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden w-72 h-80">
            <img
              src={"/placeholder.svg"}
              alt="Stadium crowd"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default LocationCard;
