const PartnersSection = () => {
  const partners = [
    "exos", "Omnia", "exos", "exos", "exos", "exos", "exos"
  ];

  return (
    <div className="py-16 bg-gray-light">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 uppercase tracking-wider text-navy-dark">
          OUR PARTNERS
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 items-center justify-items-center">
          {partners.map((partner, index) => (
            <div key={index} className="text-gray-400 text-xl font-medium opacity-60 hover:opacity-100 transition-opacity">
              {partner}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnersSection;