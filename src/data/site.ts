export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  features: string[];
  price?: string;
}

export interface Location {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  email: string;
  hours: string;
  mapUrl?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export const siteConfig = {
  brandName: "HydroGraphix Pro",
  tagline: "Premium Water Transfer Printing & Custom Finishes",
  description: "Professional hydrographics services for automotive, firearms, sporting goods, and custom projects. Expert water transfer printing with premium finishes.",

  phone: "(555) 123-4567",
  email: "info@hydrographixpro.com",
  address: "1234 Industrial Pkwy",
  city: "Austin",
  state: "TX",
  zip: "78701",

  hours: "Mon-Fri: 8AM-6PM, Sat: 9AM-3PM",

  siteUrl: "https://hydrographixpro.com",

  socials: [
    {
      platform: "Facebook",
      url: "https://facebook.com/hydrographixpro",
      icon: "facebook"
    },
    {
      platform: "Instagram",
      url: "https://instagram.com/hydrographixpro",
      icon: "instagram"
    },
    {
      platform: "YouTube",
      url: "https://youtube.com/@hydrographixpro",
      icon: "youtube"
    }
  ] as SocialLink[],

  services: [
    {
      id: "automotive",
      name: "Automotive Parts",
      description: "Custom hydrographic finishes for interior and exterior automotive components including dashboards, trim pieces, wheels, and engine covers.",
      icon: "🚗",
      features: [
        "Interior trim pieces",
        "Dashboard components",
        "Wheel refurbishment",
        "Engine bay components",
        "Custom patterns available"
      ],
      price: "Starting at $150"
    },
    {
      id: "firearms",
      name: "Firearms & Tactical",
      description: "Durable, professional water transfer printing for firearms, magazines, and tactical equipment with camo and custom patterns.",
      icon: "🎯",
      features: [
        "Rifle and shotgun stocks",
        "Handgun frames",
        "Magazines and accessories",
        "Tactical gear",
        "Cerakote prep available"
      ],
      price: "Starting at $200"
    },
    {
      id: "sporting",
      name: "Sporting Goods",
      description: "Premium finishes for hunting equipment, fishing gear, ATVs, motorcycles, and outdoor recreational products.",
      icon: "🏹",
      features: [
        "ATV and UTV parts",
        "Motorcycle components",
        "Hunting equipment",
        "Fishing rods and reels",
        "Outdoor accessories"
      ],
      price: "Starting at $100"
    },
    {
      id: "industrial",
      name: "Industrial & Custom",
      description: "Professional hydrographics for commercial projects, prototypes, signage, and unique custom applications.",
      icon: "⚙️",
      features: [
        "Commercial equipment",
        "Prototypes and samples",
        "Signage and displays",
        "Home décor items",
        "One-off custom projects"
      ],
      price: "Custom quote"
    }
  ] as Service[],

  locations: [
    {
      id: "austin",
      name: "Austin - Main Shop",
      address: "1234 Industrial Pkwy",
      city: "Austin",
      state: "TX",
      zip: "78701",
      phone: "(555) 123-4567",
      email: "austin@hydrographixpro.com",
      hours: "Mon-Fri: 8AM-6PM, Sat: 9AM-3PM",
      mapUrl: "https://maps.google.com/?q=Austin+TX+78701"
    },
    {
      id: "dallas",
      name: "Dallas Location",
      address: "5678 Commerce St",
      city: "Dallas",
      state: "TX",
      zip: "75201",
      phone: "(555) 234-5678",
      email: "dallas@hydrographixpro.com",
      hours: "Mon-Fri: 9AM-5PM, Sat: 10AM-2PM",
      mapUrl: "https://maps.google.com/?q=Dallas+TX+75201"
    }
  ] as Location[],

  process: [
    {
      step: 1,
      title: "Surface Preparation",
      description: "Thorough cleaning and sanding to ensure optimal adhesion. We strip old coatings and prep the surface to perfection."
    },
    {
      step: 2,
      title: "Base Coat Application",
      description: "Premium base coat applied for optimal pattern adhesion and color depth. Multiple coats ensure even coverage."
    },
    {
      step: 3,
      title: "Water Transfer Dipping",
      description: "Precision dipping process where the hydrographic film is activated and applied to your item in our temperature-controlled tank."
    },
    {
      step: 4,
      title: "Rinse & Inspection",
      description: "Gentle rinse to remove residue followed by detailed quality inspection to ensure flawless pattern application."
    },
    {
      step: 5,
      title: "Drying Period",
      description: "Controlled drying environment ensures proper curing. We never rush this critical step."
    },
    {
      step: 6,
      title: "Clear Coat Finish",
      description: "Multiple layers of professional-grade clear coat for UV protection, durability, and a stunning glossy or matte finish."
    }
  ],

  faqs: [
    {
      question: "What is hydrographics?",
      answer: "Hydrographics, also known as water transfer printing, is a process that applies decorative patterns to three-dimensional objects. A specialized film is floated on water, activated with a chemical solution, and then the object is dipped through the film, transferring the pattern onto the surface."
    },
    {
      question: "How long does the process take?",
      answer: "Most projects take 3-5 business days from drop-off to completion. This includes surface prep, base coating, the dipping process, drying time, and clear coat application. Rush services may be available for an additional fee."
    },
    {
      question: "What materials can be dipped?",
      answer: "We can dip almost any solid material including plastics, metal, wood, glass, and ceramics. Common items include automotive parts, firearms, sporting goods, helmets, and home décor. If you're unsure about your item, contact us for a consultation."
    },
    {
      question: "How durable is the finish?",
      answer: "When properly applied with our professional-grade clear coats, hydrographic finishes are extremely durable and can last for years. The finish is UV-resistant, scratch-resistant, and can withstand normal wear and tear. We recommend proper care and maintenance for optimal longevity."
    },
    {
      question: "Can I choose any pattern?",
      answer: "We offer hundreds of patterns including carbon fiber, camo, wood grains, geometric designs, and more. If you have a custom pattern in mind, contact us to discuss feasibility. We can source most commercially available hydrographic films."
    },
    {
      question: "Do you offer warranty?",
      answer: "Yes, we stand behind our work with a 1-year warranty against defects in workmanship. This covers peeling, flaking, or adhesion issues when the item is used under normal conditions. Warranty does not cover damage from accidents, abuse, or improper maintenance."
    },
    {
      question: "What's the cost for a typical project?",
      answer: "Pricing varies based on item size, complexity, and pattern choice. Small items start at $100, automotive parts typically range from $150-$400, and firearms start at $200. Contact us with photos and details for an accurate quote."
    },
    {
      question: "Do I need to disassemble my item?",
      answer: "In most cases, yes. Items should be disassembled and any parts you don't want dipped should be removed. We can provide disassembly services for an additional fee. Bring your item in for a consultation and we'll advise on the best approach."
    }
  ],

  testimonials: [
    {
      name: "Mike Richardson",
      location: "Austin, TX",
      rating: 5,
      text: "Absolutely blown away by the quality! Had my truck interior pieces done in carbon fiber and they look factory. The attention to detail is incredible.",
      project: "Automotive Interior"
    },
    {
      name: "Sarah Martinez",
      location: "Dallas, TX",
      rating: 5,
      text: "Professional service from start to finish. They walked me through the entire process and the final result on my AR-15 exceeded expectations. Highly recommend!",
      project: "Firearm Finish"
    },
    {
      name: "Jason Weber",
      location: "Round Rock, TX",
      rating: 5,
      text: "These guys are true craftsmen. Had my motorcycle parts and ATV panels done. The finish is flawless and has held up perfectly over the past year.",
      project: "Powersports"
    }
  ]
} as const;
