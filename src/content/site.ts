export const siteConfig = {
  businessName: "Epiphanie Chocolate",
  tagline: "Artisanal Chocolates Crafted with Love",
  
  // Contact Information
  address: "1417 11 St SW, Calgary, AB T2R 1G7",
  phone: "(403) 555-CHOC",
  email: "hello@epiphaniechocolate.com",
  website: "https://epiphaniechocolate.com",
  googleMapsUrl: "https://maps.google.com/?q=1417+11+St+SW,+Calgary,+AB+T2R+1G7",
  
  // Business Hours
  hours: {
    monday: "Closed",
    tuesday: "11:00 AM - 6:00 PM",
    wednesday: "11:00 AM - 6:00 PM", 
    thursday: "11:00 AM - 6:00 PM",
    friday: "11:00 AM - 6:00 PM",
    saturday: "11:00 AM - 6:00 PM",
    sunday: "Closed"
  },
  
  // Hero Section
  hero: {
    headline: "Calgary's Sweetest Artisanal Chocolate Experience",
    subheading: "Family-run since 2010, we craft premium chocolates using ethically sourced cocoa and time-honored techniques. Every bite tells a story of passion and quality.",
    primaryCTA: "Visit Our Store",
    secondaryCTAs: [
      { text: "Get Directions", href: "https://maps.google.com/?q=1417+11+St+SW,+Calgary,+AB+T2R+1G7", external: true },
      { text: "Call Now", href: "tel:(403)555-2462", external: true }
    ]
  },
  
  // About Section
  about: {
    title: "Our Sweet Story",
    content: "Born from a passion for exceptional chocolate, Epiphanie began as a small family dream in Calgary's vibrant Kensington district. We source the finest cocoa beans from sustainable farms and transform them into works of edible art using traditional European techniques passed down through generations.",
    highlights: [
      "Family-owned & operated since 2010",
      "Ethically sourced cocoa beans",
      "Handcrafted in small batches",
      "Traditional European techniques"
    ]
  },
  
  // Product Categories
  categories: [
    {
      name: "Signature Chocolates",
      description: "Our award-winning collection of unique flavor combinations",
      image: "/images/signature-chocolates.jpg"
    },
    {
      name: "Classic Chocolates", 
      description: "Timeless favorites crafted to perfection",
      image: "/images/classic-chocolates.jpg"
    },
    {
      name: "Corporate Events & Special Occasions",
      description: "Custom chocolate creations for your memorable moments",
      image: "/images/corporate-events.jpg"
    },
    {
      name: "Custom Chocolates",
      description: "Personalized treats made just for you",
      image: "/images/custom-chocolates.jpg"
    },
    {
      name: "Easter Bunnies & Eggs",
      description: "Seasonal favorites that bring joy to every celebration",
      image: "/images/easter-collection.jpg"
    },
    {
      name: "Sugar-Free Chocolate",
      description: "Delicious options for dietary preferences without compromise",
      image: "/images/sugar-free.jpg"
    }
  ],
  
  // Seasonal Items
  seasonal: [
    {
      name: "Signature Hot Chocolate",
      description: "Rich, velvety hot chocolate made with our finest cocoa",
      price: "$6.50"
    },
    {
      name: "Artisanal Mocha",
      description: "Perfect blend of our chocolate with locally roasted coffee",
      price: "$7.25"
    },
    {
      name: "Seasonal Gift Boxes",
      description: "Curated collections that change with Calgary's seasons",
      price: "From $25"
    },
    {
      name: "Hot Chocolate Bombs",
      description: "Interactive chocolate spheres that transform in your mug",
      price: "$8.00"
    }
  ],
  
  // Testimonials
  testimonials: [
    {
      name: "Sarah M.",
      location: "Calgary, AB",
      quote: "The most incredible chocolate I've ever tasted! The passion chocolate truffle is absolutely divine."
    },
    {
      name: "Mike R.",
      location: "Kensington",
      quote: "Epiphanie's custom wedding favors were the hit of our reception. Guests are still talking about them!"
    },
    {
      name: "Jennifer L.",
      location: "Calgary, AB", 
      quote: "Their hot chocolate is like a warm hug on a cold Calgary day. Simply perfection!"
    }
  ],
  
  // Social Media
  social: {
    instagram: "@epiphaniechocolate",
    facebook: "EpiphanieChocolateCalgary",
    twitter: "@EpiphanieYYC"
  },
  
  // Navigation
  navigation: [
    { label: "About", href: "#about" },
    { label: "Our Chocolates", href: "#categories" },
    { label: "Hot Drinks", href: "#seasonal" },
    { label: "Gallery", href: "#gallery" },
    { label: "Visit Us", href: "#hours-map" },
    { label: "Contact", href: "#contact" }
  ]
};