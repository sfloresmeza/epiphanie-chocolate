import { siteConfig } from "@/content/site";
import { Heart, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-display font-bold mb-4">
              {siteConfig.businessName}
            </h3>
            <p className="text-secondary-foreground/80 mb-4">
              {siteConfig.tagline}
            </p>
            <p className="text-sm text-secondary-foreground/70">
              Crafting premium chocolates in Calgary since 2010
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <nav className="space-y-2">
              {siteConfig.navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-secondary-foreground/80 hover:text-secondary-foreground transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Visit Us</h4>
            <div className="space-y-2 text-sm text-secondary-foreground/80">
              <p>{siteConfig.address}</p>
              <p>
                <a 
                  href={`tel:${siteConfig.phone.replace(/\D/g, '')}`}
                  className="hover:text-secondary-foreground transition-colors"
                >
                  {siteConfig.phone}
                </a>
              </p>
              <p>Tuesday - Saturday: 11AM - 6PM</p>
              <p>Sunday & Monday: Closed</p>
            </div>
          </div>
        </div>
        
        {/* Social & Copyright */}
        <div className="border-t border-secondary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <a
                href={`https://instagram.com/${siteConfig.social.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-foreground/60 hover:text-secondary-foreground transition-colors"
                aria-label="Follow us on Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={`https://facebook.com/${siteConfig.social.facebook}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-foreground/60 hover:text-secondary-foreground transition-colors"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={`https://twitter.com/${siteConfig.social.twitter.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary-foreground/60 hover:text-secondary-foreground transition-colors"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-secondary-foreground/70">
              <span>© {currentYear} {siteConfig.businessName}. Powered by ByteSphere</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;