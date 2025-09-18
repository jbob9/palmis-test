const AboutSection = () => {
  return (
    <section className="py-20 bg-gray-50 rounded-t-4xl border-t-2" id="about">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl font-black text-sports-dark mb-6">
                À PROPOS
              </h2>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-sports-dark mb-4 leading-tight uppercase">
                  Spectacle Bridgerton EST LE festival d&apos;été qui vous mènera vers de meilleures opportunités de revenus.
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="text-sports-text-muted leading-relaxed">
                    Le Spectacle Bridgerton est accessible uniquement sur invitation aux personnalités les plus influentes du monde de l&apos;éducation. Les fans peuvent se connecter en direct pour voir les meilleurs talents s&apos;affronter et augmenter leur potentiel de gains NIL. Le Showcase des athlètes ouvrira la voie à des changements importants et à des rencontres décisives pour leur carrière.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-sports-dark mb-3">À quoi s&apos;attendre</h4>
                  <p className="text-sports-text-muted leading-relaxed">
                    Soyez témoin d&apos;une expérience explosive, d&apos;entretiens universitaires et de données NIL - le tout dans un événement passionnant diffusé en direct.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;