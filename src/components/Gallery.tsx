const Gallery = () => {
  const galleryImages = [
    {
      src: "/images/gallery-1.jpg",
      alt: "Artisanal chocolate truffles with gold leaf"
    },
    {
      src: "/images/gallery-2.jpg", 
      alt: "Hand-tempering dark chocolate in our workshop"
    },
    {
      src: "/images/gallery-3.jpg",
      alt: "Elegant chocolate gift boxes with ribbon"
    },
    {
      src: "/images/gallery-4.jpg",
      alt: "Hot chocolate with whipped cream and cocoa dusting"
    },
    {
      src: "/images/gallery-5.jpg",
      alt: "Chocolate-making process showing cocoa beans to bar"
    },
    {
      src: "/images/gallery-6.jpg",
      alt: "Custom chocolate wedding favors and treats"
    }
  ];

  return (
    <section id="gallery" className="py-20 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 animate-fadeIn">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            Crafted with Passion
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Step behind the scenes and witness the artistry that goes into every piece of chocolate we create
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index} 
              className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer animate-slideUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img 
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white text-sm font-medium">
                    {image.alt}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;