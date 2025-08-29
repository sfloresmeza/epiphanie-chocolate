import { siteConfig } from "@/content/site";
import { Check } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-card">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-fadeIn">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              {siteConfig.about.title}
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {siteConfig.about.content}
            </p>
            
            <div className="space-y-4">
              {siteConfig.about.highlights.map((highlight, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex-shrink-0 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-foreground font-medium">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="relative animate-slideUp">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src="/images/about-chocolate-making.jpg" 
                alt="Artisan crafting chocolate by hand in our Calgary workshop"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;