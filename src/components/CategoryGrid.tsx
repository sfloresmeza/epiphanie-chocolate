import { siteConfig } from "@/content/site";
import { Card, CardContent } from "@/components/ui/card";

const CategoryGrid = () => {
  return (
    <section id="categories" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Our Chocolate Collections
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From signature creations to timeless classics, each piece is handcrafted with passion and premium ingredients
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {siteConfig.categories.map((category, index) => (
            <Card key={index} className="group cursor-pointer transition-all duration-300 hover:shadow-warm hover:-translate-y-2 animate-slideUp">
              <CardContent className="p-0">
                <div className="aspect-[4/3] overflow-hidden rounded-t-lg">
                  <img 
                    src={category.image} 
                    alt={`${category.name} - Premium handcrafted chocolates`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                    {category.name}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {category.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;