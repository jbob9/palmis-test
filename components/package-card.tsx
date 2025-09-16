import { Badge } from "@/components/ui/badge";

interface AthleteCardProps {
  name: string;
  sport: string;
  yearsInLeague: number;
  image: string;
  featured?: boolean;
}

const PackageCard = ({
  name,
  sport,
  yearsInLeague,
  image,
  featured = false,
}: AthleteCardProps) => {
  return (
    <div className="relative overflow-hidden rounded-2xl bg-sports-card text-white group hover:scale-105 transition-transform duration-300 min-w-64">
      {featured && (
        <div className="absolute top-4 right-4 z-10">
          <Badge className="bg-lime-400 text-black font-medium">
            {sport}
          </Badge>
        </div>
      )}

      <div className="relative h-80 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-xl font-bold mb-1">{name}</h3>
        <p className="text-white/70 text-sm">
          {yearsInLeague} years in the league
        </p>
      </div>
    </div>
  );
};

export default PackageCard;
