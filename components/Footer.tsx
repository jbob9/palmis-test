import { Button } from "@/components/ui/button";
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[hsl(220,30%,12%)] text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Column */}
          <div>
            <h3 className="text-2xl font-bold mb-6">
              Maximizing College Athlete
              <br />
              NIL Earning Potential
            </h3>

            <div className="bg-white text-navy-dark rounded-xl p-6 mb-8 max-w-sm">
              <h4 className="font-bold mb-2">Become a partner</h4>
              <p className="text-sm mb-4">
                Interested in sponsoring or
                <br />
                partnering with Athletic Showcase?
                <br />
                Get in touch today!
              </p>

              <Button className="rounded-full w-fit">
                Contact Us
                <div className="ml-2 w-6 h-6 bg-white rounded-full flex items-center justify-center">
                  <span className="text-navy-dark text-xs">→</span>
                </div>
              </Button>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div>
              <p className="text-sm text-gray-400 mb-1">For Help</p>
              <p className="text-lg">info@athleteshowcase.com</p>
            </div>

            <div>
              <p className="text-sm text-gray-400 mb-1">For Media</p>
              <p className="text-lg">press@athleteshowcase.com</p>
            </div>

            <div>
              <p className="text-sm text-gray-400 mb-1">January 5th, 2025</p>
              <p className="text-sm text-gray-300">
                498 Gandy Street, Auburn, New York
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Button variant="outline" className="rounded-full">
                Sign Up
              </Button>

              <Button variant="outline" className="rounded-full">
                Live Stream
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="rounded-full hover:bg-white/10"
              >
                <div className="w-6 h-6 bg-white rounded-full" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-3xl font-bold">ATHLETE SHOWCASE</h2>
              <p className="text-sm text-gray-400 mt-2">
                Copyright Athlete Showcase 2024
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex gap-3">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-white/10"
                >
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-white/10"
                >
                  <Twitter className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-white/10"
                >
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-white/10"
                >
                  <Youtube className="w-5 h-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-white/10"
                >
                  <Linkedin className="w-5 h-5" />
                </Button>
              </div>

              <div className="flex gap-3 ml-6">
                <Button
                  variant="link"
                  className="text-gray-400 hover:text-white text-sm"
                >
                  Privacy Policy
                </Button>
                <Button
                  variant="link"
                  className="text-gray-400 hover:text-white text-sm"
                >
                  Terms
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
