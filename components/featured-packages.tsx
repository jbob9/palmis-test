import PackageCard from "./package-card";

const athletes = [
  {
    name: "Les études classiques",
    price: 6000,
    description:
      "Contient des textes sources primaires en traduction (Homère, Platon, Cicéron)",
    image: "/bridgerton-1.jpg",
    featured: true,
  },
  {
    name: "Les manuscrits médiévaux",
    price: 4500,
    description:
      "Comprend des fac-similés de manuscrits enluminés, des guides paléographiques pour la lecture d'écritures anciennes",
    image: "/pack-1.jpg",
    featured: true,
  },
  {
    name: "L'art et la littérature de la Renaissance",
    price: 3000,
    description:
      "Présente des reproductions de haute qualité d'œuvres d'art de la Renaissance et des documents biographiques",
    image: "/bridgerton.jpg",
    featured: true,
  },
  {
    name: "La révolution scientifique",
    price: 5000,
    description:
      "Contient des extraits d'œuvres de Galilée, Newton et Copernic, des modèles interactifs de la mécanique céleste",
    image: "/pack-2.jpg",
    featured: true,
  },
  {
    name: "La philosophie des Lumières",
    price: 7500,
    description:
      "Comprend des textes clés de Voltaire, Rousseau et Locke, des guides d'analyse de la théorie politique.",
    image: "/pack-3.jpg",
    featured: true,
  },
  {
    name: "La littérature et la société victoriennes",
    price: 5000,
    description:
      "Présente des romans et des poèmes de l'époque, des documents d'histoire sociale sur l'industrialisation.",
    image: "/pack-4.webp",
    featured: true,
  },
];

const FeaturedPackages = () => {
  return (
    <section className="py-20 bg-white" id="kit">
      <div className="container mx-auto px-3">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-prices-dark mb-6 uppercase">
            kits scolaires
          </h2>
          <p className="text-prices-text-muted max-w-2xl mx-auto text-lg">
            Que vous soyez étudiant, éducateur ou apprenant tout au long de la
            vie, ces six kits essentiels offrent un aperçu inégalé des idées,
            des innovations et des individus qui ont défini la civilisation
            occidentale.
          </p>
        </div>

        <div className="flex items-center overflow-x-scroll gap-4">
          {athletes.map((athlete, index) => (
            <PackageCard
              key={index}
              name={athlete.name}
              price={athlete.price}
              description={athlete.description}
              image={athlete.image}
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="text-sm text-prices-text-muted font-medium mb-4">
            Powered by
          </div>
          <div className="flex items-center justify-center space-x-8">
            <div className="text-2xl font-bold text-prices-dark uppercase">
              Palmis Magazine
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPackages;
