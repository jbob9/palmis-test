const AboutSection = () => {
  return (
    <section className="py-20 bg-gray-50 rounded-t-4xl border-t-2" id="about">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-4xl font-black text-sports-dark mb-8">
                ABOUT
              </h2>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-3xl font-bold text-sports-dark mb-4 leading-tight">
                  ATHLETE SHOWCASE IS THE PREMIER EVENT FOR TOP TRANSFER PORTAL PROSPECTS, DIRECTS TO GREATER NIL EARNING OPPORTUNITIES.
                </h3>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <p className="text-sports-text-muted leading-relaxed">
                    Athlete Showcase is by invite-only for the top transfer portal prospects in college football. Fans can tune in live to watch elite talent take on the field and increase their NIL earning potential. Athlete Showcase will set the stage for big moves and career-defining connections.
                  </p>
                </div>
                
                <div>
                  <h4 className="font-bold text-sports-dark mb-3">What to Expect</h4>
                  <p className="text-sports-text-muted leading-relaxed">
                    Witness explosive workouts, college athlete interviews, and NIL data - all in one thrilling live streamed event.
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