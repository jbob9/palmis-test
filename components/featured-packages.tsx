import PackageCard from "./package-card";

const athletes = [
  {
    name: "Nikola Jokić",
    sport: "6000 HTG",
    yearsInLeague: 9,
    image: "/bridgerton-1.jpg",
    featured: true,
  },
  {
    name: "Noah Lyles",
    sport: "4500 HTG",
    yearsInLeague: 8,
    image: "/pack-1.jpg",
    featured: true,
  },
  {
    name: "Carlin Isles",
    sport: "3000 HTG",
    yearsInLeague: 8,
    image: "/bridgerton.jpg",
    featured: true,
  },
  {
    name: "Jordan Collins",
    sport: "5000 HTG",
    yearsInLeague: 3,
    image: "/pack-2.jpg",
    featured: true,
  },
   {
    name: "Jordan Collins",
    sport: "7500 HTG",
    yearsInLeague: 3,
    image: "/pack-3.jpg",
    featured: true,
  },
   {
    name: "Jordan Collins",
    sport: "5000 HTG",
    yearsInLeague: 3,
    image: "/pack-4.webp",
    featured: true,
  },
];

const FeaturedPackages = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-3">
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

        <div className="flex items-center overflow-x-scroll gap-4">
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
