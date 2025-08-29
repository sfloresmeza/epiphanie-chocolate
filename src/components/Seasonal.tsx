import { siteConfig } from "@/content/site";
import { Card, CardContent } from "@/components/ui/card";
import { Coffee, Gift, Snowflake, Heart } from "lucide-react";

const Seasonal = () => {
  const getIcon = (name: string) => {
    if (name.includes("Hot Chocolate") || name.includes("Mocha")) return Coffee;
    if (name.includes("Gift")) return Gift;
    if (name.includes("Seasonal")) return Snowflake;
    return Heart;
  };

  return (
    <section id="seasonal" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Hot Drinks & Seasonal Favorites
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Warm your soul with our signature beverages and celebrate each season with special chocolate creations
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {siteConfig.seasonal.map((item, index) => {
            const IconComponent = getIcon(item.name);
            return (
              <Card key={index} className="group transition-all duration-300 hover:shadow-elegant animate-slideUp">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                      <IconComponent className="w-8 h-8 text-accent" />
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-xl font-display font-semibold text-foreground">
                          {item.name}
                        </h3>
                        <span className="text-lg font-semibold text-accent">
                          {item.price}
                        </span>
                      </div>
                      <p className="text-muted-foreground leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Seasonal;