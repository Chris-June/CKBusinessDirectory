import type { Business } from '../../types/business';

export const mockBusinesses: Business[] = [
  {
    id: '1',
    name: 'Coastal Cafe & Bakery',
    description: 'Artisanal coffee shop and bakery serving fresh pastries, specialty coffee drinks, and light breakfast and lunch options in a cozy atmosphere.',
    logo: 'https://images.unsplash.com/photo-1559925393-8be0ec4767c8?w=400&h=400&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1200&h=400&fit=crop',
    features: [
      {
        id: 'f1',
        title: 'Fresh Baked Goods',
        description: 'Daily baked pastries and bread',
        icon: 'coffee',
      },
    ],
    contact: {
      email: 'hello@coastalcafe.com',
      phone: '(555) 123-4567',
      address: '123 Ocean Drive',
    },
    socialMedia: {
      facebook: 'https://facebook.com/coastalcafe',
      instagram: 'https://instagram.com/coastalcafe',
    },
    location: {
      latitude: 34.0522,
      longitude: -118.2437,
      address: '123 Ocean Drive',
      city: 'Santa Monica',
      state: 'CA',
      country: 'USA',
      zipCode: '90401',
    },
  },
  {
    id: '2',
    name: 'TechHub Solutions',
    description: 'Leading IT consulting firm specializing in cloud solutions, cybersecurity, and digital transformation for businesses of all sizes.',
    logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=400&h=400&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=400&fit=crop',
    features: [
      {
        id: 'f1',
        title: 'Cloud Solutions',
        description: 'Enterprise cloud services',
        icon: 'cloud',
      },
    ],
    contact: {
      email: 'contact@techhub.com',
      phone: '(555) 987-6543',
      address: '456 Tech Avenue',
    },
    socialMedia: {
      linkedin: 'https://linkedin.com/company/techhub',
      twitter: 'https://twitter.com/techhub',
    },
    location: {
      latitude: 37.7749,
      longitude: -122.4194,
      address: '456 Tech Avenue',
      city: 'San Francisco',
      state: 'CA',
      country: 'USA',
      zipCode: '94105',
    },
  },
  {
    id: '3',
    name: 'Green Earth Landscaping',
    description: 'Sustainable landscaping services including design, installation, and maintenance with a focus on native plants and water conservation.',
    logo: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?w=400&h=400&fit=crop',
    coverImage: 'https://images.unsplash.com/photo-1501261379837-c3b516c6b3a1?w=1200&h=400&fit=crop',
    features: [
      {
        id: 'f1',
        title: 'Sustainable Design',
        description: 'Eco-friendly landscaping',
        icon: 'leaf',
      },
    ],
    contact: {
      email: 'info@greenearth.com',
      phone: '(555) 789-0123',
      address: '789 Garden Road',
    },
    socialMedia: {
      facebook: 'https://facebook.com/greenearth',
      instagram: 'https://instagram.com/greenearth',
    },
    location: {
      latitude: 45.5155,
      longitude: -122.6789,
      address: '789 Garden Road',
      city: 'Portland',
      state: 'OR',
      country: 'USA',
      zipCode: '97201',
    },
  },
];