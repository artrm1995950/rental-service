import { FullOffer } from "../types/offer";

const offers: FullOffer[] = [
  {
     id: "bbb06a0e-3f92-446d-9a88-cb64b5d38e2b",
    title: "Elegant penthouse with city view",
    description:
      "Spacious penthouse with panoramic windows and a rooftop terrace. Ideal for a luxurious stay.",
    type: "apartment",
    price: 520,
    images: [
      "/img/penthouse-1.jpg",
      "/img/penthouse-2.jpg",
      "/img/penthouse-3.jpg",
      "/img/penthouse-4.jpg",
      "/img/penthouse-5.jpg",
      "/img/penthouse-6.jpg",
    ],
    city: {
      name: "Paris",
      location: {
        latitude: 52.5200,
        longitude: 13.4050,
        zoom: 13,
      },
    },
    location: {
      latitude: 52.5225,
      longitude: 13.4120,
      zoom: 16,
    },
    goods: [
      "Wi-Fi",
      "Air conditioning",
      "Terrace",
      "Dishwasher",
      "Washer",
      "Breakfast",
      "Smart TV",
    ],
    host: {
      isPro: true,
      name: "Elena",
      avatarUrl: "/img/avatar-elena.jpg",
    },
    isPremium: true,
    isFavorite: true,
    rating: 4.9,
    bedrooms: 3,
    maxAdults: 5,
  },

  {
    id: "dcd5a4fc-7d3f-42b4-91d7-125b7b84e102",
    title: "Lakeview cabin retreat",
    description:
      "Peaceful cabin surrounded by nature. Wooden interiors, fireplace, and a private dock.",
    type: "house",
    price: 300,
    images: [
      "/img/cabin-1.jpg",
      "/img/cabin-2.jpg",
      "/img/cabin-3.jpg",
    ],
    city: {
      name: "Cologne",
      location: {
        latitude: 47.3769,
        longitude: 8.5417,
        zoom: 13,
      },
    },
    location: {
      latitude: 47.3805,
      longitude: 8.5480,
      zoom: 16,
    },
    goods: ["Fireplace", "Wi-Fi", "Kitchen", "Washer", "Towels"],
    host: {
      isPro: false,
      name: "Jonas",
      avatarUrl: "/img/avatar-jonas.jpg",
    },
    isPremium: false,
    isFavorite: false,
    rating: 4.3,
    bedrooms: 2,
    maxAdults: 4,
  },

  {
     id: "1af19e74-426f-4a88-9a3e-5df9b3341a32",
    title: "Minimalist studio in central Tokyo",
    description:
      "Compact but efficient studio for digital nomads. Located in Shibuya, close to transport.",
    type: "room",
    price: 150,
    images: [
      "/img/tokyo-studio-1.jpg",
      "/img/tokyo-studio-2.jpg",
    ],
    
    city: {
  name: "Hamburg",
  location: {
    latitude: 53.551086,
    longitude: 9.993682,
    zoom: 13
  }
}
,
    location: {
      latitude: 35.6908,
      longitude: 139.7000,
      zoom: 16,
    },
    goods: ["Wi-Fi", "Air conditioning", "Desk", "Shared kitchen"],
    host: {
      isPro: false,
      name: "Yuki",
      avatarUrl: "/img/avatar-yuki.jpg",
    },
    isPremium: false,
    isFavorite: true,
    rating: 4.6,
    bedrooms: 1,
    maxAdults: 2,
  },

  {
    id: "fd34e212-f8a9-4b19-8a94-ea02b6d1fdc2",
    title: "Coastal house with private beach",
    description:
      "A spacious house right by the ocean with its own beach access. Perfect for a family holiday.",
    type: "house",
    price: 650,
    images: [
      "/img/beach-house-1.jpg",
      "/img/beach-house-2.jpg",
      "/img/beach-house-3.jpg",
    ],
    city: {
      name: "Hamburg",
      location: {
        latitude: 43.7102,
        longitude: 7.2620,
        zoom: 13,
      },
    },
    location: {
      latitude: 43.7150,
      longitude: 7.2750,
      zoom: 16,
    },
    goods: ["Wi-Fi", "Private beach", "Terrace", "Air conditioning", "BBQ"],
    host: {
      isPro: true,
      name: "Claire",
      avatarUrl: "/img/avatar-claire.jpg",
    },
    isPremium: true,
    isFavorite: false,
    rating: 5.0,
    bedrooms: 4,
    maxAdults: 6,
  },

  {
    id: "a3e7d75b-c9f8-41cb-96a0-5cf0e96b117d",
    title: "Romantic loft in old Prague",
    description:
      "Romantic attic loft with wooden beams and vintage decor. Located in the historic center.",
    type: "apartment",
    price: 220,
    images: [
      "/img/prague-loft-1.jpg",
      "/img/prague-loft-2.jpg",
    ],
    city: {
      name: "Prague",
      location: {
        latitude: 50.0755,
        longitude: 14.4378,
        zoom: 13,
      },
    },
    location: {
      latitude: 50.0780,
      longitude: 14.4405,
      zoom: 16,
    },
    goods: ["Wi-Fi", "Heating", "Coffee machine", "Towels"],
    host: {
      isPro: false,
      name: "Tomas",
      avatarUrl: "/img/avatar-tomas.jpg",
    },
    isPremium: false,
    isFavorite: true,
    rating: 4.4,
    bedrooms: 1,
    maxAdults: 2,
  },
  {
  id: "offer-cologne-1",
  title: "Spacious apartment in Cologne",
  description: "Modern apartment near the city center with a large balcony.",
  type: "apartment",
  price: 240,
  images: [
    "/img/penthouse-1.jpg",
    "/img/penthouse-2.jpg"
  ],
  city: {
    name: "Cologne",
    location: {
      latitude: 50.93753,
      longitude: 6.96028,
      zoom: 13
    }
  },
  location: {
    latitude: 50.9400,
    longitude: 6.9650,
    zoom: 16
  },
  goods: ["Wi-Fi", "Kitchen", "Washing machine"],
  host: {
    isPro: true,
    name: "Lukas",
    avatarUrl: "/img/avatar-jonas.jpg"
  },
  isPremium: true,
  isFavorite: false,
  rating: 4.7,
  bedrooms: 2,
  maxAdults: 3
},
{
  id: "e2f4a456-78c3-4b9b-93a7-a1f2d35ee6aa",
  title: "Cozy studio in Lisbon center",
  description: "Small but cozy studio in the heart of Lisbon.",
  type: "room",
  price: 110,
  images: [
    "/img/beach-house-1.jpg",
    "/img/beach-house-2.jpg"
  ],
  city: {
    name: "Lisbon",
    location: {
      latitude: 38.7169,
      longitude: -9.1399,
      zoom: 13
    }
  },
  location: {
    latitude: 38.7130,
    longitude: -9.1450,
    zoom: 16
  },
  goods: ["Wi-Fi", "Air conditioning"],
  host: {
    isPro: false,
    name: "Inês",
    avatarUrl: "/img/avatar-elena.jpg"
  },
  isPremium: false,
  isFavorite: true,
  rating: 4.5,
  bedrooms: 1,
  maxAdults: 2
},
{
  id: "f7b9cd98-4f4e-4db2-a9aa-b8b42df4a43c",
  title: "Bright loft in Vienna",
  description: "Sunny loft apartment near Vienna city park.",
  type: "apartment",
  price: 210,
  images: [
    "/img/prague-loft-1.jpg",
    "/img/prague-loft-2.jpg"
  ],
  city: {
    name: "Vienna",
    location: {
      latitude: 48.2082,
      longitude: 16.3738,
      zoom: 13
    }
  },
  location: {
    latitude: 48.2100,
    longitude: 16.3755,
    zoom: 16
  },
  goods: ["Wi-Fi", "Heating", "Kitchen"],
  host: {
    isPro: true,
    name: "Anna",
    avatarUrl: "/img/avatar-claire.jpg"
  },
  isPremium: true,
  isFavorite: false,
  rating: 4.6,
  bedrooms: 2,
  maxAdults: 4
}

];

export { offers };
