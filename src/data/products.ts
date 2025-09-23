export interface Product {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  fullDescription: string;
  price: string;
  features: string[];
  specifications: {
    bedrooms: string;
    bathrooms: string;
    area: string;
    type: string;
    location: string;
  };
  gallery: string[];
  floorPlans: string[];
  videoId?: string;
  amenities: string[];
  locationDetails: {
    address: string;
    nearbyLandmarks: string[];
    accessibility: string[];
  };
  highlight?: string;
  icon: string;
  gradient: string;
}

export const products: Product[] = [
  {
    id: 1,
    slug: "z-korting-apartments",
    title: "Z-Korting Apartments",
    subtitle: "1 to 3 Bedrooms Available",
    description: "Affordable luxury apartments with flexible payment plans and sustainable features. Your choice is well covered with our range of 1, 2, and 3 bedroom options.",
    fullDescription: "Z-Korting Apartments represents the perfect blend of affordability and luxury. Our thoughtfully designed apartments feature sustainable materials, energy-efficient systems, and modern amenities that cater to contemporary living needs. Each unit is meticulously crafted to provide maximum comfort while maintaining our commitment to environmental responsibility.",
    price: "Starting from ₦15,000,000",
    features: [
      "1, 2 & 3 Bedroom Options",
      "Flexible Payment Plans",
      "Sustainable Design",
      "Premium Finishes",
      "24/7 Security",
      "Community Facilities"
    ],
    specifications: {
      bedrooms: "1-3",
      bathrooms: "1-2",
      area: "650-1,200 sqft",
      type: "Apartment",
      location: "Abuja"
    },
    gallery: [
      "/5-2.jpg",
      "/8.jpg",
      "/9.jpg",
      "/74.jpg",
    ],
    floorPlans: [
      "/quad1.png",
      "/quad2.png",
      "/quad3.png",
    ],
    videoId: "dy80Ty7HQTk",
    amenities: [
      "Swimming Pool",
      "Fitness Center", 
      "Children's Playground",
      "24/7 Security",
      "Parking Space",
      "Community Hall",
      "Garden Areas",
      "Backup Power"
    ],
    locationDetails: {
      address: "Plot 123, Maitama District, Abuja",
      nearbyLandmarks: [
        "Maitama Shopping Mall - 2km",
        "Abuja National Mosque - 5km", 
        "Central Business District - 3km",
        "International Airport - 45km"
      ],
      accessibility: [
        "Major road access",
        "Public transportation nearby",
        "Hospital within 5km",
        "Schools within 2km"
      ]
    },
    highlight: "Most Popular",
    icon: "Building",
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    id: 2,
    slug: "hof-city-luxury-homes",
    title: "Hof City Luxury Homes",
    subtitle: "Sustainable Gated Community",
    description: "Premium family homes in our award-winning green gated community. Experience luxury sustainable living in 100 hectares of thoughtfully planned development.",
    fullDescription: "Hof City represents the future of sustainable living. Spanning 100 hectares, this award-winning development features premium family homes designed with cutting-edge green technology. Our community is built to SDG 11 standards, ensuring sustainable cities and communities for future generations.",
    price: "Starting from ₦40,000,000",
    features: [
      "100 Hectares Development",
      "Green Gated Community",
      "3000 Family Capacity",
      "Off-Grid Technology",
      "Award-Winning Design",
      "SDG 11 Aligned"
    ],
    specifications: {
      bedrooms: "3-5",
      bathrooms: "3-4",
      area: "1,800-3,500 sqft",
      type: "Detached/Semi-Detached",
      location: "Abuja"
    },
     gallery: [
       "/8.jpg",
       "/5-2.jpg",
      "/9.jpg",
      "/74.jpg",
    ],
    floorPlans: [
      "/quad1.png",
      "/quad2.png",
      "/quad3.png",
    ],
    videoId: "dy80Ty7HQTk",
    amenities: [
      "Solar Power Systems",
      "Water Treatment Plant",
      "Community Center",
      "Sports Complex",
      "Shopping Center",
      "Medical Center",
      "Schools",
      "Parks & Recreation"
    ],
    locationDetails: {
      address: "Hof City Estate, Lugbe District, Abuja",
      nearbyLandmarks: [
        "Nnamdi Azikiwe International Airport - 15km",
        "Airport Road - 2km",
        "Lugbe Market - 3km",
        "Federal Capital Territory - 25km"
      ],
      accessibility: [
        "Direct airport road access",
        "Public transportation hub",
        "Medical facilities on-site",
        "Educational institutions on-site"
      ]
    },
    highlight: "Award Winner",
    icon: "Home",
    gradient: "from-green-500/20 to-emerald-500/20"
  },
  {
    id: 3,
    slug: "hof-court-premium",
    title: "Hof Court Premium",
    subtitle: "Luxury Residential Development",
    description: "Ultra-luxury residential development featuring world-class amenities and cutting-edge sustainable technology for the discerning homeowner.",
    fullDescription: "Hof Court Premium sets the standard for ultra-luxury living in Nigeria. This exclusive development features bespoke homes with world-class amenities, smart home technology, and uncompromising attention to detail. Each residence is a masterpiece of architectural excellence and sustainable innovation.",
    price: "Starting from ₦65,000,000",
    features: [
      "Ultra-Luxury Design",
      "Smart Home Technology",
      "World-Class Amenities",
      "Concierge Services",
      "Private Gardens",
      "Executive Club Access"
    ],
    specifications: {
      bedrooms: "4-6",
      bathrooms: "4-6",
      area: "3,000-5,500 sqft",
      type: "Luxury Villas",
      location: "Abuja"
    },
    gallery: [
      "/9.jpg",
      "/5-2.jpg",
      "/8.jpg",
      "/74.jpg",
    ],
    floorPlans: [
      "/quad1.png",
      "/quad2.png",
      "/quad3.png",
    ],
    videoId: "dQw4w9WgXcQ",
    amenities: [
      "Private Swimming Pools",
      "Home Automation",
      "Concierge Services",
      "Private Chef Services",
      "Spa & Wellness Center",
      "Private Cinema",
      "Wine Cellar",
      "Executive Lounge"
    ],
    locationDetails: {
      address: "Hof Court, Asokoro District, Abuja",
      nearbyLandmarks: [
        "Aso Rock Presidential Villa - 5km",
        "Three Arms Zone - 3km",
        "Abuja Central Mosque - 8km",
        "Transcorp Hilton - 4km"
      ],
      accessibility: [
        "VIP road access",
        "Private helipad access",
        "Diplomatic zone proximity",
        "Premium healthcare nearby"
      ]
    },
    highlight: "Ultra Luxury",
    icon: "Shield",
    gradient: "from-purple-500/20 to-violet-500/20"
  }
];