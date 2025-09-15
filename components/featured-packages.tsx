import PackageCard from "./package-card";

const athletes = [
  {
    name: "Nikola Jokić",
    sport: "Basketball",
    yearsInLeague: 9,
    image: "/placeholder.svg",
    featured: true,
  },
  {
    name: "Noah Lyles",
    sport: "Track",
    yearsInLeague: 8,
    image: "/placeholder.svg",
    featured: true,
  },
  {
    name: "Carlin Isles",
    sport: "Rugby",
    yearsInLeague: 8,
    image: "/placeholder.svg",
    featured: true,
  },
  {
    name: "Jordan Collins",
    sport: "Basketball",
    yearsInLeague: 3,
    image: "/placeholder.svg",
    featured: true,
  },
];

const FeaturedPackages = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-sports-dark mb-6">
            FEATURED ATHLETES
          </h2>
          <p className="text-sports-text-muted max-w-2xl mx-auto text-lg">
            Meet some of the top athletes entering the Transfer Portal. These
            players represent the future of college sports, each with the
            talent, skill, and drive to reach the next level.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {athletes.map((athlete, index) => (
            <PackageCard
              key={index}
              name={athlete.name}
              sport={athlete.sport}
              yearsInLeague={athlete.yearsInLeague}
              image={athlete.image}
              featured={athlete.featured}
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="text-sm text-sports-text-muted font-medium mb-4">
            Powered by
          </div>
          <div className="flex items-center justify-center space-x-8">
            <div className="text-2xl font-bold text-sports-dark">EXOS</div>
            <div className="text-2xl font-bold text-sports-dark">OMNIA</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPackages;
