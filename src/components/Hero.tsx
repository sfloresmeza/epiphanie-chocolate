import { siteConfig } from "@/content/site";
import { Button } from "@/components/ui/button";
import { Phone, MapPin } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient overflow-hidden">
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-repeat bg-center bg-[length:32px_32px]"
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.2'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
               // backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
             }} />
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="animate-fadeIn">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
            {siteConfig.hero.headline}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto font-light leading-relaxed">
            {siteConfig.hero.subheading}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slideUp">
            <Button 
              size="lg" 
              className="bg-white text-accent-brown hover:bg-cream shadow-elegant text-lg px-8 py-6 rounded-full font-medium transition-all duration-300 hover:scale-105"
              onClick={() => scrollToSection('hours-map')}
            >
              {siteConfig.hero.primaryCTA}
            </Button>
            
            <div className="flex gap-3">
              {siteConfig.hero.secondaryCTAs.map((cta, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="lg"
                  className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 backdrop-blur-sm rounded-full px-6 transition-all duration-300"
                  asChild
                >
                  <a href={cta.href} {...(cta.external && { target: "_blank", rel: "noopener noreferrer" })}>
                    {cta.text === "Get Directions" && <MapPin className="w-4 h-4 mr-2" />}
                    {cta.text === "Call Now" && <Phone className="w-4 h-4 mr-2" />}
                    {cta.text}
                  </a>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;