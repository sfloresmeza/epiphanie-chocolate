import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, ChevronLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto px-6">
        <div className="mb-8">
          <h1 className="text-6xl font-display font-bold text-accent mb-4">404</h1>
          <h2 className="text-2xl font-display font-semibold text-foreground mb-4">
            Sweet! This page doesn't exist
          </h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            Looks like this page melted away! Let's get you back to our delicious chocolates.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            className="bg-accent text-white hover:bg-accent/90"
            onClick={() => window.history.back()}
          >
            <ChevronLeft className="w-4 h-4 mr-2" />
            Go Back
          </Button>
          <Button 
            variant="outline"
            className="border-accent text-accent hover:bg-accent/10"
            asChild
          >
            <a href="/">
              <Home className="w-4 h-4 mr-2" />
              Return Home
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
