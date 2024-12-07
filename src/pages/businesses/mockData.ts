import type { Business } from '../../types/business';

export const mockBusinesses: Business[] = [
  {
    id: '1',
    name: 'The Yellow Bean Café',
    description: 'A cozy café offering locally roasted coffee, fresh pastries, and light meals.',
    isVerified: true,
    logo: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=400&h=400&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&h=400&fit=crop',
    features: [
      {
        id: 'f1',
        title: 'Local Coffee',
        description: 'Freshly roasted beans from Ontario',
        icon: 'coffee',
      },
    ],
    contact: {
      email: 'info@yellowbean.com',
      phone: '+1 (519) 555-1234',
      address: '12 King St W',
    },
    socialMedia: {
      facebook: 'https://facebook.com/yellowbean',
      instagram: 'https://instagram.com/yellowbean',
    },
    location: {
      latitude: 42.4056,
      longitude: -82.1910,
      address: '12 King St W',
      city: 'Chatham',
      province: 'ON',
      country: 'Canada',
      postalCode: 'N7M 1C6',
    },
    promotion: 'Free coffee with any breakfast order until 11 AM!',
    categories: ['Café', 'Bakery'],
    ratings: {
      average: 4.5,
      count: 123,
    },
    reviews: [
      {
        reviewer: 'John Doe',
        comment: 'Great coffee and friendly service!',
        rating: 5,
        date: '2023-12-01',
      },
      {
        reviewer: 'Jane Smith',
        comment: 'Cozy atmosphere but a bit pricey.',
        rating: 4,
        date: '2023-11-25',
      },
    ],
    hours: {
      open: '07:00',
      close: '18:00',
    },
  },
  {
    id: '2',
    name: 'Retro Suites Hotel',
    description: 'A boutique hotel offering unique, art-inspired rooms and exceptional service.',
    isVerified: true,
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=400&h=400&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=400&fit=crop',
    features: [
      {
        id: 'f2',
        title: 'Boutique Rooms',
        description: 'Art-inspired luxury suites',
        icon: 'home',
      },
    ],
    contact: {
      email: 'stay@retrosuites.com',
      phone: '+1 (519) 555-5678',
      address: '2 King St W',
    },
    socialMedia: {
      facebook: 'https://facebook.com/retrosuites',
      instagram: 'https://instagram.com/retrosuites',
    },
    location: {
      latitude: 42.4059,
      longitude: -82.1935,
      address: '2 King St W',
      city: 'Chatham',
      province: 'ON',
      country: 'Canada',
      postalCode: 'N7M 1C6',
    },
    promotion: '10% off stays booked online this week.',
    categories: ['Hotel', 'Boutique'],
    ratings: {
      average: 4.8,
      count: 456,
    },
    reviews: [
      {
        reviewer: 'Alice Taylor',
        comment: 'Stunning rooms and impeccable service.',
        rating: 5,
        date: '2023-11-30',
      },
      {
        reviewer: 'Mark Wilson',
        comment: 'A bit pricey but worth every penny.',
        rating: 4,
        date: '2023-11-27',
      },
    ],
    hours: {
      open: '00:00',
      close: '23:59',
    },
  },
  {
    id: '3',
    name: 'Simply London Boutique',
    description: 'Chic fashion boutique featuring clothing, accessories, and locally made goods.',
    isVerified: true,
    logo: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=400&h=400&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1513708928676-4b81e2dcfe43?w=1200&h=400&fit=crop',
    features: [
      {
        id: 'f3',
        title: 'Trendy Styles',
        description: 'Modern and classic fashion pieces',
        icon: 'shopping-bag',
      },
    ],
    contact: {
      email: 'shop@simplylondon.com',
      phone: '+1 (519) 555-3456',
      address: '28 Wellington St W',
    },
    socialMedia: {
      facebook: 'https://facebook.com/simplylondon',
      instagram: 'https://instagram.com/simplylondon',
    },
    location: {
      latitude: 42.4068,
      longitude: -82.1951,
      address: '28 Wellington St W',
      city: 'Chatham',
      province: 'ON',
      country: 'Canada',
      postalCode: 'N7M 1J7',
    },
    categories: ['Fashion', 'Local Goods'],
    ratings: {
      average: 4.3,
      count: 67,
    },
    reviews: [
      {
        reviewer: 'Emily Davis',
        comment: 'Beautiful collection and helpful staff!',
        rating: 5,
        date: '2023-12-02',
      },
      {
        reviewer: 'Michael Johnson',
        comment: 'Great quality but sizes run a bit small.',
        rating: 4,
        date: '2023-11-28',
      },
    ],
    hours: {
      open: '10:00',
      close: '19:00',
    },
  },
  {
    id: '4',
    name: 'Chilled Cork',
    description: 'Upscale restaurant featuring local ingredients, craft cocktails, and an elegant ambiance.',
    isVerified: true,
    logo: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=400&h=400&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1200&h=400&fit=crop',
    features: [
      {
        id: 'f4',
        title: 'Fine Dining',
        description: 'Exquisite meals made with local ingredients',
        icon: 'wine',
      },
    ],
    contact: {
      email: 'reservations@chilledcork.com',
      phone: '+1 (519) 555-7890',
      address: '22 William St',
    },
    socialMedia: {
      facebook: 'https://facebook.com/chilledcork',
      instagram: 'https://instagram.com/chilledcork',
    },
    location: {
      latitude: 42.4075,
      longitude: -82.1942,
      address: '22 William St',
      city: 'Chatham',
      province: 'ON',
      country: 'Canada',
      postalCode: 'N7M 4S1',
    },
    categories: ['Restaurant', 'Fine Dining'],
    ratings: {
      average: 4.7,
      count: 211,
    },
    reviews: [
      {
        reviewer: 'Sophia Brown',
        comment: 'Fantastic food and ambiance. A must-visit!',
        rating: 5,
        date: '2023-11-29',
      },
      {
        reviewer: 'Liam Martin',
        comment: 'Excellent service but a bit crowded.',
        rating: 4,
        date: '2023-11-26',
      },
    ],
    hours: {
      open: '17:00',
      close: '22:00',
    },
  },
];
