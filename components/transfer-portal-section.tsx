import { Button } from "@/components/ui/button";
import Image from "next/image"

const TransferPortalSection = () => {
  return (
    <div className="py-16 bg-[hsl(220,30%,12%)]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Card - Call to Action */}
          <div className="bg-navy-dark rounded-2xl p-8 text-white flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold uppercase leading-tight mb-6">
              DO YOU WANT TO
              <br />
              WATCH TOP PROSPECTS
              <br />
              IN THE TRANSFER
              <br />
              PORTAL?
            </h2>

            <p className="text-gray-300 mb-8 text-sm leading-relaxed">
              Join the list of college sports fans who are rooting for their
              team to land the nation&quot;s best prospects.
            </p>

            <div className="flex items-center gap-4">
              <Button variant="secondary" className="rounded-full">
                Sign Up
              </Button>

              <Button variant="secondary" className="rounded-full">
                Live Stream
              </Button>
            </div>
          </div>

          {/* Right Card - Football Player Image */}
          <div className="bg-navy-dark rounded-2xl overflow-hidden">
            <Image
              width={560}
              height={400}
              src={"/2-palmis.jpg"}
              alt="Football player in red uniform"
              className="w-full h-full object-cover min-h-[400px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransferPortalSection;
