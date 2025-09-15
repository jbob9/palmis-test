import { Button } from "@/components/ui/button";
import { Home, ArrowRight } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-sports-dark text-white py-4 px-6">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            <Home className="h-6 w-6" />
            <span className="text-sm font-medium">Transfer Portal</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="text-sm font-medium hover:text-sports-green transition-colors">About</a>
            <a href="#" className="text-sm font-medium hover:text-sports-green transition-colors">Featured Athletes</a>
            <a href="#" className="text-sm font-medium hover:text-sports-green transition-colors">Activities</a>
            <a href="#" className="text-sm font-medium hover:text-sports-green transition-colors">Timeline</a>
            <a href="#" className="text-sm font-medium hover:text-sports-green transition-colors">Location</a>
          </nav>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button variant="outline" size="sm" className="border-white/20 text-white hover:bg-white/10">
            Sign Up
          </Button>
          <Button size="sm" className="bg-sports-green text-sports-dark hover:bg-sports-green/90 flex items-center space-x-2">
            <span>Live Stream</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;