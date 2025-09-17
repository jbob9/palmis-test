"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqItems = [
    "Qu’est-ce que le NIL et comment affecte-t-il les étudiants?",
    "Qui peut participer à cet événement?",
    "Quelles opportunités NIL offre aux étudiants?",
    "Y aura-t-il un soutien pour la création d’accords de parrainage?",
  ];

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          {/* FAQ Sidebar */}
          <div className="lg:w-1/3">
            <div className="bg-lime-300 rounded-2xl p-8 text-navy-dark sticky top-8">
              <h2 className="text-4xl font-bold mb-8">FAQ</h2>

              <div className="mb-8">
                <p className="text-sm font-medium mb-1">En as-tu un autre</p>
                <p className="text-sm font-medium">question?</p>
              </div>

              <a
                href="mailto:palmismagazine@gmail.com"
                className={cn(buttonVariants(), "rounded-full w-fit")}
              >
                Contacter-nous
                <div className="ml-2 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <span className="text-[hsl(220,30%,12%)] text-xs">→</span>
                </div>
              </a>
            </div>
          </div>

          {/* FAQ Questions */}
          <div className="lg:w-2/3">
            <div className="space-y-4">
              {faqItems.map((question, index) => (
                <div
                  key={index}
                  className="border border-gray-300 rounded-xl p-6 bg-white hover:shadow-sm transition-shadow"
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="flex items-center justify-between w-full text-left"
                  >
                    <span className="font-medium text-navy-dark pr-4">
                      {question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 transition-transform ${
                        openItems.includes(index) ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {openItems.includes(index) && (
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <p className="text-gray-600 text-sm">
                        C&apos;est ici que se trouve la réponse à &quot;{question}
                        &quot; apparaîtrat avec des informations détaillées pour
                        les utilisateurs.
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
