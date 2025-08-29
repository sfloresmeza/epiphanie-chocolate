import { siteConfig } from "@/content/site";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Clock, MapPin, Phone } from "lucide-react";

const HoursMap = () => {
  const hoursArray = Object.entries(siteConfig.hours).map(([day, hours]) => ({
    day: day.charAt(0).toUpperCase() + day.slice(1),
    hours
  }));

  return (
    <section id="hours-map" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Visit Our Store
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Come experience the magic of artisanal chocolate making in the heart of Calgary's Kensington district
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Hours & Contact */}
          <div className="space-y-8 animate-slideUp">
            <Card className="shadow-elegant">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Clock className="w-6 h-6 text-accent" />
                  <h3 className="text-2xl font-display font-semibold text-foreground">
                    Store Hours
                  </h3>
                </div>
                <div className="space-y-3">
                  {hoursArray.map(({ day, hours }) => (
                    <div key={day} className="flex justify-between items-center py-2 border-b border-border last:border-0">
                      <span className="font-medium text-foreground">{day}</span>
                      <span className={`${hours === 'Closed' ? 'text-muted-foreground' : 'text-accent font-medium'}`}>
                        {hours}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            {/* Contact Info */}
            <Card className="shadow-elegant">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <MapPin className="w-6 h-6 text-accent" />
                  <h3 className="text-2xl font-display font-semibold text-foreground">
                    Location & Contact
                  </h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="font-medium text-foreground mb-1">Address</p>
                    <p className="text-muted-foreground">{siteConfig.address}</p>
                  </div>
                  <div>
                    <p className="font-medium text-foreground mb-1">Phone</p>
                    <a 
                      href={`tel:${siteConfig.phone.replace(/\D/g, '')}`}
                      className="text-accent hover:underline"
                    >
                      {siteConfig.phone}
                    </a>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-3 pt-4">
                    <Button 
                      className="bg-accent text-white hover:bg-accent/90"
                      asChild
                    >
                      <a href={siteConfig.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                        <MapPin className="w-4 h-4 mr-2" />
                        Get Directions
                      </a>
                    </Button>
                    <Button 
                      variant="outline"
                      className="border-accent text-accent hover:bg-accent/10"
                      asChild
                    >
                      <a href={`tel:${siteConfig.phone.replace(/\D/g, '')}`}>
                        <Phone className="w-4 h-4 mr-2" />
                        Call Now
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Map */}
          <div className="animate-slideUp">
            <Card className="shadow-elegant overflow-hidden h-full min-h-[500px]">
              <CardContent className="p-0 h-full">
                <div className="w-full h-full bg-muted/30 flex items-center justify-center text-muted-foreground min-h-[500px]">
                  <div className="text-center">
                    <MapPin className="w-12 h-12 mx-auto mb-4 text-accent" />
                    <p className="text-lg font-medium mb-2">Interactive Map</p>
                    <p className="text-sm">
                      Embedded Google Maps would be placed here
                    </p>
                    <Button 
                      className="mt-4 bg-accent text-white hover:bg-accent/90"
                      asChild
                    >
                      <a href={siteConfig.googleMapsUrl} target="_blank" rel="noopener noreferrer">
                        Open in Google Maps
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HoursMap;