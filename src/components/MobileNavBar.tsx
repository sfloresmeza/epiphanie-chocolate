import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/content/site";

const MobileNavBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-border shadow-lg md:hidden">
      <div className="flex">
        <Button
          className="flex-1 rounded-none py-4 bg-accent text-white hover:bg-accent/90"
          asChild
        >
          <a href={`tel:${siteConfig.phone.replace(/\D/g, '')}`}>
            <Phone className="w-5 h-5 mr-2" />
            Call Us
          </a>
        </Button>
        <Button
          className="flex-1 rounded-none py-4 bg-primary text-white hover:bg-primary/90"
          asChild
        >
          <a href={siteConfig.googleMapsUrl} target="_blank" rel="noopener noreferrer">
            <MapPin className="w-5 h-5 mr-2" />
            Directions
          </a>
        </Button>
      </div>
    </div>
  );
};

export default MobileNavBar;