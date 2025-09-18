import { buttonVariants } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { Calendar, MapPin } from "lucide-react";
import Image from "next/image";

const LocationCard = () => {
  return (
    <div className="container mx-auto" id="location">
      <div className="bg-[hsl(220,30%,12%)] rounded-2xl p-6 text-white ">
        <div className="flex flex-col md:flex-row justify-between mb-4">
          <div className="flex flex-col justify-between gap-4 mb-4 md:mb-0">
            <div>
              {" "}
              <h2 className="text-3xl font-bold uppercase tracking-wider mb-1">
                LOCATION
              </h2>
            </div>
            <div className="flex flex-col items-cent justify-center gap-4">
              <div className="size-12 bg-lime-500 rounded-xl flex items-center justify-center">
                <Calendar className="size-6 text-[hsl(220,30%,12%)]" />
              </div>
              <div>
                <p className="text-2xl font-semibold">September 30th, 2025</p>
                <p className="text-sm text-gray-300">
                  Rue de Panaméricaine & Nerette, Pétionville 6141
                </p>
              </div>
            </div>
            <div className="space-x-1">
              <a
                href="https://maps.app.goo.gl/v7pRSwWNvxEw9gB97"
                target="_blank"
                className={cn(
                  buttonVariants({ variant: "secondary" }),
                  "rounded-full w-min"
                )}
              >
                <MapPin />
                Ouvrir la carte
              </a>
            </div>
          </div>
          <div className="w-full md:w-96 h-96">
            <Carousel>
              <CarouselContent>
                <CarouselItem>
                  <div className="rounded-xl overflow-hidden w-full md:w-96 h-96">
                    <Image
                      width={385}
                      height={385}
                      src={"/1-palmis.jpg"}
                      alt="Stadium crowd"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="rounded-xl overflow-hidden w-full md:w-96 h-96">
                    <Image
                      width={385}
                      height={385}
                      src={"/bridgerton.jpg"}
                      alt="Stadium crowd"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
                <CarouselItem>
                  <div className="rounded-xl overflow-hidden w-full md:w-96 h-96">
                    <Image
                      width={385}
                      height={385}
                      src={"/bridgerton-2.jpg"}
                      alt="Stadium crowd"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="-left-6 text-black" />
              <CarouselNext className="-right-6 text-black" />
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationCard;
