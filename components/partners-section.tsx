const PartnersSection = () => {
  const partners = [
    "Palmis magazine", "Jojo Restaurant", "Expo 17", "Barbancourt", "Avyga", "exos",
  ];

  return (
    <div className="py-16 bg-gray-light">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 uppercase tracking-wider text-navy-dark">
          NOS PARTENAIRES
        </h2>
        
        <div className="flex gap-8 items-center justify-center max-w-sm flex-wrap mx-auto">
          {partners.map((partner, index) => (
            <div key={index} className="text-gray-400 text-xl font-medium opacity-60 hover:opacity-100 transition-opacity border-2 rounded-4xl p-3">
              {partner}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;