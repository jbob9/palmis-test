"use client";

import { payKit } from "@/app/tickets/mutation.server";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { LoaderCircle } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface AthleteCardProps {
  name: string;
  price: number;
  description: string;
  image: string;
}

const PackageCard = ({
  name,
  price,
  description,
  image,
}: AthleteCardProps) => {
  const [loading, setLoading] = useState(false);

  const handlePayment = async (price: number) => {
    setLoading(true);
    const res = await payKit(price);
    if (res?.redirectUrl) {
      window.location.href = res.redirectUrl;
    }
    setLoading(false);
    return;
  };

  return (
    <button
      onClick={async () => await handlePayment(price)}
      className="relative overflow-hidden rounded-2xl bg-prices-card text-white group hover:scale-105 transition-transform duration-300 min-w-64 text-start cursor-pointer"
    >
      <div className="absolute top-4 right-4 z-10">
        <Badge
          className={cn("bg-lime-400 text-black font-medium", {
            "bg-gray-300": loading,
          })}
        >
          {loading ? (
            <LoaderCircle className="h-4 w-4 animate-spin" />
          ) : (
            <>Acheter - {price} HTG</>
          )}
        </Badge>
      </div>

      <div className="relative h-80 overflow-hidden">
        <Image
          width={450}
          height={360}
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-white/70 text-sm">{description}</p>
      </div>
    </button>
  );
};

export default PackageCard;
