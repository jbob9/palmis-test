import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const TransferPortalSection = () => {
  return (
    <div className="py-16 bg-[hsl(220,30%,12%)]">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Card - Call to Action */}
          <div className="bg-navy-dark rounded-2xl p-4 mdLp-8 text-white flex flex-col justify-center">
            <h2 className="text-3xl md:text-4xl font-bold uppercase leading-tight mb-6">
              VOULEZ-VOUS
              <br />
              REGARDEZ L'ÉVÉNEMENT
              <br />
              DANS VOTRE MAISON
              <br />
              EN DIRECT?
            </h2>

            <p className="text-gray-300 mb-8 text-sm leading-relaxed">
              Rejoignez la liste des étudiants et des supporters universitaires
              qui encouragent leur équipe à recruter les meilleurs espoirs du
              pays.
            </p>

            <div className="flex items-center gap-4">
              <Link
                href="/tickets"
                className={cn(
                  buttonVariants({ variant: "secondary" }),
                  "rounded-full"
                )}
              >
                Acheter des billets
              </Link>

              <Link
                href="/stream"
                className={cn(
                  buttonVariants({ variant: "secondary" }),
                  "rounded-full"
                )}
              >
                Live Stream
              </Link>
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
