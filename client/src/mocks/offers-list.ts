import { OffersList } from "../types/offer";


export const offersList: OffersList[] = [
  {
     id: "bbb06a0e-3f92-446d-9a88-cb64b5d38e2b",
    title: "Sunny apartment near the sea",
    type: "apartment",
    price: 290,
    previewImage: "/img/1.jpg",
    city: {
      name: "Paris",
      location: {
        latitude: 41.3874,
        longitude: 2.1686,
        zoom: 13,
      },
    },
    location: {
      latitude: 41.3900,
      longitude: 2.1700,
      zoom: 16,
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.8,
  },
  {
     id: "dcd5a4fc-7d3f-42b4-91d7-125b7b84e102",
    title: "Charming studio in old town",
    type: "room",
    price: 120,
    previewImage: "/img/2.jpg",
    city: {
      name: "Cologne",
      location: {
        latitude: 50.0755,
        longitude: 14.4378,
        zoom: 13,
      },
    },
    location: {
      latitude: 50.0770,
      longitude: 14.4340,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.3,
  },
  {
     id: "1af19e74-426f-4a88-9a3e-5df9b3341a32",
    title: "Modern duplex with skyline view",
    type: "house",
    price: 510,
    previewImage: "/img/3.jpg",
    city: {
      name: "Amsterdam",
      location: {
        latitude: 25.2048,
        longitude: 55.2708,
        zoom: 13,
      },
    },
    location: {
      latitude: 25.2100,
      longitude: 55.2760,
      zoom: 16,
    },
    isFavorite: true,
    isPremium: true,
    rating: 4.9,
  },
  {
     id: "fd34e212-f8a9-4b19-8a94-ea02b6d1fdc2",
    title: "Rustic cabin in the Alps",
    type: "house",
    price: 330,
    previewImage: "/img/4.jpg",
    city: {
      name: "Brussels",
      location: {
        latitude: 47.3769,
        longitude: 8.5417,
        zoom: 13,
      },
    },
    location: {
      latitude: 47.3800,
      longitude: 8.5500,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.5,
  },
  {
       id: "a3e7d75b-c9f8-41cb-96a0-5cf0e96b117d",
    title: "Quiet minimalist room near park",
    type: "room",
    price: 75,
    previewImage: "/img/5.jpg",
    city: {
      name: "Hamburg",
      location: {
        latitude: 48.2082,
        longitude: 16.3738,
        zoom: 13,
      },
    },
    location: {
      latitude: 48.2100,
      longitude: 16.3700,
      zoom: 16,
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.1,
  },
  {
  id: "e2f4a456-78c3-4b9b-93a7-a1f2d35ee6aa",
  title: "Cozy apartment in Lisbon center",
  type: "apartment",
  price: 200,
  previewImage: "/img/6.jpg",
  city: {
    name: "Lisbon",
    location: {
      latitude: 38.7169,
      longitude: -9.1399,
      zoom: 13,
    },
  },
  location: {
    latitude: 38.7138,
    longitude: -9.1425,
    zoom: 16,
  },
  isFavorite: true,
  isPremium: false,
  rating: 4.2,
},
{
  id: "f7b9cd98-4f4e-4db2-a9aa-b8b42df4a43c",
  title: "Stylish flat near city park",
  type: "apartment",
  price: 180,
  previewImage: "/img/7.jpg",
  city: {
    name: "Vienna",
    location: {
      latitude: 48.2082,
      longitude: 16.3738,
      zoom: 13,
    },
  },
  location: {
    latitude: 48.2060,
    longitude: 16.3700,
    zoom: 16,
  },
  isFavorite: false,
  isPremium: true,
  rating: 4.4,
},

];
