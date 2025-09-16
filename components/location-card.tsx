import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";

const LocationCard = () => {
  return (
    <div className="container mx-auto ">
      <div className="bg-[hsl(220,30%,12%)] rounded-2xl p-6 text-white ">
        <div className="flex justify-between mb-4">
          <div className="flex flex-col justify-between">
            <div>
              {" "}
              <h2 className="text-3xl font-bold uppercase tracking-wider mb-1">
                LOCATION
              </h2>
            </div>
            <div className="flex flex-col items-cent justify-center gap-4 ">
              <div className="size-12 bg-lime-500 rounded-xl flex items-center justify-center">
                <Calendar className="size-6 text-[hsl(220,30%,12%)]" />
              </div>
              <div>
                <p className="text-2xl font-semibold">January 5th, 2025</p>
                <p className="text-sm text-gray-300">
                  Dragon Stadium in Southlake Texas
                </p>
              </div>
            </div>
            <div className="space-x-1">
              <Button className="rounded-full w-min" variant={"secondary"}>
                <MapPin />
                Open Map
              </Button>
            </div>
          </div>
          <div className="rounded-xl overflow-hidden w-96 h-96">
            <img
              src={"/1-palmis.jpg"}
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
